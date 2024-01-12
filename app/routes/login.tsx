import { useState } from "react";
import Header from "~/components/Header";
import { Input, Button } from "@nextui-org/react";
import Logo from "~/asset/Logo.svg";
import { Link, useNavigate } from "@remix-run/react";
import { ActionFunctionArgs, redirect, json } from "@remix-run/node";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const loginId = formData.get("email");
  const password = formData.get("password");

  console.log(loginId, password);
  const response = await fetch(process.env.API_URL + "/api/sign-in", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      loginId,
      password,
    }),
  });
  console.log(response);
  if (!response.ok) {
    return json({}, { status: 400 });
  }
  return redirect("/login");
}

const Login = () => {
  const navigate = useNavigate();
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form action="/login" method="post">
      <Header title="" subtitle="" logo={Logo} />
      <div
        className="flex w-full flex-wrap md:flex-nowrap gap-4"
        style={{ width: "300px", marginLeft: "50px", marginTop: "120px" }}
      >
        <Input
          type="email"
          color="primary"
          label="Email"
          placeholder="이메일을 입력하세요"
          name="email"
          value={loginId}
          onChange={(e) => setLoginId(e.target.value)}
        />
      </div>
      <div style={{ width: "300px", marginLeft: "50px", marginTop: "10px" }}>
        <Input
          type="password"
          color="primary"
          label="Password"
          placeholder="비밀번호를 입력하세요"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div style={{ marginLeft: "50px", marginTop: "10px" }}>
        <Button
          color="primary"
          style={{ width: "300px" }}
          onClick={async () => {
            const response = await fetch(
              "http://192.168.8.158:8080" + "/api/sign-in",
              {
                method: "post",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  loginId,
                  password,
                }),
              }
            );
            if (response.ok) {
              navigate("/joinChallenge");
            }
          }}
        >
          로그인
        </Button>
      </div>
      <div
        style={{
          marginLeft: "0px",
          color: "#808080",
          textAlign: "center",
          fontSize: "15px",
        }}
      >
        <Link to="/signUp">회원가입</Link>
      </div>
    </form>
  );
};

export default Login;
