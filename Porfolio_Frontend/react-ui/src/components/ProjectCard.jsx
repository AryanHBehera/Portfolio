export default function ProjectCard({ project }) {
    return (
        <div
            className="bg-[#020617] border border-cyan-500/20 rounded-xl overflow-hidden
                 hover:shadow-xl hover:shadow-cyan-500/20 transition duration-300"
        >
            {/* Image */}
            <div className="h-40 bg-gray-800 flex items-center justify-center text-gray-400">
                Project Image
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                    {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                        <span
                            key={i}
                            className="text-xs px-2 py-1 bg-cyan-500/10 text-cyan-300 rounded"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Actions */}
                <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block text-sm text-cyan-400 hover:underline"
                >
                    View Code →
                </a>
            </div>
        </div>
    );
}
