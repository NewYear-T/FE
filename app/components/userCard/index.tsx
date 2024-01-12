import styles from "./userCard.module.css";
import cryptojs from "crypto-js";

interface Props {
  userId: string;
  deleteButton: string;
}

const UserCard = ({ userId, deleteButton }: Props) => {
  const hash = cryptojs.SHA256(userId);
  return (
    <div className={styles.container}>
      <div>
        <img src={`https://gravatar.com/avatar/${hash}`} alt="프로필 이미지" />
      </div>
      <div>{userId}</div>
      <div>{deleteButton}</div>
    </div>
  );
};

export default UserCard;
