'use client';
import { useState } from "react";
import { Button, SelectInput } from "../common";
import type { SelectOption } from "../common/selectInput";
import sharedStyles from "../../styles/calculateNutrition/shared.module.css";
import styles from "../../styles/calculateNutrition/activityInfo.module.css";
import buttonStyles from "../../styles/common/button.module.css";

const activityLevelOptions: SelectOption[] = [
    { value: "sedentary", label: "Sedentary (Little to no exercise)" },
    { value: "light", label: "Light Exercise (1–3 days/week)" },
    { value: "moderate", label: "Moderate Exercise (3–5 days/week)" },
    { value: "intense", label: "Intense Exercise (6–7 days/week)" },
    { value: "athlete", label: "Athlete (2x training/day)" },
];

const exerciseHoursOptions: SelectOption[] = [
    { value: "0-1", label: "0–1 hours" },
    { value: "1-3", label: "1–3 hours" },
    { value: "3-5", label: "3–5 hours" },
    { value: "5-7", label: "5–7 hours" },
    { value: "7+", label: "7+ hours" },
];

const exerciseTypeOptions: SelectOption[] = [
    { value: "cardio", label: "Cardio" },
    { value: "strength", label: "Strength Training" },
    { value: "mixed", label: "Mixed" },
];

const goalOptions: SelectOption[] = [
    { value: "weight_loss", label: "Weight Loss" },
    { value: "maintenance", label: "Maintenance" },
    { value: "muscle_gain", label: "Muscle Gain" },
];

interface ActivityInfoProps {
    setPage: (page: number) => void;
}

const ActivityInfo = ({ setPage }: ActivityInfoProps) => {
    const [activityLevel, setActivityLevel] = useState("");
    const [exerciseHours, setExerciseHours] = useState("");
    const [exerciseType, setExerciseType] = useState("");
    const [goal, setGoal] = useState("");

    const handleBack = () => {
        setPage(1);
    };

    const handleCalculate = () => {
        console.log("Calculate");
    };

    return (
        <div className={sharedStyles.card}>
            <h3 className={sharedStyles.cardTitle}>Activity & Goal</h3>

            <div className={styles.contentWrapper}>
                <div className={sharedStyles.inputGrid}>
                    <div className={sharedStyles.fullWidth}>
                        <SelectInput
                            label="Activity Level"
                            placeholder="Select activity level"
                            value={activityLevel}
                            onChange={setActivityLevel}
                            options={activityLevelOptions}
                        />
                    </div>
                    <SelectInput
                        label="Exercise Hours (per Week)"
                        placeholder="Select exercise hours"
                        value={exerciseHours}
                        onChange={setExerciseHours}
                        options={exerciseHoursOptions}
                    />
                    <SelectInput
                        label="Exercise Type"
                        placeholder="Select exercise type"
                        value={exerciseType}
                        onChange={setExerciseType}
                        options={exerciseTypeOptions}
                    />
                    <div className={sharedStyles.fullWidth}>
                        <SelectInput
                            label="Goal"
                            placeholder="Select your nutrition goal"
                            value={goal}
                            onChange={setGoal}
                            options={goalOptions}
                        />
                    </div>
                </div>
            </div>

            <div className={styles.actionButtons}>
                <Button
                    label="Back"
                    onClick={handleBack}
                    className={`${buttonStyles.primaryBtn} ${styles.backButton}`}
                />
                <Button
                    label="Calculate"
                    onClick={handleCalculate}
                    className={styles.calculateButton}
                />
            </div>
        </div>
    );
};

export default ActivityInfo;