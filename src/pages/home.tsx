import HeroTextContent from "../components/homeSection/heroTextContent";
import HeroVisual from "../components/homeSection/heroVisual";
import styles from "../styles/homeSection/home.module.css";

const Home = () => {
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

export default Home;
