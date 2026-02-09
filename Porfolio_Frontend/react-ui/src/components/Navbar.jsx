export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#020617]/80 backdrop-blur border-b border-cyan-500/10">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                <h1 className="text-xl font-bold text-cyan-400">
                    Aryan<span className="text-white">.</span>
                </h1>

                <div className="hidden md:flex gap-6 text-sm text-gray-300">
                    <a href="#about" className="hover:text-cyan-400">About</a>
                    <a href="#skills" className="hover:text-cyan-400">Skills</a>
                    <a href="#journey" className="hover:text-cyan-400">Journey</a>
                    <a href="#projects" className="hover:text-cyan-400">Projects</a>
                </div>

            </div>
        </nav>
    );
}
