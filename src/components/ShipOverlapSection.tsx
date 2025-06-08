import Image from "next/image";

export default function ShipOverlapSection() {
  return (
    <div className="relative w-full h-[120px] md:h-[180px] -mt-[60px] md:-mt-[90px] z-[60] pointer-events-none">
      <div className="flex !justify-center w-full h-full" data-aos="slide-left" data-aos-delay="200">
        <div className="mx-auto top-0 w-[80vw] max-w-[350px] md:w-[60vw] md:max-w-[500px] min-w-[120px]">
          <Image
            src="/hero-vessel.webp"
            alt="Hero Vessel"
            width={500}
            height={250}
            className="w-full animate-ship-rock"
            priority
          />
        </div>
      </div>
    </div>
  );
}
