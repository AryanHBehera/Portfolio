export default function Footer() {
    return (
        <footer className="bg-[#020617] border-t border-cyan-500/10 py-6 text-center">
            <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Aryan • Built with React & Tailwind
            </p>
        </footer>
    );
}
