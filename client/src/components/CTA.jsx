import { useState } from "react";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiCalendar,
  FiMapPin,
  FiHome,
  FiPackage,
  FiCheckCircle,
  FiAlertCircle,
  FiBriefcase,
  FiTruck,
} from "react-icons/fi";

const initialFormData = {
  fullName: "",
  email: "",
  phone: "",
  moveType: "",
  moveDate: "",
  movingFrom: "",
  movingTo: "",
  propertySize: "",
  moveDistance: "",
  services: [],
  message: "",
};

const serviceOptions = ["Packing", "Unpacking", "Junk Removal", "Specialty Items"];

const residentialSizes = ["Studio", "1 Bedroom", "2 Bedroom", "3 Bedroom", "4 Bedroom", "5+ Bedroom"];

const commercialSizes = ["Small Office", "Medium Office", "Large Office", "Retail Store", "Warehouse", "Multi-Location Business"];

const CTA = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const inputClass =
    "w-full border border-slate-200 rounded-xl px-5 py-4 outline-none transition-all duration-300 focus:border-blue-700 focus:ring-4 focus:ring-blue-100";

  const today = new Date().toISOString().split("T")[0];

  const propertySizeOptions =
    formData.moveType === "Residential"
      ? residentialSizes
      : formData.moveType === "Commercial"
      ? commercialSizes
      : [];

  const handlePhoneChange = (event) => {
    let value = event.target.value.replace(/\D/g, "");

    value = value.slice(0, 10);

    if (value.length > 6) {
      value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`;
    } else if (value.length > 3) {
      value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }

    setFormData((prev) => ({
      ...prev,
      phone: value,
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "moveType" ? { propertySize: "" } : {}),
    }));

    if (formStatus.message) {
      setFormStatus({ type: "", message: "" });
    }
  };

  const handleServiceChange = (service) => {
    setFormData((prev) => {
      const alreadySelected = prev.services.includes(service);

      return {
        ...prev,
        services: alreadySelected
          ? prev.services.filter((item) => item !== service)
          : [...prev.services, service],
      };
    });

    if (formStatus.message) {
      setFormStatus({ type: "", message: "" });
    }
  };

  const validateForm = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.moveType ||
      !formData.moveDate ||
      !formData.movingFrom.trim() ||
      !formData.movingTo.trim() ||
      !formData.propertySize ||
      !formData.moveDistance
    ) {
      setFormStatus({
        type: "error",
        message: "Please fill out all required fields before submitting.",
      });

      return false;
    }

    if (!emailPattern.test(formData.email)) {
      setFormStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });

      return false;
    }

    const phoneDigits = formData.phone.replace(/\D/g, "");

    if (phoneDigits.length !== 10) {
      setFormStatus({
        type: "error",
        message: "Please enter a valid 10-digit phone number.",
      });

      return false;
    }

    const selectedDate = new Date(formData.moveDate);
    const today = new Date();

    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      setFormStatus({
        type: "error",
        message: "Please select a future move date.",
      });

      return false;
    }

    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus({
        type: "success",
        message:
          "Your quote request has been received. We'll follow up with you shortly.",
      });
      setFormData(initialFormData);
    }, 900);
  };

  return (
    <section
      id="quote"
      className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-28"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center text-white max-w-3xl mx-auto mb-14">
          <p className="text-orange-400 font-semibold tracking-[0.2em] uppercase text-sm mb-4">
            Free, No-Obligation Estimate
          </p>

          <h2 className="text-5xl font-extrabold mb-6">
            Get Your Free Quote
          </h2>

          <p className="text-xl text-blue-100">
            Fill out the form below and we'll provide you with a detailed,
            transparent quote within 24 hours.
          </p>
        </div>

        <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-8" noValidate>
            {formStatus.message && (
              <div
                className={`flex items-center gap-3 rounded-2xl px-5 py-4 ${
                  formStatus.type === "success"
                    ? "bg-green-50 text-green-700"
                    : "bg-red-50 text-red-700"
                }`}
              >
                {formStatus.type === "success" ? (
                  <FiCheckCircle className="shrink-0" />
                ) : (
                  <FiAlertCircle className="shrink-0" />
                )}

                <p className="font-medium">{formStatus.message}</p>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 mb-3 font-medium">
                  <FiUser />
                  Full Name *
                </label>

                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  type="text"
                  placeholder="John Doe"
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label className="flex items-center gap-2 mb-3 font-medium">
                  <FiMail />
                  Email Address *
                </label>

                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="john@example.com"
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label className="flex items-center gap-2 mb-3 font-medium">
                  <FiPhone />
                  Phone Number *
                </label>

                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  type="tel"
                  placeholder="(123) 456-7890"
                  maxLength={14}
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label className="flex items-center gap-2 mb-3 font-medium">
                  {formData.moveType === "Commercial" ? <FiBriefcase /> : <FiHome />}
                  Move Type *
                </label>

                <select
                  name="moveType"
                  value={formData.moveType}
                  onChange={handleChange}
                  className={inputClass}
                  required
                >
                  <option value="" disabled>Select move type</option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                </select>
              </div>

              <div>
                <label className="flex items-center gap-2 mb-3 font-medium">
                  <FiCalendar />
                  Preferred Move Date *
                </label>

                <input
                  name="moveDate"
                  value={formData.moveDate}
                  onChange={handleChange}
                  type="date"
                  min={today}
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label className="flex items-center gap-2 mb-3 font-medium">
                  <FiTruck />
                  Move Distance *
                </label>

                <select
                  name="moveDistance"
                  value={formData.moveDistance}
                  onChange={handleChange}
                  className={inputClass}
                  required
                >
                  <option value="" disabled>Select distance</option>
                  <option value="Local - Under 50 Miles">
                    Local - Under 50 Miles
                  </option>
                  <option value="Regional - 50 to 250 Miles">
                    Regional - 50 to 250 Miles
                  </option>
                  <option value="Long Distance - 250+ Miles">
                    Long Distance - 250+ Miles
                  </option>
                </select>
              </div>

              <div>
                <label className="flex items-center gap-2 mb-3 font-medium">
                  <FiMapPin />
                  Moving From *
                </label>

                <input
                  name="movingFrom"
                  value={formData.movingFrom}
                  onChange={handleChange}
                  type="text"
                  placeholder="City, State or ZIP"
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label className="flex items-center gap-2 mb-3 font-medium">
                  <FiMapPin />
                  Moving To *
                </label>

                <input
                  name="movingTo"
                  value={formData.movingTo}
                  onChange={handleChange}
                  type="text"
                  placeholder="City, State or ZIP"
                  className={inputClass}
                  required
                />
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 mb-3 font-medium">
                {formData.moveType === "Commercial" ? <FiBriefcase /> : <FiHome />}
                Property Size *
              </label>

              {!formData.moveType ? (
                <div className="w-full border border-dashed border-slate-300 rounded-xl px-5 py-4 bg-slate-50 text-slate-400">
                  Please select move type first
                </div>
              ) : (
                <select
                  name="propertySize"
                  value={formData.propertySize}
                  onChange={handleChange}
                  className={inputClass}
                  required
                >
                  <option value="">
                    {formData.moveType === "Commercial"
                      ? "Select business size"
                      : "Select home size"}
                  </option>

                  {propertySizeOptions.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              )}
            </div>

            <div>
              <label className="flex items-center gap-2 mb-4 font-medium">
                <FiPackage />
                Additional Services
              </label>

              <div className="grid md:grid-cols-2 gap-4">
                {serviceOptions.map((service) => (
                  <label
                    key={service}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-4 cursor-pointer transition-all duration-300 hover:border-blue-700 hover:bg-blue-50"
                  >
                    <input
                      type="checkbox"
                      checked={formData.services.includes(service)}
                      onChange={() => handleServiceChange(service)}
                      className="accent-blue-700"
                    />
                    {service}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block mb-3 font-medium">
                Additional Information
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                placeholder="Tell us about any special requirements, large items, or concerns..."
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 disabled:cursor-not-allowed active:scale-95 text-white font-semibold py-5 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
            >
              {isSubmitting ? "Submitting..." : "Get My Free Quote"}
            </button>

            <p className="text-center text-sm text-slate-500">
              By submitting this form, you agree to receive communications from
              Professional Services LLC. We respect your privacy.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTA;