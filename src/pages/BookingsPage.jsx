import { useEffect, useState } from "react";
import AccountNav from "../components/AccountNav";
import axios from "axios";
import PlaceImg from "../components/PlaceImg";
import { differenceInCalendarDays, format } from "date-fns";
import { Link } from "react-router-dom";

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
              <div className="py-3 pr-4 grow">
                <h2 className="text-xl">{booking.place.title}</h2>
                <div className="border-t border-gray-600 mt-2 py-2">
                  chek-in: {format(new Date(booking.checkIn), "yyyy-MM-dd")}{" "}
                  check-out: {format(new Date(booking.checkOut), "yyyy-MM-dd")}
                </div>
                <div>
                  Number of nights:{" "}
                  {differenceInCalendarDays(
                    new Date(booking.checkOut),
                    new Date(booking.checkIn)
                  )}{" "}
                  <br />
                  Price: ${booking.price}
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
