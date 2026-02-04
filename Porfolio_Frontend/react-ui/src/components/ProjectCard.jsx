import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
        >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {project.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mt-2">
                {project.description}
            </p>

            <span className="inline-block mt-3 text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full">
                {project.tech}
            </span>

            <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="block mt-4 text-blue-600 hover:underline"
            >
                View on GitHub →
            </a>
        </motion.div>
    );
};

export default ProjectCard;
