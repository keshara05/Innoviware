import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Brain, Palette, Layers, Globe, Cpu, Cloud, Database } from 'lucide-react';
import SpotlightCard from '../components/ui/SpotlightCard';
import ScrollReveal from '../components/ui/ScrollReveal';

const services = [
    {
        icon: Code,
        title: "Custom Software",
        description: "Tailor-made software solutions designed to streamline your business operations and drive growth. We build scalable architectures that grow with you.",
        color: "text-brand-neon",
        spotlight: "rgba(59, 130, 246, 0.4)",
        className: "md:col-span-2"
    },
    {
        icon: Smartphone,
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications that provide seamless user experiences.",
        color: "text-color-neon-purple",
        spotlight: "rgba(124, 58, 237, 0.4)",
        className: "md:col-span-1"
    },
    {
        icon: Brain,
        title: "AI & Machine Learning",
        description: "Intelligent systems that automate processes and provide data-driven insights.",
        color: "text-color-acid-lime",
        spotlight: "rgba(132, 204, 22, 0.4)",
        className: "md:col-span-1"
    },
    {
        icon: Palette,
        title: "UI/UX Design",
        description: "User-centric designs that are both visually stunning and intuitively functional.",
        color: "text-color-hot-pink",
        spotlight: "rgba(244, 114, 182, 0.4)",
        className: "md:col-span-2"
    },
    {
        icon: Globe,
        title: "Web Development",
        description: "Modern, responsive websites built with the latest technologies for maximum performance.",
        color: "text-color-bright-cyan",
        spotlight: "rgba(6, 182, 212, 0.4)",
        className: "md:col-span-1"
    },
    {
        icon: Cloud,
        title: "Cloud Solutions",
        description: "Scalable cloud infrastructure and migration services for modern businesses.",
        color: "text-orange-400",
        spotlight: "rgba(249, 115, 22, 0.4)",
        className: "md:col-span-1"
    },
    {
        icon: Database,
        title: "Data Engineering",
        description: "Robust data pipelines and storage solutions.",
        color: "text-teal-400",
        spotlight: "rgba(45, 212, 191, 0.4)",
        className: "md:col-span-1"
    }
];

const Services = () => {
    return (
        <section id="services" className="py-32 relative overflow-hidden bg-brand-900">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[120px] pointer-events-none -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-neon/5 rounded-full blur-[120px] pointer-events-none -z-10" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-20">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-brand-neon font-semibold tracking-wider uppercase text-xs mb-4"
                        >
                            Our Capabilities
                        </motion.span>
                        <h2 className="text-5xl md:text-6xl font-bold mb-6 font-display tracking-tight">
                            We Engineer <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon via-color-neon-purple to-color-hot-pink">Digital Excellence</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed font-light">
                            Comprehensive technology solutions tailored to your unique needs, delivering excellence in every line of code.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <ScrollReveal key={service.title} delay={index * 0.1} className={`h-full ${service.className || ''}`}>
                            <SpotlightCard
                                spotlightColor={service.spotlight}
                                className="p-8 h-full flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-500 border-white/5 bg-white/[0.02]"
                            >
                                <div>
                                    <div className={`p-3 rounded-xl bg-white/5 w-fit mb-6 ${service.color} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 border border-white/10 shadow-lg`}>
                                        <service.icon size={28} />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors font-display tracking-tight">{service.title}</h3>
                                    <p className="text-gray-400 leading-relaxed font-light text-sm md:text-base">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="mt-8 flex items-center gap-2 text-sm font-medium text-white/40 group-hover:text-white transition-colors">
                                    Learn more <ArrowRightIcon />
                                </div>
                            </SpotlightCard>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ArrowRightIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export default Services;
