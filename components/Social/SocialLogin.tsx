import { MediaRenderer, useEmbeddedWallet } from "@thirdweb-dev/react";

type SocialLoginProps = {
    strategy: any;
};

export const SocialLoginButton: React.FC<SocialLoginProps> = ({strategy}) => {
const {connect} = useEmbeddedWallet();

const signInWithSocial = async () => {
    await connect({strategy: strategy});
};
   const firstChar = strategy.charAt(0).toUpperCase();
   const rest = strategy.slice(1);
   const strategyName = firstChar + rest;
    return (
            <button
            style={{
            width: "100%",
            height: "42px",
            marginBottom: "1rem",
            display:"inline-flex",
            alignItems:"center",
            justifyContent: "center",
            backgroundColor:"#CCC",
            border: "1px solid #CCC",
            borderRadius: "8px",
            }}
            onClick={signInWithSocial}
            ><span style={{marginRight: "10px"}}><MediaRenderer src={`../imagess/${strategy}Icon.png`} height="24px" width="24px"/> </span> Sign in with {strategyName}

            </button>

    )
};