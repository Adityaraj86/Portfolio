import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-32 relative z-10 px-6 overflow-hidden">

            {/* Background large subtle text */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-5 pointer-events-none select-none overflow-hidden w-full">
                <h2 className="text-[12vw] font-black leading-none whitespace-nowrap text-white text-outline">
                    ABOUT DEVELOPER
                </h2>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">

                {/* Left Side: Large Bold Header */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2"
                >
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter text-white mb-6">
                        Building<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">
                            Data-Driven
                        </span><br />
                        Solutions.
                    </h2>
                </motion.div>

                {/* Right Side: Description */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full md:w-1/2 space-y-6 text-gray-300 text-lg md:text-xl font-light leading-relaxed"
                >
                    <p>
                        Hi, I'm Aditya. I’m a Data Scientist passionate about transforming data into meaningful insights and building intelligent systems. My work focuses on <strong className="text-white">Machine Learning</strong>, <strong className="text-white">Data Analysis</strong>, and <strong className="text-white">Predictive Modeling</strong>.
                    </p>
                    <p>
                        Beyond extracting insights, I enjoy solving real-world problems using data-driven approaches and creating scalable solutions. My interests extend into <strong className="text-white">Deep Learning</strong>, <strong className="text-white">Artificial Intelligence</strong>, and <strong className="text-white">Big Data Technologies</strong>. I believe impactful solutions are not just accurate—they are interpretable, efficient, and reliable.
                    </p>
                    <div className="pt-8">
                        <a href="#projects" className="inline-block border-b-2 border-teal-500 pb-1 text-white font-bold hover:text-teal-400 transition-colors">
                            Discover My Work ↗
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default About;
