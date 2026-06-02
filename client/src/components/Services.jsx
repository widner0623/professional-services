import {
  FiHome,
  FiBriefcase,
  FiPackage,
  FiTrash2,
  FiTruck,
  FiMapPin,
  FiCheckCircle,
} from "react-icons/fi";

const services = [
  {
    icon: <FiHome />,
    title: "Residential Moving",
    text: "Professional home moving services tailored to your family's needs. From apartments to large estates, we handle it all with care.",
    features: [
      "Furniture protection",
      "Room-by-room organization",
      "Same-day service available",
    ],
  },
  {
    icon: <FiBriefcase />,
    title: "Commercial Moving",
    text: "Minimize downtime with our efficient business relocation services. We understand the importance of getting back to work quickly.",
    features: [
      "After-hours moving",
      "IT equipment handling",
      "Office setup assistance",
    ],
  },
  {
    icon: <FiPackage />,
    title: "Packing Services",
    text: "Full-service packing with premium materials. We pack, label, and organize everything so you don't have to lift a finger.",
    features: [
      "Professional packing materials",
      "Fragile item specialists",
      "Custom crating available",
    ],
  },
  {
    icon: <FiTrash2 />,
    title: "Junk Removal",
    text: "Declutter your space with our efficient junk removal service. We haul away unwanted items, furniture, appliances, and debris responsibly.",
    features: [
      "Same-day junk removal",
      "Eco-friendly disposal",
      "Estate cleanouts",
    ],
  },
  {
    icon: <FiTruck />,
    title: "Loading & Unloading",
    text: "Need help with the heavy lifting? Our trained crew safely loads and unloads your belongings with precision and care.",
    features: [
      "Heavy item specialists",
      "Furniture assembly",
      "Truck rental assistance",
    ],
  },
  {
    icon: <FiMapPin />,
    title: "Long-Distance Moving",
    text: "Cross-country or cross-state, we've got you covered. Track your shipment and enjoy door-to-door service nationwide.",
    features: [
      "GPS tracking",
      "Climate-controlled trucks",
      "Dedicated move coordinator",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-orange-500 font-semibold tracking-[0.2em] text-sm uppercase mb-4">
            What We Do
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Comprehensive Moving Solutions
          </h2>

          <p className="text-lg text-slate-500 leading-relaxed">
            From local moves to cross-country relocations, we offer complete
            services to make your transition seamless.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-slate-100 rounded-[28px] p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-100"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-700 text-white flex items-center justify-center text-3xl mb-8 transition-all duration-300 group-hover:bg-orange-500 group-hover:scale-110 group-hover:rotate-3">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 transition-colors duration-300 group-hover:text-blue-800">
                {service.title}
              </h3>

              <p className="text-slate-500 leading-relaxed mb-8">
                {service.text}
              </p>

              <div className="space-y-4">
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center gap-3 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <FiCheckCircle className="text-orange-500 shrink-0 transition-transform duration-300 group-hover:scale-110" />

                    <span className="text-slate-700">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;