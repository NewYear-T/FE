import styles from "./footer.module.css";
import Item from "./subcomponents/Item";
import addSVG from "./add.svg";
import PersonSVG from "./Person.svg";
import CompleteSVG from "./Complete.svg";
import DocumentSVG from "./Document.svg";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles["inner-container"]}>
        <Item title="챌린지 참가" to={"/challenges"} icon={CompleteSVG} />
        <Item title="커뮤니티" to={"/community"} icon={DocumentSVG} />
        <Item title="챌린지 만들기" to={"/createChallenge"} icon={addSVG} />
        <Item title="로그인" to={"/login"} icon={PersonSVG} />
      </div>
    </footer>
  );
};

export default Footer;
