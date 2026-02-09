export default function Contact() {
    return (
        <section className="py-24 px-6">
            <div className="max-w-3xl mx-auto text-center">

                <h2 className="text-3xl font-bold mb-8">
                    Contact <span className="text-cyan-400">Me</span>
                </h2>

                <form className="grid gap-4">
                    <input className="bg-[#0b2239] p-3 rounded" placeholder="Name" />
                    <input className="bg-[#0b2239] p-3 rounded" placeholder="Email" />
                    <textarea className="bg-[#0b2239] p-3 rounded" placeholder="Message" rows="4"></textarea>
                    <button className="bg-cyan-500 text-black py-3 rounded font-semibold">
                        Send Message
                    </button>
                </form>

            </div>
        </section>
    );
}
