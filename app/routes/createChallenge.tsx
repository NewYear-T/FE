import ChallengeButton from "~/components/ChallengeButton";
import morning from "~/asset/morning.jpg";
import study from "~/asset/study.jpg";
import workout from "~/asset/workout.jpg";
import {
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { useState, useRef } from "react";

const CreateChallenge = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryId, setCategroyId] = useState(0);
  const closeModal = () => setIsModalOpen(false);
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <div>
      <ChallengeButton
        title="미라클모닝"
        img={morning}
        onClick={() => {
          setCategroyId(1);
          setIsModalOpen(true);
        }}
      />
      <ChallengeButton
        title="영어 공부"
        img={study}
        onClick={() => {
          setCategroyId(2);
          setIsModalOpen(true);
        }}
      />
      <ChallengeButton
        title="운동"
        img={workout}
        onClick={() => {
          setCategroyId(3);
          setIsModalOpen(true);
        }}
      />
      <Modal isOpen={isModalOpen} onOpenChange={closeModal}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                챌린지 자세히 보기
              </ModalHeader>
              <ModalBody>
                <form ref={formRef}>
                  <div className="flex flex-col gap-5">
                    <Input type="text" label="제목" name="title" />
                    <Input type="text" label="설명" name="description" />
                    <Input type="text" label="최대 인원 수" name="max_people" />
                    <Input
                      type="datetime-local"
                      label="접수 마감 시간"
                      name="endAt"
                    />
                    <Input
                      type="datetime-local"
                      label="챌린지 시작 시간"
                      name="startTime"
                    />
                    <Input
                      type="datetime-local"
                      label="챌린지 종료 시간"
                      name="endTime"
                    />
                  </div>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  닫기
                </Button>
                <Button
                  color="primary"
                  onPress={async () => {
                    const formData = new FormData(
                      formRef.current as HTMLFormElement
                    );
                    console.log(formData);
                    const title = formData.get("title");
                    const description = formData.get("description");
                    const max_people = formData.get("max_people");
                    const endAt = new Date(
                      formData.get("endAt") as string
                    ).toISOString();
                    const startTime = new Date(
                      formData.get("startTime") as string
                    ).toISOString();
                    const endTime = new Date(
                      formData.get("endTime") as string
                    ).toISOString();
                    console.log(endTime);
                    const response = await fetch(
                      `http://192.168.8.158:8080/api/challenge`,
                      {
                        headers: {
                          "Content-Type": "application/json",
                        },
                        method: "POST",
                        body: JSON.stringify({
                          title,
                          description,
                          startTime,
                          endTime,
                          current_people: 0,
                          max_people,
                          endAt,
                          categoryId,
                        }),
                      }
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

export default CreateChallenge;
