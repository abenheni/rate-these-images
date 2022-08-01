import { useEffect, useState } from "react";
import SingleImage from "./SingleImage";

const ImageRating = () => {
  const [imageUrls, setImageUrls] = useState(null);

  useEffect(() => {
    setImageUrls([
      "https://www.placecage.com/c/200/200",
      "https://placekitten.com/200/200",
      "https://loremflickr.com/200/200",
    ]);
  }, []);

  return (
    <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
      {imageUrls && imageUrls.map((image) => (
        <SingleImage url={image} />
      ))}
    </div>
  );
};

export default ImageRating;
