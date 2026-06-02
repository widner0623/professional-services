import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown, FiPhone } from "react-icons/fi";

const faqs = [
  {
    question: "How much does a move typically cost?",
    answer:
      "Moving costs vary based on distance, home size, services needed, and timing. Local moves typically range from $500-$3,000, while long-distance moves can range from $2,000-$8,000+. We provide free, detailed quotes so you know exactly what to expect with no hidden fees.",
  },
  {
    question: "How far in advance should I book my move?",
    answer:
      "We recommend booking 2-4 weeks in advance, especially during peak season or for weekend moves. However, we often accommodate last-minute moves based on availability.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes, absolutely. We are fully licensed, bonded, and insured. We carry liability and cargo insurance to protect your belongings throughout the moving process.",
  },
  {
    question: "Do you provide packing materials?",
    answer:
      "Yes. We offer full-service packing with boxes, tape, bubble wrap, packing paper, and other professional-grade materials to help protect your items.",
  },
  {
    question: "What items can't you move?",
    answer:
      "For safety and legal reasons, we cannot transport hazardous materials, perishable food, plants for long-distance moves, or illegal items.",
  },
  {
    question: "What if something gets damaged during the move?",
    answer:
      "While we take every precaution to prevent damage, accidents can happen. We carry insurance and have a straightforward claims process to resolve issues quickly.",
  },
  {
    question: "What does your junk removal service include?",
    answer:
      "Our junk removal service covers furniture, appliances, electronics, yard waste, construction debris, and general household items. We dispose of items responsibly whenever possible.",
  },
  {
    question: "Can you move specialty items like pianos or antiques?",
    answer:
      "Yes. We have specialized training and equipment for moving pianos, antiques, safes, fine art, and other valuable or delicate items.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-slate-50 py-28">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-orange-500 font-semibold tracking-[0.2em] text-sm uppercase mb-4">
            Got Questions?
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Frequently Asked Questions
          </h2>

          <p className="text-lg text-slate-500 leading-relaxed">
            Find answers to common questions about our moving services, pricing,
            and process.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden"
                animate={{
                  boxShadow: isOpen
                    ? "0 20px 45px rgba(15, 23, 42, 0.12)"
                    : "0 4px 12px rgba(15, 23, 42, 0.08)",
                }}
                transition={{ duration: 0.25 }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-6 font-semibold text-slate-900"
                >
                  <span>{faq.question}</span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-blue-800 shrink-0"
                  >
                    <FiChevronDown />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.3, ease: "easeInOut" },
                        opacity: { duration: 0.2 },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-slate-500 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-slate-500 mb-6">
            Still have questions? We're here to help!
          </p>

          <a
            href="tel:+11234567890"
            className="inline-flex items-center justify-center gap-3 bg-blue-800 hover:bg-blue-900 active:scale-95 text-white font-semibold px-10 py-5 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <FiPhone />
            Call Us: (123) 456-7890
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;