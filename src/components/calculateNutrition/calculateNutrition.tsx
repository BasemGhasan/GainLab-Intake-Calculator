"use client";
import { useState } from "react";
import BasicInfo from "./basicInfo";
import styles from "../../styles/calculateNutrition/calculateNutrition.module.css";

const CalculateNutrition = () => {
  const [page, setPage] = useState(1);
  return (
    <section className={styles.calculateSection}>
      <h2 className={styles.sectionTitle}>Calculate Your Nutrition Needs</h2>
      <div className={styles.indicatorsContainer}>
        <div
          className={`${styles.pageIndicator} ${
            page === 1 ? styles.activeIndicator : styles.inactiveIndicator
          }`}
        ></div>
        <div
          className={`${styles.pageIndicator} ${
            page === 2 ? styles.activeIndicator : styles.inactiveIndicator
          }`}
        ></div>
        <p className={styles.pageCounter}>Step {page} of 2</p>
      </div>
      <BasicInfo />
    </section>
  );
};

export default CalculateNutrition;
