import styles from "../../styles/common/numberInput.module.css";

interface NumberInputProps {
    label: string;
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    className?: string;
    min?: number;
    max?: number;
    unit?: string;
}

const NumberInput = ({
    label,
    placeholder,
    value,
    onChange,
    className,
    min,
    max,
    unit,
}: NumberInputProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        if (newValue === "" || /^\d*\.?\d*$/.test(newValue)) {
            onChange(newValue);
        }
    };

    return (
        <div className={`${styles.inputContainer} ${className || ""}`}>
            <label className={styles.inputLabel}>{label}</label>
            <div className={styles.inputWrapper}>
                <input
                    type="text"
                    inputMode="decimal"
                    className={styles.numberInput}
                    value={value}
                    onChange={handleChange}
                    placeholder={placeholder}
                    min={min}
                    max={max}
                />
                {unit && <span className={styles.unit}>{unit}</span>}
            </div>
        </div>
    );
};

export default NumberInput;
