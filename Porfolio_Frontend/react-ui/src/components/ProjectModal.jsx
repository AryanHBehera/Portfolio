import { motion } from 'framer-motion';

export default function ProjectModal({ project, onClose }) {
    if (!project) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 w-[90%] max-w-lg relative"
            >
                <button
                    onClick={onClose}
                    className="absolute top-3 right-4 text-xl"
                >
                    ✖
                </button>

                <h2 className="text-2xl font-bold mb-2">
                    {project.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                </p>

                <span className="text-sm bg-blue-100 dark:bg-blue-800 px-3 py-1 rounded">
                    {project.tech}
                </span>
            </motion.div>
        </div>
    );
}
