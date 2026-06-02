import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl bg-blue-700 flex items-center justify-center font-bold">
                PS
              </div>

              <div>
                <h3 className="font-bold text-lg">Professional Services</h3>
                <p className="text-slate-300 text-sm">Moving & Junk Removal</p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              Your trusted partner for stress-free moving since 2005. We treat
              your belongings like our own.
            </p>

            <div className="flex gap-3">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-orange-500 flex items-center justify-center transition"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>

            <div className="space-y-4 text-slate-300">
              <a href="#services" className="block hover:text-orange-500">Services</a>
              <a href="#why-us" className="block hover:text-orange-500">Why Choose Us</a>
              <a href="#process" className="block hover:text-orange-500">How It Works</a>
              <a href="#reviews" className="block hover:text-orange-500">Reviews</a>
              <a href="#gallery" className="block hover:text-orange-500">Gallery</a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>

            <div className="space-y-3 text-slate-300">
              <p>Residential Moving</p>
              <p>Commercial Moving</p>
              <p>Packing Services</p>
              <p>Junk Removal</p>
              <p>Long-Distance Moving</p>
              <p>Loading & Unloading</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact Info</h4>

            <div className="space-y-5 text-slate-300">
              <div>
                <p className="font-bold text-white">Phone:</p>
                <p>(123) 456-7890</p>
              </div>

              <div>
                <p className="font-bold text-white">Email:</p>
                <p>info@professionalservices.com</p>
              </div>

              <div>
                <p className="font-bold text-white">Hours:</p>
                <p>Mon-Sat: 7AM - 8PM</p>
                <p>Sun: 9AM - 5PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between gap-6 text-slate-300 text-sm">
          <p>© 2026 Professional Services LLC. All rights reserved.</p>

          <div className="flex gap-8">
            <a href="#" className="hover:text-orange-500">Privacy Policy</a>
            <a href="#" className="hover:text-orange-500">Terms of Service</a>
            <a href="#" className="hover:text-orange-500">License Info</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;