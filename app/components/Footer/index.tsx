import styles from "./footer.module.css";
import Item from "./subcomponents/Item";
import addSVG from "./add.svg";
import EqualizerSVG from "./Equalizer.svg";
import PersonSVG from "./Person.svg";
import CompleteSVG from "./Complete.svg";
import DocumentSVG from "./Document.svg";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles["inner-container"]}>
        <Item title="챌린지 투표" to={"#"} icon={CompleteSVG} />
        <Item title="커뮤니티" to={"#"} icon={DocumentSVG} />
        <Item title="챌린지 참가" to={"#"} icon={addSVG} />
        <Item title="친구 관리" to={"#"} icon={PersonSVG} />
        <Item title="개인 설정" to={"#"} icon={EqualizerSVG} />
      </div>
    </footer>
  );
};

export default Footer;
