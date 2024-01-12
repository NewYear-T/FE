import styles from "./ChallengeElement.module.css";
import { useState, useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

interface Props {
  title: string;
  currentPeople: number;
  maxPeople: number;
  description: string;
  category: string;
  img: string;
  challengeId: number;
}

const ChallengeElement = ({
  title,
  description,
  category,
  currentPeople,
  maxPeople,
  img,
  challengeId,
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [response, setResponse] = useState<any>(null);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `http://192.168.8.158:8080/api/${challengeId}`
      );
      setResponse(await response.json());
    }
    getData();
  }, [challengeId]);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={styles.container}>
      <img src={img} alt="background Img" className={styles.img} />
      <button className={styles.text} onClick={() => setIsModalOpen(true)}>
        <span>
          {title} {currentPeople}/{maxPeople}
        </span>
        <span>{description}</span>
        <span>{category}</span>
      </button>
      <Modal isOpen={isModalOpen} onOpenChange={closeModal}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                챌린지 자세히 보기
              </ModalHeader>
              <ModalBody>
                <ul>
                  <li>제목 : {response.title}</li>
                  <li>설명 : {response.description}</li>
                  <li>모집마감 : {response.endAt}</li>
                  <li>챌린지 시작 : {response.startTime}</li>
                  <li>챌린지 종료 : {response.endTime}</li>
                </ul>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  닫기
                </Button>
                <Button
                  color="primary"
                  onPress={async () => {
                    const response = await fetch(
                      `http://192.168.8.158:8080/api/${challengeId}/apply`
                    );
                    console.log(response);
                  }}
                >
                  등록하기
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ChallengeElement;
