"use client";
import { useState } from "react";
import { Button, RadioButton, SelectInput } from "../common";
import styles from "../../styles/calculateNutrition/basicInfo.module.css";

const BasicInfo = () => {
  const [measurementType, setMeasurementType] = useState("metric");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bodyFat, setBodyFat] = useState("");

  const handleNext = () => {
    console.log("Next step");
  };

  return (
    <div className={styles.basicInfoCard}>
      <h3 className={styles.cardTitle}>Basic Information</h3>

      <div className={styles.radioGroup}>
        <RadioButton
          label="Metric"
          value="metric"
          checked={measurementType === "metric"}
          onChange={setMeasurementType}
        />
        <RadioButton
          label="Imperial"
          value="imperial"
          checked={measurementType === "imperial"}
          onChange={setMeasurementType}
        />
      </div>

      <div className={styles.inputGrid}>
        <SelectInput
          label="Age"
          placeholder="Select age"
          value={age}
          onChange={setAge}
        />
        <SelectInput
          label="Gender"
          placeholder="Select gender"
          value={gender}
          onChange={setGender}
        />
        <SelectInput
          label="Weight"
          placeholder={measurementType === "metric" ? "kg" : "lbs"}
          value={weight}
          onChange={setWeight}
        />
        <SelectInput
          label="Height"
          placeholder={measurementType === "metric" ? "cm" : "inches"}
          value={height}
          onChange={setHeight}
        />
        <div className={styles.fullWidth}>
          <SelectInput
            label="Body Fat % (Optional)"
            placeholder="Select body fat %"
            value={bodyFat}
            onChange={setBodyFat}
          />
        </div>
      </div>

      <div className={styles.actionButton}>
        <Button label="Next Step" onClick={handleNext} />
      </div>
    </div>
  );
};

export default BasicInfo;
