import ChallengeButton from '~/components/ChallengeButton';
import morning from '~/asset/morning.jpg';
import study from '~/asset/study.jpg';
import workout from '~/asset/workout.jpg';

const CreateChallenge = () => {
    return (
        <div>
            <ChallengeButton title="미라클모닝" img={morning}/>
            <ChallengeButton title="영어 공부" img={study} />
            <ChallengeButton title="운동" img={workout} />
        </div>
    );
};

export default CreateChallenge;