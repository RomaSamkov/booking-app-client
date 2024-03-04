import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

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
          <div key={place.title}>
            <div>
              <div>
                {place.photos?.[0] && (
                  <img
                    className="border mb-2 rounded-2xl object-cover aspect-square"
                    src={"http://localhost:3000/uploads/" + place.photos?.[0]}
                  ></img>
                )}
              </div>
              <h2 className="text-sm truncate">{place.title}</h2>
              <h3 className="font-bold">{place.address}</h3>
            </div>
          </div>
        ))}
    </div>
  );
}
