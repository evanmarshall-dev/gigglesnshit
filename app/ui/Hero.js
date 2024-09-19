import Image from "next/image";

export default function Hero() {
  return (
    <div className="pt-4">
      <Image
        src="/beach-bums.jpg"
        height={850}
        width={850}
        alt="Isla and Rae sitting in front of the ocean water at a beach"
        className="mx-auto"
      />
    </div>
  );
}
