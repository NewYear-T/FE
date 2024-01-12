import styles from "./ChallengeButton.module.css";

interface Props {
  title: string;
  img: string;
}

const handleClick = () => {
  return console.log("동작확인용");
};

const ChallengeButton = ({ title, img }: Props) => {
  return (
    <div className={styles.container}>
      <img src={img} alt="background Img" className={styles.img} />
      <button className={styles.text} onClick={handleClick}>
        {title}
      </button>
    </div>
  );
};

export default ChallengeButton;
