"use client";

import Image from "next/image";
import Link from "next/link";
import { IoIosCall } from "react-icons/io";
import { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 150);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`transition-all duration-500 ${
        isSticky
          ? "fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow z-50"
          : "relative bg-white backdrop-blur-md shadow "
      }`}
    >
      <div className="max-w-[1640px] mx-auto px-8 py-5 flex justify-between items-center">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={1000}
            height={500}
            className="w-[140px] md:w-[180px] h-auto"
          />
        </Link>

        {/* CALL BUTTON */}
        <a
          href="tel:8134442817"
          className="flex items-center gap-2 bg-[#BA8E2D] text-white px-4 py-3 rounded-sm hover:bg-yellow-700 transition font-medium"
        >
          <IoIosCall className="text-xl" />
          <span className="hidden sm:inline">(813) 444-2817</span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
