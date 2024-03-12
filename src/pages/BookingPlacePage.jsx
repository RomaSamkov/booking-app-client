import { useParams } from "react-router-dom";
import AccountNav from "../components/AccountNav";

export default function BookingPlacePage() {
  const { id } = useParams();
  return (
    <div>
      <AccountNav />
      BookingPlacePage: {id}
    </div>
  );
}
