import { NextResponse } from "next/server";
import Stripe from "stripe";
import axios from "axios"; 

const { STRIPE_SECRET_KEY } = process.env;

async function getLatestSalePriceInMatic() {
 
  return 10; 
}

async function getMaticToUsdExchangeRate() {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=usd');
    return response.data['matic-network'].usd;
  } catch (error) {
    console.error('Error fetching Matic to USD exchange rate:');
    throw error;
  }
}

export async function POST(req: Request) {
  if (!STRIPE_SECRET_KEY) {
    throw 'Server misconfigured. Did you forget to add a ".env.local" file?';
  }
  

  const { buyerWalletAddress } = await req.json();
  if (!buyerWalletAddress) {
    throw 'Request is missing "buyerWalletAddress".';
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2023-10-16",
  });


  const latestSalePriceInMatic = await getLatestSalePriceInMatic();


  const maticToUsdExchangeRate = await getMaticToUsdExchangeRate();

  
  const latestSalePriceInUsd = latestSalePriceInMatic * maticToUsdExchangeRate;

 
  const paymentIntent = await stripe.paymentIntents.create({
    amount: latestSalePriceInUsd * 100, 
    currency: "usd",
    description: "Example NFT delivered by thirdweb Engine",
    payment_method_types: ["card"],
    metadata: { buyerWalletAddress },
  });

  return NextResponse.json({
    clientSecret: paymentIntent.client_secret,
  });
}
