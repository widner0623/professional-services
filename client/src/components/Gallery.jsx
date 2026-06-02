import { useState } from "react";

const filters = ["All", "Service", "Equipment", "Packing", "Customers"];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?q=80&w=900&auto=format&fit=crop",
    alt: "Moving crew loading boxes",
    category: "Service",
  },
  {
    src: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?q=80&w=900&auto=format&fit=crop",
    alt: "Moving truck service",
    category: "Equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop",
    alt: "Packed home with moving boxes",
    category: "Packing",
  },
  {
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=900&auto=format&fit=crop",
    alt: "Family outside new home",
    category: "Customers",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=900&auto=format&fit=crop",
    alt: "Moving truck being loaded",
    category: "Equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?q=80&w=900&auto=format&fit=crop",
    alt: "Customers moving into new home",
    category: "Customers",
  },
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredImages =
    activeFilter === "All"
      ? galleryImages
      : galleryImages.filter(
          (image) => image.category === activeFilter
        );

  return (
    <section id="gallery" className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-orange-500 font-semibold tracking-[0.2em] text-sm uppercase mb-4">
            See Us In Action
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Our Work Gallery
          </h2>

          <p className="text-lg text-slate-500 leading-relaxed">
            Real moves, real results. Explore our gallery to see the quality and
            care we bring to every relocation.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-7 py-3 rounded-full font-medium transition-all duration-300 shadow-sm ${
                activeFilter === filter
                  ? "bg-blue-800 text-white shadow-lg"
                  : "bg-slate-100 text-slate-500 hover:bg-slate-200 hover:-translate-y-1"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="
                group
                h-72
                rounded-2xl
                overflow-hidden
                shadow-lg
                bg-slate-100
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >
              <img
                src={image.src}
                alt={image.alt}
                className="
                  w-full
                  h-full
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-110
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;