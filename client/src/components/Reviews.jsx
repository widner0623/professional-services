import { FiStar } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

const reviews = [
  {
    name: "Sarah Johnson",
    location: "Seattle, WA",
    time: "2 weeks ago",
    review:
      "Absolutely incredible service! The team was professional, efficient, and treated our belongings like their own. They made what's usually a stressful experience completely smooth. Highly recommend!",
  },
  {
    name: "Michael Chen",
    location: "Portland, OR",
    time: "1 month ago",
    review:
      "We've moved three times with Professional Services LLC and they never disappoint. The crew is always on time, careful with our furniture, and incredibly friendly. You won't find better movers.",
  },
  {
    name: "Emily Rodriguez",
    location: "San Francisco, CA",
    time: "3 weeks ago",
    review:
      "From the initial quote to the final box being placed, everything was perfect. The coordinator kept me informed every step of the way. Worth every penny for the peace of mind!",
  },
  {
    name: "David Thompson",
    location: "Los Angeles, CA",
    time: "2 months ago",
    review:
      "I was nervous about moving my piano and antique furniture, but their specialty team handled everything with expert care. Not a single scratch! Professional doesn't even begin to describe them.",
  },
  {
    name: "Jessica Martinez",
    location: "Denver, CO",
    time: "1 month ago",
    review:
      "Cross-country move made easy! They packed our entire 3-bedroom house, loaded everything carefully, and delivered on schedule. The unpacking service was a game-changer.",
  },
  {
    name: "Robert Kim",
    location: "Austin, TX",
    time: "3 weeks ago",
    review:
      "Our office relocation was seamless thanks to this team. They worked after hours to minimize disruption and had us up and running the next day. Highly professional business movers!",
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="bg-slate-50 py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-orange-500 font-semibold tracking-[0.2em] text-sm uppercase mb-4">
            Customer Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            What Our Customers Say
          </h2>

          <p className="text-lg text-slate-500">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about their moving experience.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-16">
          <div className="text-center transition-all duration-300 hover:-translate-y-1">
            <div className="flex justify-center gap-1 text-orange-500 mb-2">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className="fill-current" />
              ))}
            </div>

            <h3 className="text-4xl font-extrabold text-slate-900">
              4.9/5.0
            </h3>

            <p className="text-slate-500">Average Rating</p>
          </div>

          <div className="hidden md:block w-px h-16 bg-slate-300"></div>

          <div className="text-center transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-4xl font-extrabold text-slate-900">
              10,000+
            </h3>

            <p className="text-slate-500">Happy Customers</p>
          </div>

          <div className="hidden md:block w-px h-16 bg-slate-300"></div>

          <div className="text-center transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-4xl font-extrabold text-slate-900">
              98%
            </h3>

            <p className="text-slate-500">Satisfaction Rate</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group bg-white rounded-[28px] p-8 shadow-lg relative transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex gap-1 text-orange-500 mb-6">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className="fill-current transition-transform duration-300 group-hover:scale-110"
                  />
                ))}
              </div>

              <FaQuoteRight className="absolute top-8 right-8 text-5xl text-slate-100 transition-all duration-300 group-hover:text-blue-100 group-hover:scale-110" />

              <p className="text-slate-700 leading-relaxed mb-8 relative z-10">
                "{review.review}"
              </p>

              <div className="border-t border-slate-100 pt-6">
                <h4 className="font-bold text-lg text-slate-900 transition-colors duration-300 group-hover:text-blue-800">
                  {review.name}
                </h4>

                <p className="text-slate-500 text-sm">
                  {review.location}
                </p>

                <p className="text-slate-400 text-sm mt-2">
                  {review.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;