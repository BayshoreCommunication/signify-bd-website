import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full ">
      <div className="max-w-[1640px] mx-auto px-8 py-6">
        <Image
          src="/images/hero-img.png"
          alt="Hero Banner"
          width={1920}
          height={1080}
          className="w-full h-auto "
        />
      </div>
    </section>
  );
};

export default Hero;
