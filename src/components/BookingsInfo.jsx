import { differenceInCalendarDays, format } from "date-fns";

export default function BookingsInfo({ booking }) {
  return (
    <div className="py-3 pr-4 grow">
      <h2 className="text-xl">{booking.place.title}</h2>
      <div className="border-t border-gray-600 mt-2 py-2">
        chek-in: {format(new Date(booking.checkIn), "yyyy-MM-dd")} check-out:{" "}
        {format(new Date(booking.checkOut), "yyyy-MM-dd")}
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
  );
}
