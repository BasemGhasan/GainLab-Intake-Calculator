"use client";
import { useState } from "react";
import { Button, RadioButton, SelectInput, NumberInput } from "../common";
import type { SelectOption } from "../common/selectInput";
import sharedStyles from "../../styles/calculateNutrition/shared.module.css";
import styles from "../../styles/calculateNutrition/basicInfo.module.css";

const genderOptions: SelectOption[] = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
];

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
                <NumberInput
                    label="Age"
                    placeholder="Enter age"
                    value={age}
                    onChange={setAge}
                    min={13}
                    max={99}
                />
                <SelectInput
                    label="Gender"
                    placeholder="Select gender"
                    value={gender}
                    onChange={setGender}
                    options={genderOptions}
                />
                <NumberInput
                    label="Weight"
                    placeholder="Enter weight"
                    value={weight}
                    onChange={setWeight}
                    min={20}
                    max={300}
                    unit={measurementType === "metric" ? "kg" : "lbs"}
                />
                <NumberInput
                    label="Height"
                    placeholder="Enter height"
                    value={height}
                    onChange={setHeight}
                    min={100}
                    max={250}
                    unit={measurementType === "metric" ? "cm" : "in"}
                />
                <div className={sharedStyles.fullWidth}>
                    <NumberInput
                        label="Body Fat % (Optional)"
                        placeholder="Enter body fat %"
                        value={bodyFat}
                        onChange={setBodyFat}
                        min={3}
                        max={50}
                        unit="%"
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
