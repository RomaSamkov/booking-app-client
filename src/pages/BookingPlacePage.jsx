import { useParams } from "react-router-dom";
import AccountNav from "../components/AccountNav";
import { useEffect, useState } from "react";
import axios from "axios";
import AddressLink from "../components/AddressLink";
import PlaceGallery from "../components/PlaceGallery";
import BookingsInfo from "../components/BookingsInfo";

export default function BookingPlacePage() {
  const { id } = useParams();
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    if (id) {
      axios.get("bookings").then((response) => {
        const foundBooking = response.data.find(({ _id }) => _id === id);
        if (foundBooking) {
          setBooking(foundBooking);
        }
      });
    }
  }, [id]);

  if (!booking || booking.length === 0) {
    return "";
  }

  return (
    <div>
      <AccountNav />
      <h1 className="text-3xl">{booking.place.title}</h1>
      <AddressLink place={booking.place} />
      <div className="bg-gray-800 mb-4 p-4 rounded-2xl flex items-center justify-between">
        <div>
          <h2 className="text-white text-2xl">Your booking information:</h2>
          <div className="text-white">
            <BookingsInfo booking={booking} />
          </div>
        </div>
        <div className="bg-primary text-white p-8 rounded-2xl">
          <div>Total Price:</div>
          <div className="text-3xl">${booking.price}</div>
        </div>
      </div>
      <PlaceGallery place={booking.place} />
    </div>
  );
}
