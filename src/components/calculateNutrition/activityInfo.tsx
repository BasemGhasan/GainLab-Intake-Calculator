'use client';
import { useState } from "react";
import { Button, SelectInput } from "../common";
import sharedStyles from "../../styles/calculateNutrition/shared.module.css";
import styles from "../../styles/calculateNutrition/activityInfo.module.css";
import buttonStyles from "../../styles/common/button.module.css";

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

            <div className={sharedStyles.inputGrid}>
                <div className={sharedStyles.fullWidth}>
                    <SelectInput
                        label="Activity Level"
                        placeholder="Select your Activity Level"
                        value={activityLevel}
                        onChange={setActivityLevel}
                    />
                </div>
                <SelectInput
                    label="Exercise Hours (per Week)"
                    placeholder="Select your Exercise Hours (per Week)"
                    value={exerciseHours}
                    onChange={setExerciseHours}
                />
                <SelectInput
                    label="Exercise Type"
                    placeholder="Select your Exercise Type"
                    value={exerciseType}
                    onChange={setExerciseType}
                />
                <div className={sharedStyles.fullWidth}>
                    <SelectInput
                        label="Goal"
                        placeholder="Select your Goal"
                        value={goal}
                        onChange={setGoal}
                    />
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