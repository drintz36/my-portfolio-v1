
import Sidebar from "./components/sidebar/sidebar"
import Navbar from "./components/navbar/navbar"
import About from "./components/about/about"
import Resume from "./components/resume/resume"
import Projects from "./components/projects/projects"
import Contact from "./components/contact/contact"

function App() {
  return (
    <div className="flex h-screen p-6 gap-12 max-w-[1250px] mx-auto items-center">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Right Content */}
      <div className="flex-1 flex flex-col overflow-y-auto h-full hide-scrollbar">
        <Navbar />

        <main className="flex-1 pb-8 bg-[#2b2b2b] border border-[#383838] rounded-3xl p-8 text-white relative">
          <About />
          <div className="my-10 border-t border-[#383838]"></div> {/* Divider between sections */}
          <Resume />
          <div className="my-10 border-t border-[#383838]"></div> {/* Divider between sections */}
          <Projects />
          <div className="my-10 border-t border-[#383838]"></div> {/* Divider between sections */}
          <Contact />
        </main>
      </div>
    </div>
  )
}

export default App
