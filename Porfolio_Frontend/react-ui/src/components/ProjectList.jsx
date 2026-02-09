import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {
    return (
        <section id="projects" className="bg-[#020617] py-24 text-white">

            <div className="max-w-6xl mx-auto px-6">

                {/* Title */}
                <h2 className="text-4xl font-bold text-center mb-12">
                    My <span className="text-cyan-400">Projects</span>
                </h2>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
