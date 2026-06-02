import Image from "next/image";

export default function MaterialGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  return (
    <div className="grid gap-4">
      <div className="relative min-h-[420px] overflow-hidden rounded-lg">
        <Image
          src={images[0]}
          alt={name}
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {images.slice(0, 3).map((image, index) => (
          <div
            key={image}
            className="relative h-32 overflow-hidden rounded-lg border border-stone-200 bg-stone-100"
          >
            <Image
              src={image}
              alt={`${name} view ${index + 1}`}
              fill
              sizes="(min-width: 1024px) 16vw, 33vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
