import Image from "next/image";

export default function Hero() {
  return (
    <div className="grid grid-cols-1 gap-2 mt-16 mx-auto md:mx-8">
      <div className="relative h-[600px]">
        <Image
          src="/family.jpg"
          alt="Photo of the Marshall family in the grass at the golden hour"
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-center"
        />
      </div>
    </div>
  );
}
