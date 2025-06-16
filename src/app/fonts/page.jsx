import Link from "next/link";

export default function FontsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex flex-col items-center justify-center p-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -translate-x-48 -translate-y-48"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl translate-x-48 translate-y-48"></div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                {/* Header Section */}

                {/* Navigation */}

                {/* Font Showcase */}
                <div className="space-y-8">
                    <div className="grid gap-6 max-w-4xl mx-auto">
                        {[
                            {
                                name: "Archivo",
                                class: "font-archivo",
                            },
                            {
                                name: "Archivo Black",
                                class: "font-archivo-black",
                            },
                            {
                                name: "Bebas Neue",
                                class: "font-bebas-neue",
                            },
                            {
                                name: "Bricolage Grotesque",
                                class: "font-bricolage-grotesque",
                            },
                            {
                                name: "Clash Display",
                                class: "font-clash-display",
                            },
                            {
                                name: "Helvetica",
                                class: "font-helvetica",
                            },
                            {
                                name: "Oxanium",
                                class: "font-oxanium",
                            },
                        ].map((font, index) => (
                            <div
                                key={font.name}
                                className="group p-8 bg-gray-800/30 hover:bg-gray-800/50 border border-gray-700/30 hover:border-gray-600/50 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-105"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex flex-col gap-6">
                                    {/* Font Header */}
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div className="flex-1">
                                            <h3
                                                className={`text-5xl md:text-6xl ${font.class} text-white group-hover:text-blue-300 transition-colors duration-300`}
                                            >
                                                {font.name}
                                            </h3>

                                            <p className="text-gray-400 text-lg mt-2">
                                                {font.class}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
