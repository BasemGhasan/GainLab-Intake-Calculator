import { IconType } from "react-icons";
import styles from "../../styles/aboutSection/infoCard.module.css";

interface InfoCardProps {
  icon: IconType;
  title: string;
  description: string;
}

const InfoCard = ({ icon: Icon, title, description }: InfoCardProps) => {
  return (
    <div className={`card h-100 ${styles.infoCard}`}>
      <div className="card-body text-center d-flex flex-column">
        <div className={styles.iconContainer}>
          <Icon className={styles.icon} />
        </div>
        <h5 className={`card-title ${styles.cardTitle}`}>{title}</h5>
        <p className={`card-text ${styles.cardDescription}`}>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
