import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/Header";
import Message from "~/components/Header/Message.svg";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Header
        title="로그인"
        subtitle="서비스를 이용하기위해 로그인해요"
        logo={Message}
      />
    </div>
  );
}
