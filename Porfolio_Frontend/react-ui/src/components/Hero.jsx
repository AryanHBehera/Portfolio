import profile from "../assets/profile.png"; // optional image

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center px-10">
            <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto items-center">

                {/* LEFT CONTENT */}
                <div>
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                        Hi, I’m <span className="text-cyan-400">Aryan</span>
                    </h1>

                    <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-cyan-300">
                        Full Stack Developer
                    </h2>

                    <p className="mt-6 text-gray-300 text-lg max-w-xl">
                        I design and develop clean, scalable and modern web applications
                        using React, Spring Boot and MySQL.
                    </p>

                    <div className="mt-8 flex gap-4">
                        <button className="px-6 py-3 bg-cyan-500 text-black font-semibold rounded-md hover:bg-cyan-400 transition">
                            Hire Me
                        </button>

                        <button className="px-6 py-3 border border-cyan-400 rounded-md hover:bg-cyan-400 hover:text-black transition">
                            Let’s Talk
                        </button>
                    </div>

                    {/* Social icons placeholder */}
                    <div className="flex gap-4 mt-8">
                        <span className="w-10 h-10 border border-cyan-400 rounded-full flex items-center justify-center hover:bg-cyan-400 hover:text-black cursor-pointer">in</span>
                        <span className="w-10 h-10 border border-cyan-400 rounded-full flex items-center justify-center hover:bg-cyan-400 hover:text-black cursor-pointer">GH</span>
                        <span className="w-10 h-10 border border-cyan-400 rounded-full flex items-center justify-center hover:bg-cyan-400 hover:text-black cursor-pointer">X</span>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="relative flex justify-center">
                    <div className="absolute inset-0 bg-cyan-400/20 blur-3xl rounded-full"></div>
                    <img
                        src={profile}
                        alt="profile"
                        className="relative z-10 w-72 rounded-lg shadow-lg"
                    />
                </div>

            </div>
        </section>
    );
}
