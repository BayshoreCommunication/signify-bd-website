import { categories } from "@/lib/data";
import Image from "next/image";

interface PageProps {
  params: {
    slug: string;
  };
}

const Page = ({ params }: PageProps) => {
  // Find category by slug
  const data = categories.find((item) => item.slug === params.slug);

  if (!data) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-semibold">Category not found</h1>
      </div>
    );
  }

  return (
    <section className="py-20">
      <div className="max-w-[1640px] mx-auto px-8">
        {/* PAGE TITLE */}
        <h1 className="text-3xl md:text-5xl font-semibold mb-10 text-black text-center">
          {data.title}
        </h1>

        {/* IMAGE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.images.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-sm border">
              <Image
                src={img}
                alt={`${data.title} ${index + 1}`}
                width={400}
                height={300}
                className="w-full  object-cover hover:scale-105 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
