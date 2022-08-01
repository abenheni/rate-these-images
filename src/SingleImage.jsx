import { useState } from "react";
import { ReactComponent as LikeSvg } from "./like.svg";
import { ReactComponent as DislikeSvg } from "./dislike.svg";

const SingleImage = ({ url }) => {
  const [liked, setLiked] = useState(null);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: 'flex-start' }}
    >
      <img src={url} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <button
          style={{
            all: "unset",
            cursor: 'pointer',
            padding: 10,
            borderRadius: 8,
            backgroundColor: "coral",
          }}
          onClick={() => setLiked(true)}
        >
          Like
        </button>
        <button
          style={{
            all: "unset",
            cursor: 'pointer',
            padding: 10,
            borderRadius: 8,
            backgroundColor: "coral",
          }}
          onClick={() => setLiked(false)}
        >
          Dislike
        </button>
      </div>
      {liked === true && <LikeSvg width={60} />}
      {liked === false && <DislikeSvg width={60} />}
    </div>
  );
};

export default SingleImage;
