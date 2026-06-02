import {
  FiShield,
  FiClock,
  FiAward,
  FiUsers,
  FiHeart,
  FiStar,
} from "react-icons/fi";

const reasons = [
  {
    icon: <FiShield />,
    title: "Licensed & Insured",
    text: "Fully licensed, bonded, and insured for your complete peace of mind. Your belongings are protected every step of the way.",
  },
  {
    icon: <FiClock />,
    title: "Always On Time",
    text: "We respect your schedule. Our team arrives on time, works efficiently, and completes your move within the agreed timeframe.",
  },
  {
    icon: <FiAward />,
    title: "20+ Years Experience",
    text: "Two decades of excellence in the moving industry. We've successfully completed over 50,000 moves with a 98% satisfaction rate.",
  },
  {
    icon: <FiUsers />,
    title: "Trained Professionals",
    text: "Our crew members undergo rigorous training and background checks. You can trust them in your home and with your valuables.",
  },
  {
    icon: <FiHeart />,
    title: "We Care About Your Belongings",
    text: "Every item is treated as if it were our own. From fragile heirlooms to everyday furniture, we handle everything with care.",
  },
  {
    icon: <FiStar />,
    title: "Customer Satisfaction Guaranteed",
    text: "Your happiness is our priority. We're not satisfied until you are. That's our promise and our 100% satisfaction guarantee.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-orange-500 font-semibold tracking-[0.2em] text-sm uppercase mb-4">
            The Professional Services Difference
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Why Choose Us?
          </h2>

          <p className="text-lg text-slate-500 leading-relaxed">
            We're not just another moving company. We're your trusted partner in
            making your transition smooth, safe, and stress-free.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-16 gap-y-16 text-center">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group rounded-[28px] p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-slate-50 hover:shadow-xl"
            >
              <div className="w-20 h-20 mx-auto rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center text-4xl mb-8 transition-all duration-300 group-hover:bg-blue-700 group-hover:text-white group-hover:scale-110 group-hover:rotate-3">
                {reason.icon}
              </div>

              <h3 className="text-xl font-extrabold text-slate-900 mb-4 transition-colors duration-300 group-hover:text-blue-800">
                {reason.title}
              </h3>

              <p className="text-slate-500 leading-relaxed">
                {reason.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-blue-800 rounded-[28px] px-6 py-14 text-center text-white transition-all duration-300 hover:shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-6">
            Ready to Experience the Difference?
          </h3>

          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10">
            Join thousands of satisfied customers who trusted us with their
            move. Let's make your transition seamless.
          </p>

          <a
            href="#quote"
            className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-semibold px-10 py-5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
          >
            Get Your Free Quote Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;