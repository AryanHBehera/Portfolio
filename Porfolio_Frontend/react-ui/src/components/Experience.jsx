import experience from '../data/experience';
import { motion } from 'framer-motion';

export default function Experience() {
    return (
        <section className="py-20 bg-gray-100 dark:bg-gray-800">
            <h2 className="text-3xl font-bold text-center mb-10">
                Experience 💼
            </h2>

            <div className="max-w-4xl mx-auto px-6 space-y-6">
                {experience.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow"
                    >
                        <h3 className="font-semibold text-xl">
                            {item.role}
                        </h3>
                        <p className="text-sm text-gray-500">
                            {item.company} • {item.year}
                        </p>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                            {item.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
