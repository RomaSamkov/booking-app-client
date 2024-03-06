import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function IndexPage() {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios.get("/places").then((response) => {
      setPlaces(response.data);
    });
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-x-6 gap-y-8">
      {places.length > 0 &&
        places.map((place) => (
          <Link to={"/place/" + place._id} key={place._id}>
            <div>
              {place.photos?.[0] && (
                <img
                  className="border mb-2 rounded-2xl object-cover aspect-square"
                  src={"http://localhost:3000/uploads/" + place.photos?.[0]}
                ></img>
              )}
            </div>
            <h2 className="font-bold">{place.address}</h2>
            <h3 className="text-sm truncate text-gray-500">{place.title}</h3>
            <div className="mt-1 font-bold">${place.price}</div>
          </Link>
        ))}
    </div>
  );
}
