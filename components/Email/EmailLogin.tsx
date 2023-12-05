import { useEmbeddedWallet } from "@thirdweb-dev/react";
import {useState} from "react";

export default function EmailLogin() {

const [state, setState] =useState<
    "init" | "sending_email" | "email_verification"
>("init");

const [email, setEmail] =useState("");
const [verification, setVerification] =useState("");

const {connect, sendVerificationEmail} = useEmbeddedWallet();

const handleEmailEntered = async () => {
   
   if(!email){
    alert("Please enter an email address.");
    return;
    
}
    setState("sending_email");
    await sendVerificationEmail({email});
    setState("email_verification");
};
const handleEmailVerification = async () => {
    if(!email || !verification){
        alert("Please enter an email address and verification code.");
        return;
    }
    await connect({
        strategy: "email_verification",
        email,
        verificationCode:verification, 
    })


};



    if(state === "sending_email") {
        return <div><p>Sending email...</p></div>
    }
    
    if(state === "email_verification"){
        return(
          <>
            <p> Enter the Verification Code sent to your email</p>
            <input
                type="text"
                placeholder="Verification Code"
                value={verification}
                onChange={(e) => setVerification(e.target.value)}
                style={{
                    width: "100%",
                    height: "42px",
                    marginBottom: "1rem",
                    border: "1px solid #CCC",
                    borderRadius: "8px",
                    padding: "0.5rem 1rem",
                }}       
            />
            <button
                style={{
                    width: "100%",
                    height: "42px",
                    marginBottom: "1rem",
                    display:"inline-flex",
                    alignItems:"center",
                    justifyContent: "center",
                    backgroundColor:"RoyalBlue",
                    color: "#FFF",
                    border: "1px solid RoyalBlue",
                    borderRadius: "8px",
                }}
                onClick={handleEmailVerification}

            >Verify</button>
            <a onClick={() => setState("init")}>
            <p style={{color: "royalblue", cursor: "pointer", textAlign: "center"}}>Go Back</p>

            </a>
          </>  
        )
    }

return(
    <>
    <p> Sign in with email or Social Login below.</p>
    <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
            width: "100%",
            height: "42px",
            marginBottom: "1rem",
            border: "1px solid #CCC",
            borderRadius: "8px",
            padding: "0.5rem 1rem",
        }}   
   />
    <button
        style={{
            width: "100%",
            height: "42px",
            marginBottom: "1rem",
            display:"inline-flex",
            alignItems:"center",
            justifyContent: "center",
            backgroundColor:"RoyalBlue",
            color: "#FFF",
            border: "1px solid RoyalBlue",
            borderRadius: "8px",
        }}
        onClick={handleEmailEntered}

    >Sign In</button>

    </>
)

}