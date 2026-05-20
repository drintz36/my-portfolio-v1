export default function About() {
    return (
        <section className="text-white mt-2">
            <div className="mb-6">
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-4">
                    About Me
                </h2>
                <div className="w-10 h-1 bg-amber-400 rounded-full mb-6"></div>
            </div>

            <div className="text-gray-300 leading-relaxed space-y-4 text-[15px]">
                <p>
                    I am an aspiring developer with a strong focus on frontend development and a deep interest in becoming a full-stack developer. Right now, I am focusing my energy on building clean, user-friendly interfaces while actively learning Node.js to expand my knowledge into backend development. I genuinely love coding and the challenge of making things look simple and work efficiently.
                </p>
                <p>
                    Even though I am still at the beginning of my journey, I treat my work with care. I make it a habit to write thorough, detailed documentation for every project I build so that my code remains clear, organized, and easy for anyone to follow. I also value collaboration and have practical experience working within a team, where I've learned how to listen, share ideas, and work together toward a common goal. I’ve even had the opportunity to share my knowledge by helping teach other adults how to build websites, which taught me how to communicate technical ideas clearly.
                </p>
            </div>

            {/* What I'm Doing Section */}
            <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">What I'm Doing</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Web Design Card */}
                    <div className="bg-[#222222] border border-[#383838] rounded-xl p-6 flex gap-6 shadow-sm">
                        <div className="text-amber-400 text-4xl shrink-0 mt-1">
                            {/* Simple svg icon matching Web Design */}
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
                                <path d="M8 11h8" />
                                <path d="M8 7h6" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-2">Frontend Development</h4>
                            <p className="text-gray-400 text-[15px] leading-relaxed">
                                ocusing on building clean, simple, and user-friendly interfaces. I care deeply about the layout and user experience (UX) to ensure the design is easy for everyone to navigate.
                            </p>
                        </div>
                    </div>

                    {/* Web Development Card */}
                    <div className="bg-[#222222] border border-[#383838] rounded-xl p-6 flex gap-6 shadow-sm">
                        <div className="text-amber-400 text-4xl shrink-0 mt-1">
                            {/* Simple svg icon matching Development */}
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="16 18 22 12 16 6" />
                                <polyline points="8 6 2 12 8 18" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-2">Web Design</h4>
                            <p className="text-gray-400 text-[15px] leading-relaxed">
                                Turning ideas into clean, user-friendly interfaces. modern web layouts before writing code. creating clean prototypes to organize my visual ideas and keep the user interface clear.
                            </p>
                        </div>
                    </div>

                    {/* Mobile Apps Card */}
                    <div className="bg-[#222222] border border-[#383838] rounded-xl p-6 flex gap-6 shadow-sm">
                        <div className="text-amber-400 text-4xl shrink-0 mt-1">
                            {/* Simple svg icon matching Mobile Apps */}
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                                <line x1="12" y1="18" x2="12.01" y2="18" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-2">Web Development</h4>
                            <p className="text-gray-400 text-[15px] leading-relaxed">
                                Writing organized, maintainable code to bring designs to life. I focus on making websites fully functional, scalable, and building them with solid foundations. keeping things scalable, and writing detailed project documentation so everything is easy to follow.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 
