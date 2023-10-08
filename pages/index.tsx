
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer/Footer"
import HeroSection from "../components/TopFold/HeroSection"
import Service from "../components/Service/Service";
import Brand from "../components/Brand/Brand";

/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */
const Home: NextPage = () => {
  return (
    
    
    <div className={styles.container}>
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
                  HAPPY THREE FRIENDS
                </span>
                <br />
                MARKETPLACE
              </h1>
              <p className={styles.heroSubtitle}>
                <Link
                  className={styles.link}
                  href="https://thirdweb.com"
                  target="_blank"
                >
                  thirdweb
                </Link>{" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, earum dolorem vitae nemo laborum nihil eligendi omnis pariatur facere saepe fuga voluptatibus veritatis itaque qui debitis perferendis reprehenderit dolores placeat?
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

export default Home;