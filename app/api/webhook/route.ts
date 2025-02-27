import { Engine } from "@thirdweb-dev/engine";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

const {
  WEBHOOK_SECRET_KEY,
  ENGINE_URL,
  ENGINE_ACCESS_TOKEN,
  NEXT_PUBLIC_NFT_CONTRACT_ADDRESS,
  BACKEND_WALLET_ADDRESS,
} = process.env;

export async function POST(req: NextRequest) {
  if (!WEBHOOK_SECRET_KEY) {
    throw 'Server misconfigured. Did you forget to add a ".env.local" file?';
  }

  // Validate the Stripe webhook signature.
  const body = await req.text();
  const signature = headers().get("stripe-signature");
  if (!signature) {
    throw "Stripe webhook signature not provided. This request may not be valid.";
  }

  const event = stripe.webhooks.constructEvent(
    body,
    signature,
    WEBHOOK_SECRET_KEY
  );
  switch (event.type) {
    case "charge.succeeded":
      // Handle the webhook
      await handleChargeSucceeded(event.data.object);
      break;
    default:
    // Ignore. Unexpected Stripe event.
  }

  return NextResponse.json({ message: "OK" });
}

const handleChargeSucceeded = async (charge: Stripe.Charge) => {
 
  if (
    !ENGINE_URL ||
    !ENGINE_ACCESS_TOKEN ||
    !NEXT_PUBLIC_NFT_CONTRACT_ADDRESS ||
    !BACKEND_WALLET_ADDRESS
  ) {
    throw 'Server misconfigured. Did you forget to add a ".env.local" file?';
  }

  const { buyerWalletAddress } = charge.metadata;
  
  if (!buyerWalletAddress) {
    throw 'Webhook metadata is missing "buyerWalletAddress".';
  }

  // Mint an NFT to the buyer with Engine.
  const engine = new Engine({
    url: ENGINE_URL,
    accessToken: ENGINE_ACCESS_TOKEN,
  }); 
  
  await engine.marketplaceDirectListings.buyFromListing(
    "mumbai",
    NEXT_PUBLIC_NFT_CONTRACT_ADDRESS,
    BACKEND_WALLET_ADDRESS,
    {
      listingId: "18",
      quantity: "1",
      buyer: buyerWalletAddress,
    }
  );
};
