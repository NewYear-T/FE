import styles from "./Header.module.css";
import Message from "./Message.svg";

interface Props {
  title: string;
  subtitle: string;
}

const Header = ({ title, subtitle }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        {title} <img src={Message} alt="logo" className={styles.img} />
      </div>

      <div className={styles.subtitle}>{subtitle}</div>
    </div>
  );
};

export default Header;
