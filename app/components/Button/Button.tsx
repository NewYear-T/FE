import styles from "./Button.module.css";

interface Props {
  title: string;
}

const handleClick = () => {
  console.log("작동확인");
};

const Button = ({ title }: Props) => {
  return (
    <div className={styles.title}>
      <button className={styles.button} onClick={handleClick}>
        {title}
      </button>
    </div>
  );
};

export default Button;
