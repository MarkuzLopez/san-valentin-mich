import React from "react";
import first from "../../assets/michandme/first.jpeg";
import second from "../../assets/michandme/second.jpeg";
import third from "../../assets/michandme/third.jpeg";

export const Carrousel = () => {
  const ArrayImages = [
    {
      src: first,
      alt: "First",
    },
    {
      src: second,
      alt: "Second",
    },
    {
      src: third,
      alt: "Third",
    },
  ];

  return (
    <div
      id="carouselExampleRide"
      className="carousel slide"
      data-bs-ride="true"
    >
      <div className="carousel-inner">
        {ArrayImages.map((img) => {
          return (
            <div key={img.alt} className="carousel-item active">
              <img src={img.src} className="d-block w-100" alt={img.alt} />
            </div>
          );
        })}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleRide"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleRide"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
