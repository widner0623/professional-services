import { FiArrowRight, FiPhone, FiCheckCircle } from "react-icons/fi";

const Hero = () => {
  return (
    <section
      className="relative min-h-[700px] bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600518464441-9154a4dea21b?q=80&w=1920&auto=format&fit=crop')",
      }}
    >
      {/* Dark Blue Overlay */}
      <div className="absolute inset-0 bg-blue-950/75"></div>

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white">
            Your Stress-Free Move
            <span className="block text-orange-500">
              Starts Here
            </span>
          </h1>

          <p className="mt-8 text-xl text-white/90 leading-relaxed max-w-2xl">
            Professional, reliable moving services you can trust. We handle
            your belongings with care so you can focus on your next chapter.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-5 rounded-2xl transition shadow-lg flex items-center justify-center gap-2">
              Get Your Free Quote
              <FiArrowRight />
            </button>

            <button className="bg-white hover:bg-slate-100 text-blue-900 font-semibold px-8 py-5 rounded-2xl transition shadow-lg flex items-center justify-center gap-2">
              <FiPhone />
              Call (123) 456-7890
            </button>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 text-white">
            <div className="flex items-center gap-2">
              <FiCheckCircle className="text-orange-400" />
              <span>Licensed & Insured</span>
            </div>

            <div className="flex items-center gap-2">
              <FiCheckCircle className="text-orange-400" />
              <span>20+ Years Experience</span>
            </div>

            <div className="flex items-center gap-2">
              <FiCheckCircle className="text-orange-400" />
              <span>100% Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;