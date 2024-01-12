import { Link } from "@remix-run/react";
import styles from "./index.module.css";

interface Props {
  to: string;
  icon?: string;
  title: string;
}

const Item = ({ to, icon, title }: Props) => {
  return (
    <Link to={to} className={styles.container}>
      {icon ? <img src={icon} alt="" className={styles["btn-img"]} /> : null}
      {title}
    </Link>
  );
};

export default Item;
