import { Link } from "react-router-dom";

export default function PlacesPage() {
  return (
    <div>
      <div className="text-center">
        <Link
          className="bg-primary text-white rounded-full py-2 px-6"
          to={"/account/places/new"}
        >
          Add new place
        </Link>
      </div>
      PlacesPage
    </div>
  );
}
