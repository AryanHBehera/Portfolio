const projects = [
    {
        title: "Portfolio Website",
        desc: "Personal portfolio built using React & Tailwind CSS.",
        tech: "React, Tailwind"
    },
    {
        title: "LMS System",
        desc: "Learning Management System frontend UI.",
        tech: "React"
    }
];

export default function Projects() {
    return (
        <section className="py-24 bg-[#0b2239] px-6">
            <div className="max-w-6xl mx-auto">

                <h2 className="text-3xl font-bold text-center mb-12">
                    My <span className="text-cyan-400">Projects</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((p, i) => (
                        <div key={i} className="border border-cyan-500/20 rounded-xl p-6 hover:scale-105 transition">
                            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                            <p className="text-gray-400 mb-4">{p.desc}</p>
                            <span className="text-sm text-cyan-400">{p.tech}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
