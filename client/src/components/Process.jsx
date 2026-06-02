import { FiMessageSquare, FiCalendar, FiTruck, FiCheckCircle } from "react-icons/fi";

const steps = [
  {
    number: "01",
    icon: <FiMessageSquare />,
    title: "Request a Quote",
    text: "Fill out our simple form or give us a call. We'll discuss your needs and provide a transparent, no-obligation estimate.",
  },
  {
    number: "02",
    icon: <FiCalendar />,
    title: "Schedule Your Move",
    text: "Choose a date that works for you. We offer flexible scheduling, including weekends and after-hours service.",
  },
  {
    number: "03",
    icon: <FiTruck />,
    title: "We Handle Everything",
    text: "Our professional team arrives on time, carefully packs and loads your belongings, and transports them safely to your new location.",
  },
  {
    number: "04",
    icon: <FiCheckCircle />,
    title: "Settle Into Your New Home",
    text: "We unload, unpack, and help you get settled. Your move is complete when you're satisfied with everything.",
  },
];

const Process = () => {
  return (
    <section
      id="process"
      className="bg-slate-50 py-24 md:py-28 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-orange-500 font-semibold tracking-[0.2em] text-xs sm:text-sm uppercase mb-4">
            Simple & Straightforward
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            How It Works
          </h2>

          <p className="text-base sm:text-lg text-slate-500 leading-relaxed">
            Moving with us is easy. Just four simple steps to a stress-free
            relocation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {steps.map((step) => (
            <div
              key={step.number}
              className="
                group
                relative
                bg-white
                rounded-2xl
                p-8
                pt-14
                sm:p-10
                sm:pt-16
                md:p-14
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >
              <div
                className="
                  absolute
                  -top-6
                  left-6
                  lg:-left-6
                  w-16
                  h-16
                  rounded-2xl
                  bg-blue-700
                  text-white
                  flex
                  items-center
                  justify-center
                  text-2xl
                  font-extrabold
                  shadow-lg
                  transition-all
                  duration-300
                  group-hover:scale-110
                  group-hover:rotate-3
                "
              >
                {step.number}
              </div>

              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-blue-50
                  text-blue-800
                  flex
                  items-center
                  justify-center
                  text-3xl
                  mb-8
                  transition-all
                  duration-300
                  group-hover:bg-blue-700
                  group-hover:text-white
                  group-hover:scale-110
                "
              >
                {step.icon}
              </div>

              <h3
                className="
                  text-2xl
                  font-extrabold
                  text-slate-900
                  mb-4
                  transition-colors
                  duration-300
                  group-hover:text-blue-800
                "
              >
                {step.title}
              </h3>

              <p className="text-slate-500 leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-slate-500 mb-8">
            Have questions about the process?
          </p>

          <a
            href="#quote"
            className="
              inline-flex
              items-center
              justify-center
              bg-blue-800
              hover:bg-blue-900
              active:scale-95
              text-white
              font-semibold
              px-8
              sm:px-10
              py-5
              rounded-xl
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-2xl
            "
          >
            Start Your Move Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;