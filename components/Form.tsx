import {
    PaymentElement,
    useElements,
    useStripe,
  } from "@stripe/react-stripe-js";
  import styles from "../styles/Home.module.css";
  import React, { useEffect, useState } from "react";
  import { NFT_COLLECTION_ADDRESS } from "../const/addresses";
  
  
  
  
  export const Form = () => {
    const elements = useElements();
    const stripe = useStripe();
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [isCompleted, setIsCompleted] = useState(false);
  
  
    const onClick = async()=>{
      if(!stripe || !elements){
        return;
      }
  
      setIsLoading(true);
  
      try{
        const {paymentIntent, error} = await stripe.confirmPayment({
          elements,
          confirmParams: {
            return_url: "http://localhost:3001",
          },
          redirect:"if_required"
        });
        if(error) {
          throw error.message;
        }
        if(paymentIntent.status === "succeeded") {
          setMessage("Payment complete! You will recieve your NFT shortly.")
          setIsCompleted(true);
        } else {
          alert("Payment Failed.")
        }
      } catch (error) {
        alert("there is an error.");
      }
  
    }
  return (
      <>
        {!isCompleted ? (
          <> 
          <PaymentElement/>
          <button
          style={{
            padding: "1rem",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "white",
            color: "#333",
            cursor: "pointer",
            width: "100%"
  
          }}
          
          disabled={isLoading || isCompleted || !stripe || !elements}
          onClick={onClick}
          >
            {isCompleted
              ? "Payment Recieved"
              :isLoading
              ? "Please wait..."
              : "Pay Now"
            }
  
          </button>
          
          
          </>
        ) : (
          <p>{message}</p>
        )}
      
      </>
  )};