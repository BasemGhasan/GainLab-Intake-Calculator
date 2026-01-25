import HeroTextContent from "./heroTextContent";
import HeroVisual from "./heroVisual";
import styles from "../../styles/hero/hero.module.css";

const Hero = () => {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className={`container-fluid ${styles.heroContainer}`}>
        <div className={`row ${styles.heroRow}`}>
          {/* Left Column - Text Content */}
          <div className={`col-md-6 ${styles.textColumn}`}>
            <HeroTextContent />
          </div>
          {/* Right Column - Visual Assets */}
          <div className={`col-md-6 ${styles.visualColumn}`}>
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
