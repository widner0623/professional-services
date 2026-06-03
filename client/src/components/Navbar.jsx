import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";

const mobileLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "How It Works", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "Gallery", href: "#gallery" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 xl:px-6">
        <div className="h-24 flex items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-3 shrink-0" onClick={closeMenu}>
            <div className="w-12 h-12 rounded-xl bg-blue-700 flex items-center justify-center text-white font-bold text-lg shrink-0">
              PS
            </div>

            <div>
              <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl text-slate-900 leading-tight">
                Professional Services
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm">
                Moving & Junk Removal
              </p>
            </div>
          </a>

          <nav className="hidden xl:flex items-center gap-6">
            {mobileLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium text-slate-800 hover:text-blue-700 transition"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden xl:flex items-center gap-4">
            <a
              href="tel:+11234567890"
              className="flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-2xl font-medium shadow-lg transition whitespace-nowrap"
            >
              <FiPhone />
              (123) 456-7890
            </a>

            <a
              href="#quote"
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-4 rounded-2xl font-medium shadow-lg transition whitespace-nowrap"
            >
              Get Free Quote
            </a>
          </div>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="xl:hidden w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center text-2xl text-slate-900 shrink-0"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  transition={{ duration: 0.18 }}
                >
                  <FiX />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  transition={{ duration: 0.18 }}
                >
                  <FiMenu />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="xl:hidden overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.nav
                className="bg-white border-t border-slate-100 pt-4 pb-6 space-y-2"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.06,
                    },
                  },
                }}
              >
                {mobileLinks.map((link) => (
                  <motion.a
                    key={link.href}
                    onClick={closeMenu}
                    href={link.href}
                    className="block px-4 py-3 rounded-xl font-medium text-slate-800 hover:bg-slate-100"
                    variants={{
                      hidden: { opacity: 0, y: -10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.22 }}
                  >
                    {link.label}
                  </motion.a>
                ))}

                <motion.div
                  className="grid sm:grid-cols-2 gap-3 pt-4"
                  variants={{
                    hidden: { opacity: 0, y: -10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.22 }}
                >
                  <a
                    onClick={closeMenu}
                    href="tel:+11234567890"
                    className="flex items-center justify-center gap-3 bg-orange-500 text-white px-6 py-4 rounded-2xl font-medium shadow-lg active:scale-95 transition"
                  >
                    <FiPhone />
                    Call Now
                  </a>

                  <a
                    onClick={closeMenu}
                    href="#quote"
                    className="flex items-center justify-center bg-blue-700 text-white px-6 py-4 rounded-2xl font-medium shadow-lg active:scale-95 transition"
                  >
                    Get Free Quote
                  </a>
                </motion.div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;