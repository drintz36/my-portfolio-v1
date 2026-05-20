import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSpinner, faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ submitting: false, success: null, error: null });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ submitting: true, success: null, error: null });

    //TELEGRAM CONFIGURATION

        const BOT_TOKEN = "8756708336:AAFztrbF4GqlRRfOfFXk7YbNqSqqyHWKyH8";
        const CHAT_ID = "55363163";

        const textMessage = `📬 *New Message from Portfolio!*\n\n*👤 Name:* ${formData.name}\n*📧 Email:* ${formData.email}\n\n*💬 Message:*\n${formData.message}`;

        try {
            const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: textMessage,
                    parse_mode: 'Markdown'
                })
            });

            if (response.ok) {
                setStatus({ submitting: false, success: true, error: null });
                setFormData({ name: '', email: '', message: '' }); // Reset form inputs
            } else {
                throw new Error("Failed to send message via Telegram API");
            }
        } catch (error) {
            setStatus({
                submitting: false,
                success: false,
                error: "Failed to send message. Please try again later or contact directly."
            });
        }
    };

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

                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    <div className="flex flex-col md:flex-row gap-6">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Full name"
                            required
                            disabled={status.submitting}
                            className="w-full bg-[#1b1b1b] border border-[#383838] rounded-xl px-5 py-4 outline-none focus:border-amber-400 transition-colors duration-300 text-gray-300 placeholder-gray-500 font-medium disabled:opacity-50"
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email address"
                            required
                            disabled={status.submitting}
                            className="w-full bg-[#1b1b1b] border border-[#383838] rounded-xl px-5 py-4 outline-none focus:border-amber-400 transition-colors duration-300 text-gray-300 placeholder-gray-500 font-medium disabled:opacity-50"
                        />
                    </div>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        rows="6"
                        required
                        disabled={status.submitting}
                        className="w-full bg-[#1b1b1b] border border-[#383838] rounded-xl px-5 py-4 outline-none focus:border-amber-400 transition-colors duration-300 text-gray-300 placeholder-gray-500 resize-none font-medium disabled:opacity-50"
                    ></textarea>

                    {/* Status Feedback Banners */}
                    {status.success && (
                        <div className="flex items-center gap-3 bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 p-4 rounded-xl text-[14px]">
                            <FontAwesomeIcon icon={faCheckCircle} />
                            <span>Thank you! Your message has been sent successfully to my Telegram.</span>
                        </div>
                    )}

                    {status.error && (
                        <div className="flex items-center gap-3 bg-rose-950/50 border border-rose-500/30 text-rose-400 p-4 rounded-xl text-[14px]">
                            <FontAwesomeIcon icon={faExclamationCircle} />
                            <span>{status.error}</span>
                        </div>
                    )}

                    <div className="flex justify-end mt-2">
                        <button
                            type="submit"
                            disabled={status.submitting}
                            className="flex items-center gap-3 bg-[#242424] border border-[#383838] hover:bg-[#333333] text-amber-500 font-medium px-6 py-4 rounded-xl transition-colors duration-300 group shadow-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status.submitting ? (
                                <>
                                    <FontAwesomeIcon icon={faSpinner} spin />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <FontAwesomeIcon icon={faPaperPlane} className="text-amber-500" />
                                    Send Message
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
