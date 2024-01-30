import { useContext } from "react";
import { UserContext } from "../components/UserContext";
import { Navigate } from "react-router-dom";

export default function AccountPage() {
  const { ready, user } = useContext(UserContext);

  if (!ready) {
    return "Loading...";
  }

  if (ready && !user) {
    return <Navigate to={"/login"} />;
  }
  return <div>AccountPage for {user.name}</div>;
}
