export default function About() {
    return (
        <section id="about" className="bg-[#020617] py-24 text-white">

            <div className="max-w-4xl mx-auto px-6 text-center">

                <h2 className="text-4xl font-bold mb-10">
                    About <span className="text-cyan-400">Me</span>
                </h2>

                <div className="bg-[#020617] border border-cyan-500/20 rounded-2xl p-8 shadow-lg shadow-cyan-500/10">
                    <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
                        Full Stack Developer
                    </h3>

                    <p className="text-gray-400 leading-relaxed">
                        I’m a Full Stack Developer currently pursuing MCA.
                        I enjoy building clean, scalable, and real-world web applications
                        using modern frontend frameworks and robust backend systems.
                        <br /><br />
                        My focus is on writing maintainable code, creating professional UI,
                        and continuously improving my problem-solving skills.
                    </p>
                </div>
            </div>
        </section>
    );
}
