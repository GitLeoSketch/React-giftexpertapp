import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";

import { GifGriItem } from "./GifGriItem";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h4>{category}</h4>

      {loading && <p>Cargando...</p>}

      <div className="card-grid">
        {images.map((img) => (
          <GifGriItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
