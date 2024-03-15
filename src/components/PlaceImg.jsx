const baseUrl = import.meta.env.VITE_BASE_URL;

export default function PlaceImg({ place, index = 0, className = null }) {
  if (!place?.photos.length) {
    return "";
  }
  if (!className) {
    className = "object-cover";
  }
  return (
    <div>
      <img
        className={className}
        src={`${baseUrl}/uploads/` + place.photos[index]}
        alt={place.title}
      />
    </div>
  );
}
