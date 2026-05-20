import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
    return (
        <section className="text-white mt-2">
            <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-4">
                    Contact
                </h2>
                <div className="w-10 h-1 bg-amber-400 rounded-full mb-6"></div>
            </div>

            <div className="w-full h-80 md:h-[400px] bg-[#222222] border border-[#383838] rounded-2xl overflow-hidden relative mb-10">
                <iframe
                    title="Map of Phnom Penh City, Cambodia"
                    src="https://maps.google.com/maps?q=Phnom%20Penh%20City,%20Cambodia&t=&z=12&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "grayscale(1) invert(100%) contrast(0.9)" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            {/* Form Section */}
            <div className="mb-8">
                <h3 className="text-2xl font-bold mb-6">
                    Stay in touch
                </h3>

                <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="flex flex-col md:flex-row gap-6">
                        <input
                            type="text"
                            name="name"
                            placeholder="Full name"
                            required
                            className="w-full bg-[#1b1b1b] border border-[#383838] rounded-xl px-5 py-4 outline-none focus:border-amber-400 transition-colors duration-300 text-gray-300 placeholder-gray-500 font-medium"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email address"
                            required
                            className="w-full bg-[#1b1b1b] border border-[#383838] rounded-xl px-5 py-4 outline-none focus:border-amber-400 transition-colors duration-300 text-gray-300 placeholder-gray-500 font-medium"
                        />
                    </div>
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="6"
                        required
                        className="w-full bg-[#1b1b1b] border border-[#383838] rounded-xl px-5 py-4 outline-none focus:border-amber-400 transition-colors duration-300 text-gray-300 placeholder-gray-500 resize-none font-medium"
                    ></textarea>

                    <div className="flex justify-end mt-2">
                        <button
                            type="submit"
                            className="flex items-center gap-3 bg-[#242424] border border-[#383838] hover:bg-[#333333] text-amber-500 font-medium px-6 py-4 rounded-xl transition-colors duration-300 group shadow-lg cursor-pointer"
                        >
                            <FontAwesomeIcon icon={faPaperPlane} className="text-amber-500" />
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
