import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 py-10">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
                My Projects 🚀
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default ProjectList;
