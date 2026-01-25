import { Button } from "../common";
import styles from "../../styles/homeSection/heroTextContent.module.css";

const HeroTextContent = () => {
    return (
        <div>
            <h1 className={styles.heading}>
                <span className={styles.headingLine1}>Track Your Nutrition,</span>
                <br />
                <span className={styles.headingLine2}>Reach Your </span>
                <span className={styles.headingEmphasis}>Goals!</span>
            </h1>

            <div className={styles.description}>
                <p className={styles.descriptionText}>
                    Calculate your daily calorie and nutrient intake with precision.
                </p>
                <p className={styles.descriptionText}>
                    Get personalized recommendations based on your body metrics and
                    activity level.
                </p>
            </div>

            <Button
                label="Start Now"
                className={`btn rounded-3 ${styles.ctaButton}`}
            />
        </div>
    );
};

export default HeroTextContent;
