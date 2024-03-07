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
      <div className="absolute bg-white inset-0 min-h-screen">
        <div className="grid gap-4 p-8">
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
        className="font-semibold underline my-2"
        target="_blank"
        rel="noreferrer"
        href={"https://maps.google.com/?q=" + place.address}
      >
        {place.address}
      </a>
      <div className="relative">
        <div className="grid gap-2 grid-cols-[2fr_1fr]">
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
