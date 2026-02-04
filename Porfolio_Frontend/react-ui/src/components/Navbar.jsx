import { useEffect, useState } from "react";

const Navbar = () => {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark);
    }, [dark]);

    return (
        <nav className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-800 shadow">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                My Portfolio
            </h1>

            <button
                onClick={() => setDark(!dark)}
                className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
            >
                {dark ? "☀ Light" : "🌙 Dark"}
            </button>
        </nav>
    );
};

export default Navbar;
