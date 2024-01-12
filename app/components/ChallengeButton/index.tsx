import styles from "./ChallengeButton.module.css";

interface Props {
  title: string;
  img: string;
  onClick?: () => void;
}

const handleClick = () => {
  return console.log("동작확인용");
};

const ChallengeButton = ({ title, img, onClick = handleClick }: Props) => {
  return (
    <div className={styles.container}>
      <img src={img} alt="background Img" className={styles.img} />
      <button className={styles.text} onClick={onClick}>
        <span>{title}</span>
        <span>{title}</span>
        <span>{title}</span>
      </button>
    </div>
  );
};

export default ChallengeButton;
