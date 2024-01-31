import { useContext } from "react";
import { UserContext } from "../components/UserContext";
import { Link, Navigate, useParams } from "react-router-dom";

export default function AccountPage() {
  const { ready, user } = useContext(UserContext);
  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = "profile";
  }

  if (!ready) {
    return "Loading...";
  }

  if (ready && !user) {
    return <Navigate to={"/login"} />;
  }

  function linkClasses(type = null) {
    let classes = "py-2 px-6";
    if (type === subpage) {
      classes += " bg-primary text-white rounded-full";
    }
    return classes;
  }

  return (
    <div>
      <nav className="flex justify-center w-full mt-8 mb-8 gap-2">
        <Link className={linkClasses("profile")} to={"/account"}>
          My profile
        </Link>
        <Link className={linkClasses("bookings")} to={"/account/bookings"}>
          My bookings
        </Link>
        <Link className={linkClasses("places")} to={"/account/places"}>
          My accommodations
        </Link>
      </nav>
      {subpage === "profile" && (
        <div className="text-center">
          Logged in as {user.name} {user.email} <br />
          <button className="primary max-w-sm mt-2">Logout</button>
        </div>
      )}
    </div>
  );
}
