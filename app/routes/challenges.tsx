import ChallengeButton from "~/components/ChallengeButton";
import morning from "~/asset/morning.jpg";
import study from "~/asset/study.jpg";
import workout from "~/asset/workout.jpg";
import { useNavigate } from "@remix-run/react";

const CreateChallenge = () => {
  const navigate = useNavigate();
  return (
    <div>
      <ChallengeButton
        title="미라클모닝"
        img={morning}
        onClick={() => navigate("/joinChallenge/1")}
      />
      <ChallengeButton
        title="영어 공부"
        img={study}
        onClick={() => navigate("/joinChallenge/2")}
      />
      <ChallengeButton
        title="운동"
        img={workout}
        onClick={() => navigate("/joinChallenge/3")}
      />
    </div>
  );
};

export default CreateChallenge;
