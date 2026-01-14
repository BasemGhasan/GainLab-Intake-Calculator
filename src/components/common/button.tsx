import styles from "../../styles/common/button.module.css";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const Button = ({ label, onClick, disabled, className }: ButtonProps) => {
  return (
    <button
      className={`${styles.btn} ${className || ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
