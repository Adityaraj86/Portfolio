import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Building2 } from 'lucide-react';

const Education = () => {
    const educationData = [
        {
            id: 1,
            year: "2023 - Present",
            degree: "B.Tech — Computer Science & Engineering",
            institution: "Lovely Professional University",
            description: "CGPA: 8.85/10.0",
        },
        {
            id: 2,
            year: "2021 - 2022",
            degree: "Intermediate",
            institution: "S.N. Sinha College, Jehanabad",
            description: "Percentage: 86.2%",
        },
        {
            id: 3,
            year: "2019 - 2020",
            degree: "Matriculate",
            institution: "P.P.M School, Jehanabad",
            description: "Percentage: 88%",
        }
    ];

    return (
        <section id="education" className="relative min-h-[800px] py-32 px-6 lg:px-16 flex items-center justify-center overflow-hidden bg-[#030303] border-t border-white/5">

            {/* Minimal Background Glows */}
            <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] bg-teal-900/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-show font-black text-white mb-6 uppercase tracking-tight drop-shadow-2xl">
                        Education <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500">Timeline</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-teal-400 to-indigo-500 mx-auto mt-4 rounded-full shadow-[0_0_20px_rgba(45,212,191,0.5)]"></div>
                </motion.div>

                {/* Timeline Layout */}
                <div className="relative w-full max-w-3xl mx-auto border-l-2 border-white/10 pl-8 md:pl-12 space-y-16">
                    {educationData.map((edu, index) => (
                        <div key={edu.id} className="relative group">
                            {/* Animated Timeline Node */}
                            <div className="absolute -left-[41px] md:-left-[57px] top-6 w-4 h-4 rounded-full bg-teal-400 shadow-[0_0_15px_rgba(45,212,191,0.5)] border-4 border-[#030303] group-hover:bg-indigo-400 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.8)] group-hover:scale-150 transition-all duration-500 z-20"></div>

                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="relative flex flex-col gap-6 w-full bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl cursor-default hover:-translate-y-2 hover:border-teal-400/50 hover:shadow-[0_15px_40px_rgba(45,212,191,0.1)] transition-all duration-500 z-10"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight group-hover:text-teal-300 transition-colors">
                                            {edu.degree}
                                        </h3>
                                        <div className="flex items-center gap-2 text-indigo-400 font-semibold tracking-wide">
                                            <Building2 size={18} />
                                            <span>{edu.institution}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 w-fit shrink-0">
                                        <Calendar size={16} className="text-gray-400" />
                                        <span className="text-gray-300 font-mono text-sm tracking-widest font-bold">
                                            {edu.year}
                                        </span>
                                    </div>
                                </div>

                                <p className="text-gray-400 leading-relaxed font-medium flex items-center gap-2">
                                    <GraduationCap size={20} className="text-teal-400" />
                                    {edu.description}
                                </p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
