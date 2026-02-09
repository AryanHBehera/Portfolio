export default function Skills() {
    const skills = [
        { name: "React", desc: "Building modern UI with hooks & components" },
        { name: "Angular", desc: "Enterprise-grade frontend applications" },
        { name: "Java", desc: "Strong backend logic & OOP principles" },
        { name: "Spring Boot", desc: "REST APIs & scalable backend systems" },
        { name: "MySQL", desc: "Relational database design & queries" },
        { name: "Tailwind CSS", desc: "Utility-first modern UI styling" },
    ];

    return (
        <section id="skills" className="bg-[#0f172a] py-24 text-white">

            <div className="max-w-6xl mx-auto px-6">

                {/* Title */}
                <h2 className="text-4xl font-bold text-center mb-12">
                    My <span className="text-cyan-400">Skills</span>
                </h2>

                {/* Skills Grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-[#020617] border border-cyan-500/20 rounded-xl p-6
                         hover:border-cyan-400 hover:shadow-cyan-500/20
                         hover:shadow-xl transition duration-300"
                        >
                            <h3 className="text-xl font-semibold mb-2 text-cyan-400">
                                {skill.name}
                            </h3>
                            <p className="text-gray-400 text-sm">
                                {skill.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
