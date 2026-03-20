import React from 'react';
import { motion } from 'framer-motion';
import {
    FileCode2, Calculator, Table, BarChart, PieChart, 
    Brain, Cpu, Database, Layers, LineChart, 
    Monitor, Sigma
} from 'lucide-react';

const skillsData = [
    { name: "Python", icon: <FileCode2 size={40} className="text-yellow-500" /> },
    { name: "NumPy", icon: <Calculator size={40} className="text-blue-500" /> },
    { name: "Pandas", icon: <Table size={40} className="text-purple-500" /> },
    { name: "Matplotlib", icon: <BarChart size={40} className="text-green-500" /> },
    { name: "Seaborn", icon: <PieChart size={40} className="text-teal-500" /> },
    { name: "Machine Learning", icon: <Brain size={40} className="text-pink-500" /> },
    { name: "Scikit-learn", icon: <Cpu size={40} className="text-orange-500" /> },
    { name: "SQL", icon: <Database size={40} className="text-blue-600" /> },
    { name: "Deep Learning", icon: <Layers size={40} className="text-indigo-500" /> },
    { name: "Data Visualization", icon: <LineChart size={40} className="text-red-500" /> },
    { name: "Streamlit", icon: <Monitor size={40} className="text-red-400" /> },
    { name: "Statistics", icon: <Sigma size={40} className="text-gray-600" /> }
];

const Skills = () => {
    // Duplicate the array to create a seamless infinite scrolling effect
    const duplicatedSkills = [...skillsData, ...skillsData];

    return (
        <section id="skills" className="relative py-24 bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0] overflow-hidden border-t border-gray-200">

            {/* Soft background glow to enhance the light glass effect */}
            <div className="absolute inset-0 pointer-events-none z-0 flex justify-center items-center">
                <div className="w-[800px] h-[400px] bg-cyan-200/30 rounded-full blur-[100px] transform -translate-y-1/2"></div>
                <div className="absolute w-[600px] h-[300px] bg-purple-200/30 rounded-full blur-[100px] transform translate-y-1/2 translate-x-1/4"></div>
            </div>

            <div className="relative z-10 w-full flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight drop-shadow-sm">
                        Skills & Technologies
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4 rounded-full"></div>
                </motion.div>

                {/* Infinite Scrolling Marquee Container */}
                <div className="w-full relative flex overflow-hidden group mask-image-fade">
                    <motion.div
                        className="flex gap-8 min-w-max px-4"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                    >
                        {duplicatedSkills.map((skill, index) => (
                            <motion.div
                                key={`${skill.name}-${index}`}
                                whileHover={{
                                    y: -15,
                                    boxShadow: "0 25px 50px -12px rgba(14, 165, 233, 0.25)",
                                    borderColor: "rgba(34, 211, 238, 0.5)"
                                }}
                                className="flex flex-col items-center justify-center w-[160px] h-[160px] rounded-3xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgba(0,0,0,0.04)] cursor-pointer transition-all duration-300"
                            >
                                <div className="p-4 bg-slate-50 rounded-2xl shadow-sm mb-3">
                                    {skill.icon}
                                </div>
                                <span className="font-bold text-slate-700 tracking-wide text-sm">
                                    {skill.name}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <style jsx>{`
                    .mask-image-fade {
                        -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                        mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                    }
                `}</style>

            </div>
        </section>
    );
};

export default Skills;