import InfoCard from "./infoCard";
import { IoPersonSharp } from "react-icons/io5";
import { FaChartPie } from "react-icons/fa6";
import { GoGoal } from "react-icons/go";
import styles from "../../styles/howItWorks/howItWorks.module.css";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className={styles.howItWorksSection}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h2 className={styles.sectionTitle}>How GainLab Works</h2>
            <p className={styles.sectionSubtitle}>
              Simple steps to get your personalized nutrition plan
            </p>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-md-4">
            <InfoCard
              icon={IoPersonSharp}
              title="Enter Your Details"
              description="Provide basic information about your body metrics and activity level"
            />
          </div>
          <div className="col-md-4">
            <InfoCard
              icon={FaChartPie}
              title="Get Calculations"
              description="Receive precise calorie and macronutrient breakdown tailored for you"
            />
          </div>
          <div className="col-md-4">
            <InfoCard
              icon={GoGoal}
              title="Reach Your Goals"
              description="Follow your personalized plan and track your progress"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
