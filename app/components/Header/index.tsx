import styles from "./Header.module.css";

interface Props {
  title: string;
  subtitle: string;
  logo: string;
}

const Header = ({ title, subtitle, logo }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        {title} <img src={logo} alt="logo" className={styles.img} />
      </div>

      <div className={styles.subtitle}>{subtitle}</div>
    </div>
  );
};

export default Header;
