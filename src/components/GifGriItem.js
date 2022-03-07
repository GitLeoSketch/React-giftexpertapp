import React from "react";

export const GifGriItem = ({ id, url, title }) => {
  return (
    <figure className="card animate__animated animate__fadeInDown">
      <figcaption>{title}</figcaption>
      <img src={url} />
    </figure>
  );
};
