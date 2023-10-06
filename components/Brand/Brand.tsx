import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import Style from "./Brand.module.css";
import images from "../../img";


const Brand = () => {
  const router = useRouter();

  const CrateNFT = () => {
    router.push("/uploadNFT");
  };

  const DiscoverNFT = () => {
    router.push("/collection");
  };

  return (
    <div className={Style.Brand}>
      <div className={Style.Brand_box}>
        <div className={Style.Brand_box_left}>
        <Image
              src="/htf.png"
              width={100}
              height={70}
              alt="NFT marketplace sample logo"
            />
          <h1>Earn free crypto with HTF</h1>
          <p>A creative agency that lead and inspire.</p>

          <div className={Style.Brand_box_left_btn}>
            
          </div>
        </div>
        <div className={Style.Brand_box_right}>
          <Image src={images.earn} className={Style.Brand_box_right_img} alt="brand logo" />
        </div>
      </div>
    </div>
  );
};

export default Brand;