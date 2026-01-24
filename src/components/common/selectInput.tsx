import { IoChevronDown } from "react-icons/io5";
import styles from "../../styles/common/selectInput.module.css";

export interface SelectOption {
    value: string;
    label: string;
}

interface SelectInputProps {
    label: string;
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    className?: string;
    options?: SelectOption[];
}

const SelectInput = ({
    label,
    placeholder,
    value,
    onChange,
    className,
    options = [],
}: SelectInputProps) => {
    return (
        <div className={`${styles.selectContainer} ${className || ""}`}>
            <label className={styles.selectLabel}>{label}</label>
            <div className={styles.selectWrapper}>
                <select
                    className={styles.selectInput}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                >
                    <option value="" disabled>
                        {placeholder || "Select..."}
                    </option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <IoChevronDown className={styles.selectIcon} />
            </div>
        </div>
    );
};

export default SelectInput;
