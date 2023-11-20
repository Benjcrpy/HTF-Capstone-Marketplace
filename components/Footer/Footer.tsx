import React from "react";
import { useState } from 'react'
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
 
} from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";

// INTERNAL IMPORTS
import Style from "./Footer.module.css";



const Footer = () => {
  const [showTMC, setShowTMC] = useState(false);
  const [isTMCVisible, setIsTMCVisible] = useState(false);
  const handleTMCClick = () => {
    setIsTMCVisible(!isTMCVisible);
    setShowTMC(!showTMC); // Toggle the visibility of the TMC component
  };
  return (
    <div className={Style.footer}>
      <div className={Style.footer_box}>
        <div className={Style.footer_box_social}>
         
          <p className="FooterP">
            The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs).
            Buy, sell, and discover exclusive digital items.
          </p>

          {/* Social Section */}
          <div className={Style.footer_social}>
            <a href="https://www.facebook.com/profile.php?id=61552102599704&mibextid=ZbWKwL">
              <TiSocialFacebook />
            </a>
            <a href="https://twitter.com/HappytreeF19101">
              <TiSocialTwitter />
            </a>
            <a href="https://www.youtube.com/channel/UCtPAoNtYhcEpuZ5WipjPPGQ">
              <TiSocialYoutube />
            </a>
            <a href="https://www.instagram.com/sarigamioyama/">
              <TiSocialInstagram />
            </a>
          </div>
        </div>

        {/* Menu Section */}
        <div className={Style.footer_box_discover}>
          <h3>Discover</h3>
          <a href="https://thirdweb.com/mumbai/0xB0Debc1FB8c9480c21d8A9f8498cCA08A08b7539/direct-listings">  <p className="FooterP">Direct Listing</p> </a>
          <a href="https://marketplace-benjcrpy.vercel.app/sell">  <p className="FooterP">Sell</p> </a>
          <a href="https://marketplace-benjcrpy.vercel.app/buy">  <p className="FooterP">Buy</p> </a> 
          <a href="https://thirdweb.com/mumbai/0xB0Debc1FB8c9480c21d8A9f8498cCA08A08b7539/english-auctions">  <p className="FooterP">Auction Listing</p> </a>
        </div>

        <div className={Style.footer_box_helpcenter}>
          <h3>Help Center</h3>
          <a href="#" onClick={handleTMCClick}>
          <p className="FooterP">Terms and Condition</p>
        </a>
        
          <a href="https://mumbai.polygonscan.com/?fbclid=IwAR1Oav1DguwQUIvDKynDEb8qaSNPUajaw7Bjkylvj9DH48FwtfeYaZmTr5U"> <p className="FooterP">Blockchain</p> </a>
            
        </div>

        {/* Subscribe Section */}
        <div className={Style.subscribe}>
          <h3>Subscribe</h3>
            
          <div className={Style.subscribe_box}>
            <input type="email" placeholder="Enter your email *" />
            <RiSendPlaneFill className={Style.subscribe_box_send} />
          </div>

          <div className={Style.subscribe_box_info}>
            <p className="FooterP"> 
                @{new Date().getFullYear()} HTF. All right reseved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;