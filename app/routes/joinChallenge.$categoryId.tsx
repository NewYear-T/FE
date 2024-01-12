import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import ChallengeElement from "~/components/ChallengeElement";
import Header from "~/components/Header";
import morningImg from "~/asset/morning.jpg";
import studyImg from "~/asset/study.jpg";
import workoutImg from "~/asset/workout.jpg";

function imgSelector(categoryName: string) {
  switch (categoryName) {
    case "운동":
      return workoutImg;
    case "미라클모닝":
      return morningImg;
    case "영어 공부":
      return studyImg;
    default:
      return "";
  }
}

export async function loader({ params }: LoaderFunctionArgs) {
  const categoryId = params.categoryId as string;
  const response = await fetch(
    process.env.API_URL + `/api/category/${categoryId}`,
    {
      method: "GET",
    }
  );
  if (response.ok) {
    const { datalist } = await response.json();
    return json({ datalist });
  }
  console.log(response.status);
  return null;
}

const JoinChallenge = () => {
  const { datalist } = useLoaderData<typeof loader>();
  console.log(datalist);
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4 flex-col">
      <Header
        title="챌린지 참가"
        subtitle="올해는 다르다! 새로운 도전을 해봐요!"
        logo=""
      />
      <div className="flex justify-center">
        {datalist.map((item) => (
          <ChallengeElement
            key={item.description}
            title={item.title}
            currentPeople={item.current_people}
            maxPeople={item.max_people}
            description={item.description}
            category={item.categoryName}
            challengeId={item.id}
            img={imgSelector(item.categoryName)}
          />
        ))}
      </div>
    </div>
  );
};

export default JoinChallenge;
