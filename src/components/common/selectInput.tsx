import { IoChevronDown } from "react-icons/io5";
import styles from "../../styles/common/selectInput.module.css";

interface SelectInputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const SelectInput = ({
  label,
  placeholder,
  value,
  onChange,
  className,
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
        </select>
        <IoChevronDown className={styles.selectIcon} />
      </div>
    </div>
  );
};

export default SelectInput;
