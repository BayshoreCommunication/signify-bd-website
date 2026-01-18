import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="w-full ">
      <div className="max-w-[1640px] mx-auto px-8 py-6 border-t-1 border-gray-300">
        <Image
          src="/images/logo.png"
          alt="Hero Banner"
          width={200}
          height={150}
          className="w-[160px] h-auto mx-auto "
        />
        <div className="flex items-center gap-2 justify-center mt-4">
          <p className="font-medium text-gray-600">
            For orders, contact us on Facebook:
          </p>
          <Link
            href="https://www.facebook.com/SignifyBD"
            target="_blank"
            className="flex items-center gap-2 text-[#4275FF] font-semibold hover:underline"
          >
            <FaFacebook />
            Signify Bangladesh
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
