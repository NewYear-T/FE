import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { ActionFunctionArgs, json, redirect } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import Header from "~/components/Header";

const KRReigions = [
  "서울",
  "인천",
  "부산",
  "광주",
  "대구",
  "울산",
  "강원",
  "경기",
  "경상남도",
  "경상북도",
  "전라남도",
  "전라북도",
  "충청남도",
  "충청북도",
  "제주도",
];

const genders = ["남자", "여자"];

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const username = formData.get("email");
  const password = formData.get("password");
  const password2 = formData.get("password2");
  const gender = formData.get("gender");
  const local = formData.get("region");
  const age = parseInt(formData.get("age") as string, 10);

  const errors: { password?: string } = {};

  if (password !== password2) {
    errors.password = "암호와 암호확인은 같아야 합니다";
  }

  const response = await fetch(process.env.API_URL + "/api/sign-up", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
      gender,
      local,
      age,
    }),
  });
  console.log(response);
  if (!response.ok) {
    return json({ errors }, { status: 400 });
  }
  return redirect("/login");
}

const SignIn = () => {
  const actionData = useActionData<typeof action>();
  return (
    <>
      <Header
        title="회원 가입"
        subtitle="다짐 메이트를 이용하기 위해 인적사항을 입력해요"
        logo=""
      />
      {actionData?.errors}
      <form action="/signIn" method="post">
        <Input label="이메일" className="max-w-xs" name="email" type="email" />
        <Input
          label="암호"
          className="max-w-xs"
          name="password"
          type="password"
        />
        <Input
          label="암호확인"
          className="max-w-xs"
          name="password2"
          type="password"
        />
        <Input label="나이" className="max-w-xs" name="age" />
        <Input label="닉네임" className="max-w-xs" name="nickname" />
        <Select label="성별" className="max-w-xs" name="gender">
          {genders.map((gender) => (
            <SelectItem key={gender} value={gender}>
              {gender}
            </SelectItem>
          ))}
        </Select>
        <Select label="거주지" className="max-w-xs" name="region">
          {KRReigions.map((reigion) => (
            <SelectItem key={reigion} value={reigion}>
              {reigion}
            </SelectItem>
          ))}
        </Select>
        <Button type="submit" color="primary">
          회원 가입
        </Button>
      </form>
    </>
  );
};

export default SignIn;
