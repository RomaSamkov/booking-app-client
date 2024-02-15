import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Perks from "./Perks";
import PhotosUploader from "../components/PhotosUploader";
import axios from "axios";

export default function PlacesPage() {
  const { action } = useParams();
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);

  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);
  // const [price, setPrice] = useState(100);
  const [redirect, setRedirect] = useState(false);

  async function addNewPlace(e) {
    e.preventDefault();
    await axios.post("/places", {
      title,
      address,
      addedPhotos,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
    });
    setRedirect(true);
  }

  if (redirect) {
    return <Navigate to={"/account/places"} />;
  }

  return (
    <div>
      {action !== "new" && (
        <div className="text-center">
          <Link
            className="inline-flex gap-1 bg-primary text-white rounded-full py-2 px-6"
            to={"/account/places/new"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                clipRule="evenodd"
              />
            </svg>
            Add new place
          </Link>
        </div>
      )}
      {action === "new" && (
        <form onSubmit={addNewPlace}>
          <h2 className="text-2xl mt-4">Title</h2>
          <p className="text-sm text-gray-500">Title for your appartment</p>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="title"
          />
          <h2 className="text-2xl mt-4">Address</h2>
          <p className="text-sm text-gray-500">Write your address</p>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="address"
          />
          <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />
          <h2 className="text-2xl mt-4">Description</h2>
          <p className="text-sm text-gray-500">Write a description</p>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <h2 className="text-2xl mt-4">Perks</h2>
          <p className="text-sm text-gray-500">Write all perks</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mt-2">
            <Perks selected={perks} onChange={setPerks} />
          </div>
          <h2 className="text-2xl mt-4">Extra Info</h2>
          <p className="text-sm text-gray-500">House rules and etc.</p>
          <textarea
            value={extraInfo}
            onChange={(e) => setExtraInfo(e.target.value)}
          />
          <h2 className="text-2xl mt-4">Check in and out times</h2>
          <p className="text-sm text-gray-500">
            Write check in and out times and max guests
          </p>
          <div className="grid sm:grid-cols-3 gap-2">
            <div>
              <h3 className="mt-2 -mb-1">Check in time</h3>
              <input
                type="text"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                placeholder="check in"
              />
            </div>
            <div>
              <h3 className="mt-2 -mb-1">Check out time</h3>
              <input
                type="text"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                placeholder="check out"
              />
            </div>
            <div>
              <h3 className="mt-2 -mb-1">Max guests</h3>
              <input
                type="text"
                value={maxGuests}
                onChange={(e) => setMaxGuests(e.target.value)}
                placeholder="max guests"
              />
            </div>
          </div>

          <button className="primary my-4">Save</button>
        </form>
      )}
    </div>
  );
}
