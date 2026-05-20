export default function Projects() {
    const projects = [
        { id: 1, title: 'p1', category: 'Web design', link: '#' },
        { id: 2, title: 'p2', category: 'Web design', link: '#' },
        { id: 3, title: 'p3', category: 'Web design', link: '#' },
        { id: 4, title: 'p4', category: 'Web design', link: '#' },
        { id: 5, title: 'p5', category: 'Web design', link: '#' },
    ];

    return (
        <section className="text-white mt-2">
            <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-4">
                    Projects
                </h2>
                <div className="w-10 h-1 bg-amber-400 rounded-full mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="flex flex-col gap-4 group cursor-pointer">
                        <div className="w-full aspect-4/3 bg-[#222222] border border-[#383838] rounded-2xl overflow-hidden relative transition-colors duration-300 group-hover:border-[#4d4d4d]">
                            {/* Image Placeholder */}

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-[#2b2b2b]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 backdrop-blur-[2px]">
                                <span className="bg-[#242424] text-amber-400 px-5 py-2 rounded-lg text-sm font-medium border border-[#383838] flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                                    Live Demo
                                    
                                </span>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors duration-300">{project.title}</h3>
                            <p className="text-gray-400 text-sm">{project.category}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
