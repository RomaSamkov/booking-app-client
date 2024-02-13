import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Perks from "./Perks";
import axios from "axios";

export default function PlacesPage() {
  const { action } = useParams();
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [photoLink, setPhotoLink] = useState("");
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);
  // const [price, setPrice] = useState(100);
  // const [redirect, setRedirect] = useState(false);

  async function addPhotoByLink(e) {
    e.preventDefault();
    const { data: filename } = await axios.post("/upload-by-link", {
      link: photoLink,
    });
    setAddedPhotos((prev) => {
      return [...prev, filename];
    });
    setPhotoLink("");
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
        <form>
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
          <h2 className="text-2xl mt-4">Photos</h2>
          <p className="text-sm text-gray-500">more = better</p>
          <div className="flex gap-2">
            <input
              type="text"
              value={photoLink}
              onChange={(e) => setPhotoLink(e.target.value)}
              placeholder="Add image with a link...jpg"
            />
            <button
              onClick={addPhotoByLink}
              className="rounded-2xl bg-gray-200 px-4"
            >
              Add&nbsp;image
            </button>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-2 gap-2">
            {addedPhotos.length > 0 &&
              addedPhotos.map((link) => (
                <div key={link}>
                  <img
                    className="rounded-2xl"
                    src={"http://localhost:3000/uploads/" + link}
                    alt=""
                  />
                </div>
              ))}
            <button className="flex items-center gap-1 justify-center border bg-transparent rounded-xl p-2 text-gray-600 text-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                />
              </svg>
              Upload
            </button>
          </div>
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
