import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

const Footer = () => {
  return (
    <section className="w-full ">
      <div className="max-w-[1640px] mx-auto px-8 py-6 border-t-1 border-gray-300">
        <div className="flex flex-col items-center gap-3 justify-center">
          <Image
            src="/images/logo.png"
            alt="Hero Banner"
            width={200}
            height={150}
            className="w-[160px] h-auto mx-auto "
          />
          <div className="flex items-center gap-2 justify-center ">
            <p className="font-medium text-gray-600">
              For order, contact us on Facebook:
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
          <div>
            <Link
              href="https://www.instagram.com/signify_bd?igsh=MW9ocDIydGdvcXM2Nw=="
              target="_blank"
              className="flex items-center gap-2 font-semibold hover:underline
               bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]
               bg-clip-text text-transparent"
            >
              <FaInstagram className="text-[#ee2a7b]" />
              Signify Bangladesh
            </Link>
          </div>

          <div>
            <Link
              href="tel:+8801878754017"
              className="flex items-center gap-2 text-[#4275FF] font-semibold hover:underline"
            >
              <IoCall />
              +880 1878-754017
            </Link>
          </div>

          <div>
            <p className="flex items-center gap-2 text-black font-semibold ">
              Address: House 21, Road-1, Block -A, Aftabnogor, Dhaka, Bangladesh
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
