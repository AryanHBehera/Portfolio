export default function Journey() {
    return (
        <section id="journey" className="bg-[#020617] py-24 text-white">

            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-4xl font-bold text-center mb-12">
                    My <span className="text-cyan-400">Journey</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-8">

                    {/* Education */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
                            Education
                        </h3>

                        <div className="space-y-4">
                            <div className="border border-cyan-500/20 rounded-xl p-4">
                                <h4 className="font-semibold">MCA</h4>
                                <p className="text-sm text-gray-400">
                                    Master of Computer Applications
                                </p>
                            </div>

                            <div className="border border-cyan-500/20 rounded-xl p-4">
                                <h4 className="font-semibold">Bachelor’s Degree</h4>
                                <p className="text-sm text-gray-400">
                                    Computer Science Background
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Experience */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
                            Experience
                        </h3>

                        <div className="space-y-4">
                            <div className="border border-cyan-500/20 rounded-xl p-4">
                                <h4 className="font-semibold">Full Stack Intern</h4>
                                <p className="text-sm text-gray-400">
                                    React • Angular • Spring Boot
                                </p>
                            </div>

                            <div className="border border-cyan-500/20 rounded-xl p-4">
                                <h4 className="font-semibold">Personal Projects</h4>
                                <p className="text-sm text-gray-400">
                                    Portfolio, LMS, Skill Tracker
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
