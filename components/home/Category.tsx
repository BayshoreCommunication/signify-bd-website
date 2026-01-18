import { categories } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const Category = () => {
  return (
    <section className="py-20">
      <div className="max-w-[1640px] mx-auto px-8">
        <h2 className="text-3xl md:text-5xl font-semibold text-center mb-12 text-black">
          Product Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {categories.map((item) => (
            <Link
              key={item.slug}
              href={`/category/${item.slug}`}
              className="relative h-[220px] rounded-md overflow-hidden group"
            >
              {/* BACKGROUND IMAGE */}
              <Image
                src={item.coverImage}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 33vw,
                       16vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition" />

              {/* TITLE */}
              <div className="absolute inset-0 flex items-center justify-center text-center px-3">
                <h3 className="text-white text-sm md:text-base font-semibold leading-tight">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
