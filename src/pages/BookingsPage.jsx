import { useEffect, useState } from "react";
import AccountNav from "../components/AccountNav";
import axios from "axios";
import PlaceImg from "../components/PlaceImg";
import { Link } from "react-router-dom";
import BookingsInfo from "../components/BookingsInfo";

export default function BookingsPage() {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    axios.get("/bookings").then((response) => {
      setBookings(response.data);
    });
  }, []);

  return (
    <div>
      <AccountNav />
      <div>
        {bookings?.length > 0 &&
          bookings.map((booking) => (
            <Link
              to={`/account/bookings/${booking._id}`}
              className="flex gap-4 bg-gray-300 rounded-2xl overflow-hidden mb-6"
              key={booking._id}
            >
              <div className="w-72">
                <PlaceImg place={booking.place} className="object-cover" />
              </div>
              <BookingsInfo booking={booking} />
            </Link>
          ))}
      </div>
    </div>
  );
}
