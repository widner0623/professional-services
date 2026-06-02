import {
  FiPhone,
  FiMail,
  FiClock,
  FiMapPin,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";

const features = [
  "20+ years of professional moving experience",
  "10,000+ successful moves completed",
  "Fully licensed, bonded, and insured",
  "98% customer satisfaction rate",
  "Trained and background-checked crews",
  "Modern, well-maintained equipment",
  "Transparent, competitive pricing",
  "100% satisfaction guarantee",
];

const ReadyToMove = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 py-28">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-8">
            Ready to Make Your Move
            <span className="block text-orange-500">
              Stress-Free?
            </span>
          </h2>

          <p className="text-xl text-white/90 leading-relaxed mb-10 max-w-2xl">
            Join thousands of satisfied customers who trusted us with their
            move. Get your free, no-obligation quote today and experience the
            Professional Services difference.
          </p>

          <div className="space-y-5 mb-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 text-orange-500 flex items-center justify-center text-2xl">
                <FiPhone />
              </div>

              <div>
                <p className="text-white/70 text-sm">Call Us Anytime</p>
                <p className="text-white font-bold text-lg">(123) 456-7890</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 text-orange-500 flex items-center justify-center text-2xl">
                <FiMail />
              </div>

              <div>
                <p className="text-white/70 text-sm">Email Us</p>
                <p className="text-white font-bold text-lg">
                  info@professionalservices.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 text-orange-500 flex items-center justify-center text-2xl">
                <FiClock />
              </div>

              <div>
                <p className="text-white/70 text-sm">Business Hours</p>
                <p className="text-white font-bold text-lg">
                  Mon-Sat: 7AM - 8PM, Sun: 9AM - 5PM
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 text-orange-500 flex items-center justify-center text-2xl">
                <FiMapPin />
              </div>

              <div>
                <p className="text-white/70 text-sm">Serving</p>
                <p className="text-white font-bold text-lg">
                  Pacific Northwest & Beyond
                </p>
              </div>
            </div>
          </div>

          <a
            href="#quote"
            className="inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-10 py-5 rounded-xl shadow-lg transition"
          >
            Request Your Free Estimate
            <FiArrowRight />
          </a>
        </div>

        <div className="bg-white/10 border border-white/20 rounded-[28px] p-8 md:p-10 backdrop-blur text-white">
          <h3 className="text-3xl font-extrabold mb-8">
            What Sets Us Apart
          </h3>

          <div className="space-y-5">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
                  <FiCheckCircle className="text-white" />
                </div>

                <p className="text-white/90">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToMove;