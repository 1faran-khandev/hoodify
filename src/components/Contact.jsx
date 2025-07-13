import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-black text-white"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 uppercase tracking-wider">
          Contact Us
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {/*  Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="text-blue-400" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p>support@hoodify.store</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-blue-400" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p>+92 300 1234567</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="text-blue-400" />
              <div>
                <h4 className="font-semibold">Location</h4>
                <p>Karachi, Pakistan</p>
              </div>
            </div>
          </div>
          {/*  Contact Form */}
          <div className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-600 text-white placeholder-gray-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-600 text-white placeholder-gray-400"
              required
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-600 text-white placeholder-gray-400"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-white text-black px-6 py-3 rounded hover:bg-gray-200 transition font-semibold"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}