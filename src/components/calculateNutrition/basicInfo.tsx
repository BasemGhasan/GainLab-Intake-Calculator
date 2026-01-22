"use client";
import { useState } from "react";
import { Button, RadioButton, SelectInput } from "../common";
import sharedStyles from "../../styles/calculateNutrition/shared.module.css";
import styles from "../../styles/calculateNutrition/basicInfo.module.css";

interface BasicInfoProps {
    setPage: (page: number) => void;
}

const BasicInfo = ({ setPage }: BasicInfoProps) => {
    const [measurementType, setMeasurementType] = useState("metric");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bodyFat, setBodyFat] = useState("");

    const handleNext = () => {
        setPage(2);
    };

    return (
        <div className={sharedStyles.card}>
            <h3 className={sharedStyles.cardTitle}>Basic Information</h3>

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

            <div className={sharedStyles.inputGrid}>
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
                <div className={sharedStyles.fullWidth}>
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
