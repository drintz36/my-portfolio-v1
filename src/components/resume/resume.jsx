export default function Resume() {
    return (
        <section className="text-white mt-2">
            <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-4">
                    Resume
                </h2>
                <div className="w-10 h-1 bg-amber-400 rounded-full mb-6"></div>
            </div>

            {/* Education Section */}
            <div className="mb-10">
                <div className="flex items-center gap-4 mb-8">
                    <div className="bg-[#222222] border border-[#383838] w-12 h-12 flex items-center justify-center rounded-xl z-0 text-amber-400 shadow-md relative">
                        {/* Book Icon */}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Education</h3>
                </div>

                {/* Timeline */}
                <div className="relative border-l border-[#383838] ml-6 pb-4">

                    {/* Item 1 */}
                    <div className="relative pl-10 mb-8 mt-[-10px]">
                        <div className="absolute -left-[6px] top-2 w-[11px] h-[11px] bg-amber-400 rounded-full ring-4 ring-[#2b2b2b]"></div>
                        <h4 className="text-lg font-bold text-white mb-2 leading-tight">University School Of The Arts</h4>
                        <span className="text-amber-400 text-[15px] font-medium block mb-4">2007 — 2008</span>
                        <p className="text-gray-400 text-[15px] leading-relaxed">
                            Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.
                        </p>
                    </div>

                    {/* Item 2 */}
                    <div className="relative pl-10 mb-8 mt-4">
                        <div className="absolute -left-[6px] top-2 w-[11px] h-[11px] bg-amber-400 rounded-full ring-4 ring-[#2b2b2b]"></div>
                        <h4 className="text-lg font-bold text-white mb-2 leading-tight">New York Academy Of Art</h4>
                        <span className="text-amber-400 text-[15px] font-medium block mb-4">2006 — 2007</span>
                        <p className="text-gray-400 text-[15px] leading-relaxed">
                            Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis..
                        </p>
                    </div>

                    {/* Item 3 */}
                    <div className="relative pl-10 mt-4">
                        <div className="absolute -left-[6px] top-2 w-[11px] h-[11px] bg-amber-400 rounded-full ring-4 ring-[#2b2b2b]"></div>
                        <h4 className="text-lg font-bold text-white mb-2 leading-tight">High School Of Art And Design</h4>
                        <span className="text-amber-400 text-[15px] font-medium block mb-4">2002 — 2004</span>
                        <p className="text-gray-400 text-[15px] leading-relaxed">
                            Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos.
                        </p>
                    </div>

                </div>
            </div>

            {/* Tech Stacks Section */}
            <div className="mt-12">
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-[#222222] border border-[#383838] w-12 h-12 flex items-center justify-center rounded-xl z-0 text-amber-400 shadow-md relative">
                        {/* Rocket Icon */}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Tech Stacks</h3>
                </div>

                {/* Container with thin border */}
                <div className="border border-[#383838] rounded-2xl p-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center">

                        {/* HTML5 */}
                        <div className="bg-[#222222] border border-[#383838] rounded-xl flex items-center justify-center w-[120px] h-[80px] hover:bg-[#2b2b2b] transition-colors shadow-sm">
                            <svg viewBox="0 0 384 512" width="45" height="45" style={{ color: '#E34F26' }} fill="currentColor">
                                <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
                            </svg>
                        </div>

                        {/* CSS3 */}
                        <div className="bg-[#222222] border border-[#383838] rounded-xl flex items-center justify-center w-[120px] h-[80px] hover:bg-[#2b2b2b] transition-colors shadow-sm">
                            <svg viewBox="0 0 384 512" width="45" height="45" style={{ color: '#1572B6' }} fill="currentColor">
                                <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
                            </svg>
                        </div>

                        {/* JS */}
                        <div className="bg-[#222222] border border-[#383838] rounded-xl flex items-center justify-center w-[120px] h-[80px] hover:bg-[#2b2b2b] transition-colors shadow-sm">
                            <svg viewBox="0 0 448 512" width="45" height="45" style={{ color: '#F7DF1E' }} fill="currentColor">
                                <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" />
                            </svg>
                        </div>

                        {/* Tailwind CSS */}
                        <div className="bg-[#222222] border border-[#383838] rounded-xl flex items-center justify-center w-[120px] h-[80px] hover:bg-[#2b2b2b] transition-colors shadow-sm">
                            <svg viewBox="0 0 24 24" width="45" height="45" style={{ color: '#38bdf8' }} fill="currentColor">
                                <path transform="scale(1.2) translate(-2, -2)" d="M9 7.5C7.2 7.5 5.85 8.4 5.25 10.5C6.15 9.15 7.35 8.7 9 9C9.75 9.15 10.275 9.75 10.875 10.425C11.85 11.55 13.05 12.9 16.5 12.9C18.3 12.9 19.65 12 20.25 9.9C19.35 11.25 18.15 11.7 16.5 11.4C15.75 11.25 15.225 10.65 14.625 9.975C13.65 8.85 12.45 7.5 9 7.5ZM5.25 12.9C3.45 12.9 2.1 13.8 1.5 15.9C2.4 14.55 3.6 14.1 5.25 14.4C6 14.55 6.525 15.15 7.125 15.825C8.1 16.95 9.3 18.3 12.75 18.3C14.55 18.3 15.9 17.4 16.5 15.3C15.6 16.65 14.4 17.1 12.75 16.8C12 16.65 11.475 16.05 10.875 15.375C9.9 14.25 8.7 12.9 5.25 12.9Z" />
                            </svg>
                        </div>

                        {/* Git */}
                        <div className="bg-[#222222] border border-[#383838] rounded-xl flex items-center justify-center w-[120px] h-[80px] hover:bg-[#2b2b2b] transition-colors shadow-sm">
                            <svg viewBox="0 0 384 512" width="45" height="45" style={{ color: '#F1502F' }} fill="currentColor">
                                <path d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8-.6 16.1-4.2 28.5-11 36.9-15.4 19.2-49.3 22.4-85.2 25.7-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6 3.1-5.2 7.8-9.8 14.9-13.4 16.2-8.2 40.4-10.4 66.1-12.8 42.2-3.9 90-8.4 118.2-43.4 14-17.4 21.1-39.8 21.6-67.9 31.6-10.8 54.4-41.2 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16z" />
                            </svg>
                        </div>

                        {/* GitHub */}
                        <div className="bg-[#222222] border border-[#383838] rounded-xl flex items-center justify-center w-[120px] h-[80px] hover:bg-[#2b2b2b] transition-colors shadow-sm">
                            <svg viewBox="0 0 496 512" width="45" height="45" style={{ color: '#ffffff' }} fill="currentColor">
                                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                            </svg>
                        </div>

                        {/* React */}
                        <div className="bg-[#222222] border border-[#383838] rounded-xl flex items-center justify-center w-[120px] h-[80px] hover:bg-[#2b2b2b] transition-colors shadow-sm">
                            <svg viewBox="-11.5 -10.23174 23 20.46348" width="55" height="55" style={{ color: '#61dafb' }} fill="currentColor">
                                <circle cx="0" cy="0" r="2.05" />
                                <g stroke="currentColor" strokeWidth="1" fill="none">
                                    <ellipse rx="11" ry="4.2" />
                                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                                </g>
                            </svg>
                        </div>

                    </div>
                </div>
            </div>
            {/* My Skills Section */}
            <div className="mt-12">
                <div className="flex items-center gap-4 mb-6">
                    <div className="bg-[#222222] border border-[#383838] w-12 h-12 flex items-center justify-center rounded-xl z-0 text-amber-400 shadow-md relative">
                        {/* Strength / Dumbbell Icon */}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14.4 14.4 9.6 9.6"></path>
                            <path d="M18.65 21.35a2 2 0 0 1-2.83 0l-5.66-5.66a2 2 0 0 1 0-2.83l.06-.06a2 2 0 0 1 2.83 0l5.66 5.66a2 2 0 0 1 0 2.83l-.06.06z"></path>
                            <path d="m2 2 2.83 2.83"></path>
                            <path d="m22 2-2.83 2.83"></path>
                            <path d="M9.6 9.6 5.35 5.35a2 2 0 0 1 0-2.83l.06-.06a2 2 0 0 1 2.83 0l5.66 5.66a2 2 0 0 1 0 2.83l-.06.06a2 2 0 0 1-2.83 0l-1.42-1.42z"></path>
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">My Skills</h3>
                </div>
                {/* Box Percentage */}
                <div className="bg-[#222222] border border-[#383838] rounded-2xl p-8">

                    {/* HTML */}
                    <div className="mb-7">
                        <h4 className="text-white text-[15px] font-medium mb-3">
                            HTML <span className="text-gray-400 ml-2 font-normal">80%</span>
                        </h4>
                        <div className="w-full bg-[#383838] rounded-full h-[6px]">
                            <div className="bg-amber-400 h-[6px] rounded-full" style={{ width: '80%' }}></div>
                        </div>
                    </div>

                    {/* CSS */}
                    <div className="mb-7">
                        <h4 className="text-white text-[15px] font-medium mb-3">
                            CSS <span className="text-gray-400 ml-2 font-normal">75%</span>
                        </h4>
                        <div className="w-full bg-[#383838] rounded-full h-[6px]">
                            <div className="bg-amber-400 h-[6px] rounded-full" style={{ width: '75%' }}></div>
                        </div>
                    </div>

                    {/* Javascript */}
                    <div className="mb-7">
                        <h4 className="text-white text-[15px] font-medium mb-3">
                            Javascript <span className="text-gray-400 ml-2 font-normal">45%</span>
                        </h4>
                        <div className="w-full bg-[#383838] rounded-full h-[6px]">
                            <div className="bg-amber-400 h-[6px] rounded-full" style={{ width: '45%' }}></div>
                        </div>
                    </div>

                    {/* React js */}
                    <div>
                        <h4 className="text-white text-[15px] font-medium mb-3">
                            React js <span className="text-gray-400 ml-2 font-normal">30%</span>
                        </h4>
                        <div className="w-full bg-[#383838] rounded-full h-[6px]">
                            <div className="bg-amber-400 h-[6px] rounded-full" style={{ width: '30%' }}></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
