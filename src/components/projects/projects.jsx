import weatherImg from "../../assets/weather.png";
import todoImg from "../../assets/todo.png";
import nikeImg from "../../assets/nike.png";
import dreamworkImg from "../../assets/dreamwork.png";
import defixsImg from "../../assets/defixs.png";

export default function Projects() {
    const projects = [
        { 
            id: 1, 
            title: 'Weather App', 
            category: 'A modern and responsive web app that fetches and displays real-time weather details for any city in the world.', 
            link: 'https://drintz36.github.io/Weather-APP/',
            image: weatherImg 
        },
        { 
            id: 2, 
            title: 'Todo List', 
            category: 'A responsive todo list application that allows users to add, delete, and mark tasks as complete.', 
            link: 'https://drintz36.github.io/Todo-APP/',
            image: todoImg
        },
        { 
            id: 3, 
            title: 'Nike Clone (Frontend)', 
            category: 'A school (frontend) individual project using HTML and TailwindCSS.', 
            link: 'https://drintz36.github.io/Individual-Nike-Clone/',
            image: nikeImg
        },
        { 
            id: 4, 
            title: 'Dreamwork Website Clone (Team)', 
            category: 'A school (frontend) group project cloning the dreamwork website and collaboration in git.', 
            link: 'https://generont-team.github.io/generont-dreamwork/',
            image: dreamworkImg
        },
        { 
            id: 5, 
            title: 'DeFixs AI code debugging tool', 
            category: 'Hackathon: (Vibe Coding) Building a tool helping fresh or junior developers to debug their code efficiently.', 
            link: 'https://defixs.onrender.com/',
            image: defixsImg
        },
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
                    <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="flex flex-col gap-4 group cursor-pointer animate-fade-in">
                        <div className="w-full aspect-[4/3] bg-[#222222] border border-[#383838] rounded-2xl overflow-hidden relative transition-colors duration-300 group-hover:border-[#4d4d4d]">
                            {/* Project Image */}
                            {project.image ? (
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-all duration-500 group-hover:blur-[4px] group-hover:scale-105"
                                />
                            ) : (
                                <div className="w-full h-full bg-[#1e1e1e] flex items-center justify-center text-gray-500 text-sm font-medium transition-all duration-500 group-hover:blur-[2px] group-hover:scale-105">
                                    <span>No Image Selected</span>
                                </div>
                            )}

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-[#2b2b2b]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 backdrop-blur-[2px]">
                                <span className="bg-[#242424] text-amber-400 px-5 py-2 rounded-lg text-sm font-medium border border-[#383838] flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                                    Live Demo
                                </span>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors duration-300">{project.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{project.category}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
