import axios from "axios";
import { useEffect, useState } from "react";
import Perks from "./Perks";
import PhotosUploader from "../components/PhotosUploader";
import AccountNav from "../components/AccountNav";
import { Navigate, useParams } from "react-router-dom";

export default function PlacesFormPage() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);
  const [price, setPrice] = useState(100);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/places/" + id).then((response) => {
      const { data } = response;
      setTitle(data.title);
      setAddress(data.address);
      setAddedPhotos(data.photos);
      setDescription(data.description);
      setPerks(data.perks);
      setExtraInfo(data.extraInfo);
      setCheckIn(data.checkIn);
      setCheckOut(data.checkOut);
      setMaxGuests(data.maxGuests);
      setPrice(data.price);
    });
  }, [id]);

  async function savePlace(e) {
    e.preventDefault();
    const placeData = {
      title,
      address,
      addedPhotos,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
      price,
    };
    if (id) {
      await axios.put("/places", { id, ...placeData });
      setRedirect(true);
    } else {
      await axios.post("/places", placeData);
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={"/account/places"} />;
  }
  return (
    <div>
      <AccountNav />
      <form onSubmit={savePlace}>
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
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
              type="number"
              value={maxGuests}
              onChange={(e) => setMaxGuests(e.target.value)}
              placeholder="max guests"
            />
          </div>
          <div>
            <h3 className="mt-2 -mb-1">Price</h3>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="price"
            />
          </div>
        </div>

        <button className="primary my-4">Save</button>
      </form>
    </div>
  );
}
