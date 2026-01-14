import styles from "../../styles/common/radioButton.module.css";

interface RadioButtonProps {
  label: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  className?: string;
}

const RadioButton = ({
  label,
  value,
  checked,
  onChange,
  className,
}: RadioButtonProps) => {
  return (
    <label className={`${styles.radioLabel} ${className || ""}`}>
      <input
        type="radio"
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className={styles.radioInput}
      />
      <span className={styles.radioText}>{label}</span>
    </label>
  );
};

export default RadioButton;
