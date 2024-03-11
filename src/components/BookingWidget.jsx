export default function BookingWidget({ place }) {
  return (
    <div className="bg-white shadow p-4 rounded-2xl">
      <div className="text-center text-2xl">Price: ${place.price}</div>
      <div className="border rounded-2xl mt-4">
        <div className="flex">
          <div className="py-3 px-4">
            <label>Check-in: </label>
            <input type="date" name="" id="" />
          </div>
          <div className="py-3 px-4 border-l">
            <label>Check-out: </label>
            <input type="date" name="" id="" />
          </div>
        </div>
        <div>
          <div className="py-3 px-4 border-t">
            <label>Number of guests: </label>
            <input type="number" name="" id="" defaultValue={1} />
          </div>
        </div>
      </div>
      <button className="primary mt-4">Book this place</button>
    </div>
  );
}
