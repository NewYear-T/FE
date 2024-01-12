import { redirect } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export async function loader() {
  const response = await fetch(`${process.env.API_URL}/check` as string, {
    method: "GET",
    credentials: "include",
  });

  if (response.ok) {
    return null;
  } else {
    return redirect("/login");
  }
}

const Protected = () => {
  return <Outlet />;
};

export default Protected;
