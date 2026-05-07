"use client";

import Image from "next/image";

const photos = [
  {
    src: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFrQO3F5MJJxbFIPqq6lXvGYVh4pCOL3MZNj45ZhNFevhqZlHd4CvWUyv4bkl3l8AiWf7-P0wJBvEtdSuZmr3qhRY_cYr4YgkLY=w800-h600-k-no",
    alt: "The Perfect Touch Painting — kitchen cabinet spray painting transformation",
  },
  {
    src: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAE4FXYoTfqYiFiBxIFd1YiY4cXoRk7-T8Mj55qT1FUj-C4-OfIjTPaHQ0UGmwAZ1w3yoGUb_44P8vVsqAYFu9B5CJ4Y3UgqATbv=w800-h600-k-no",
    alt: "The Perfect Touch Painting — interior painting project",
  },
  {
    src: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHbUVD7dq0v3bN90JwD7JZ03JGHfvUm2p2-7zGRLi8QJ6p8GPJAg4s6KScvHb0r0gvZPYV2_LHOO5yyj7tNqFXr5G3eDi3l7Yid=w800-h600-k-no",
    alt: "The Perfect Touch Painting — finished spray cabinet work",
  },
];

export default function PhotoGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {photos.map((photo, i) => (
        <div
          key={i}
          className="relative overflow-hidden"
          style={{ height: "280px" }}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}
    </div>
  );
}
