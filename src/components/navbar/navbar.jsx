export default function Navbar() {
    return (
        <nav className="flex justify-center mb-4 sticky top-0 z-10 bg-[#242424] py-4">
            <ul className="flex gap-1 bg-[#2b2b2b] border border-[#383838] rounded-xl px-2 py-2">
                <li><button className="px-5 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-amber-400 cursor-pointer outline-none">About</button></li>
                <li><button className="px-5 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-amber-400 cursor-pointer outline-none">Resume</button></li>
                <li><button className="px-5 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-amber-400 cursor-pointer outline-none">Projects</button></li>
                <li><button className="px-5 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-amber-400 cursor-pointer outline-none">Contact</button></li>
            </ul>
        </nav>
    );
}
