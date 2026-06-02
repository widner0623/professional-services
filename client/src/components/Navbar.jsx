import { useState } from "react";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <div className="h-24 flex items-center justify-between">
          <a href="#" className="flex items-center gap-4" onClick={closeMenu}>
            <div className="w-12 h-12 rounded-xl bg-blue-700 flex items-center justify-center text-white font-bold text-lg">
              PS
            </div>

            <div>
              <h2 className="font-bold text-xl sm:text-2xl text-slate-900">
                Professional Services
              </h2>
              <p className="text-slate-500 text-sm">Moving & Junk Removal</p>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-10">
            <a href="#services" className="font-medium text-slate-800 hover:text-blue-700 transition">Services</a>
            <a href="#why-us" className="font-medium text-slate-800 hover:text-blue-700 transition">Why Us</a>
            <a href="#process" className="font-medium text-slate-800 hover:text-blue-700 transition">How It Works</a>
            <a href="#reviews" className="font-medium text-slate-800 hover:text-blue-700 transition">Reviews</a>
            <a href="#gallery" className="font-medium text-slate-800 hover:text-blue-700 transition">Gallery</a>
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+11234567890"
              className="flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-medium shadow-lg transition"
            >
              <FiPhone />
              (123) 456-7890
            </a>

            <a
              href="#quote"
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-2xl font-medium shadow-lg transition"
            >
              Get Free Quote
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center text-2xl text-slate-900"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden pb-6">
            <nav className="bg-white border-t border-slate-100 pt-4 space-y-2">
              <a onClick={closeMenu} href="#services" className="block px-4 py-3 rounded-xl font-medium text-slate-800 hover:bg-slate-100">Services</a>
              <a onClick={closeMenu} href="#why-us" className="block px-4 py-3 rounded-xl font-medium text-slate-800 hover:bg-slate-100">Why Us</a>
              <a onClick={closeMenu} href="#process" className="block px-4 py-3 rounded-xl font-medium text-slate-800 hover:bg-slate-100">How It Works</a>
              <a onClick={closeMenu} href="#reviews" className="block px-4 py-3 rounded-xl font-medium text-slate-800 hover:bg-slate-100">Reviews</a>
              <a onClick={closeMenu} href="#gallery" className="block px-4 py-3 rounded-xl font-medium text-slate-800 hover:bg-slate-100">Gallery</a>

              <div className="grid sm:grid-cols-2 gap-3 pt-4">
                <a
                  onClick={closeMenu}
                  href="tel:+11234567890"
                  className="flex items-center justify-center gap-3 bg-orange-500 text-white px-6 py-4 rounded-2xl font-medium shadow-lg"
                >
                  <FiPhone />
                  Call Now
                </a>

                <a
                  onClick={closeMenu}
                  href="#quote"
                  className="flex items-center justify-center bg-blue-700 text-white px-6 py-4 rounded-2xl font-medium shadow-lg"
                >
                  Get Free Quote
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;