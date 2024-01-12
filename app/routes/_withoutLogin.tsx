import { redirect } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export async function loader() {
  const response = await fetch(`${process.env.API_URL}/check` as string, {
    method: "GET",
    credentials: "include",
  });

  if (response.ok) {
    return redirect("/joinChallenge");
  } else {
    return null;
  }
}

const UnProtected = () => {
  return <Outlet />;
};

export default UnProtected;
