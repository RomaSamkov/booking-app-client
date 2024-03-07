import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PlacePage() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/places/${id}`).then((response) => {
      setPlace(response.data);
    });
  }, [id]);

  if (!place) return;

  if (showAllPhotos) {
    return (
      <div className="absolute bg-black text-white inset-0 min-h-screen">
        <div className="grid gap-4 p-8 bg-black">
          <div>
            <h2 className="text-3xl">{place.title}</h2>
            <button
              onClick={() => setShowAllPhotos(false)}
              className="fixed flex gap-1 top-8 right-12 py-2 px-4 bg-gray-500 rounded-2xl shadow-md shadow-gray-800 hover:bg-white hover:text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
              Close Photos
            </button>
          </div>
          {place?.photos?.length > 0 &&
            place.photos.map((photo) => (
              <div key={new Date().getTime()}>
                <img
                  className=""
                  src={"http://localhost:3000/uploads/" + photo}
                  alt=""
                />
              </div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4 bg-gray-100 -m-8 p-8">
      <h1 className="text-3xl">{place.title}</h1>
      <a
        className="flex gap-1 font-semibold underline my-3"
        target="_blank"
        rel="noreferrer"
        href={"https://maps.google.com/?q=" + place.address}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>

        {place.address}
      </a>
      <div className="relative">
        <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-3xl overflow-hidden">
          <div>
            {place.photos?.[0] && (
              <div>
                <img
                  className="object-cover aspect-square"
                  src={"http://localhost:3000/uploads/" + place.photos[0]}
                  alt={place.title}
                />
              </div>
            )}
          </div>
          <div className="grid">
            {place.photos?.[1] && (
              <img
                className="object-cover aspect-square"
                src={"http://localhost:3000/uploads/" + place.photos[1]}
                alt={place.title}
              />
            )}
            {place.photos?.[2] && (
              <div className="overflow-hidden">
                <img
                  className="object-cover aspect-square relative top-2"
                  src={"http://localhost:3000/uploads/" + place.photos[2]}
                  alt={place.title}
                />
              </div>
            )}
          </div>
        </div>
        <button
          onClick={() => setShowAllPhotos(true)}
          className="absolute bottom-2 right-2 py-2 px-4 bg-white rounded-2xl shadow-md shadow-gray-500 hover:bg-gray-500 hover:text-white"
        >
          Show More Photos
        </button>
      </div>
    </div>
  );
}
