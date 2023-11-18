
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer/Footer"
import HeroSection from "../components/TopFold/HeroSection"
import Service from "../components/Service/Service";
import Brand from "../components/Brand/Brand";
import {Navbar}  from "../components/Navbar/Navbar";






const home: NextPage = () => {
  return (
    
    

    <div className={styles.container}>
     <Navbar/>
     
      <HeroSection/>
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.heroBackground}>
            <div className={styles.heroBackgroundInner}>
              <Image
                src="/hero-gradient.png"
                width={1390}
                height={1390}
                alt="Background gradient from red to blue"
                quality={100}
                className={styles.gradient}
              />
            </div>
          </div>
         
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}>
                  HAPPY TREE FRIENDS
                </span>
                <br />
                MARKETPLACE
              </h1>
              <p className={styles.heroSubtitle}>
                <Link
                  className={styles.link}
                  href="https://www.facebook.com/profile.php?id=61552102599704"
                  target="_blank"
                >
                  HTF
                </Link>{" "}
                The Happy Tree Friends NFT Marketplace, 
                co-founded by Agapay Anthony, 
                Lasim Kristella Mae, 
                Lozada Enrico, Marquez George Anthony, 
                Sembrano Kirby, and 
                Serrano Denzel Joy, 
                is a vibrant and imaginative digital hub celebrating the iconic animated series, Happy Tree Friends.  
                This marketplace is designed to offer fans and collectors a unique opportunity.
              </p>

              <div className={styles.heroCtaContainer}>
                <Link className={styles.heroCta} href="/buy">
                  SHOP
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Brand/>
      <Service/>
      <Footer/>
      
    </div>
    
  );
};

export default home;