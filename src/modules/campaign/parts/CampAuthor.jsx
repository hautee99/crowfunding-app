import { defaultImage, defaultImageAuthor } from "constants/global";
import React from "react";

const CampAuthor = ({
  image = defaultImageAuthor,
  author = "Mahfuzul Nabil",
}) => {
  return (
    <div className="flex items-center gap-x-3">
      <img
        src={image}
        className="w-8 h-8 rounded-full object-cover"
        alt=""
      ></img>
      <p className="text-text3 text-xs">
        By <span className="text-text2 font-semibold">{author}</span>
      </p>
    </div>
  );
};

export default CampAuthor;
