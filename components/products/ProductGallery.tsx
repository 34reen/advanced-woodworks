"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="space-y-4">
      <div className="group overflow-hidden rounded-xl shadow-2xl">
        <Image
          src={activeImage}
          alt={name}
          width={1000}
          height={760}
          priority
          className="h-[430px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[620px]"
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setActiveImage(image)}
            className={`overflow-hidden rounded-lg border-2 transition ${
              activeImage === image
                ? "border-amber-700"
                : "border-transparent hover:border-stone-300"
            }`}
          >
            <Image
              src={image}
              alt={`${name} view ${index + 1}`}
              width={300}
              height={220}
              className="h-24 w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
