import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Brain, Palette, Layers, Globe } from 'lucide-react';
import SpotlightCard from '../components/ui/SpotlightCard';
import ScrollReveal from '../components/ui/ScrollReveal';

const services = [
    {
        icon: Code,
        title: "Custom Software",
        description: "Tailor-made software solutions designed to streamline your business operations and drive growth.",
        color: "text-blue-400"
    },
    {
        icon: Smartphone,
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications that provide seamless user experiences.",
        color: "text-purple-400"
    },
    {
        icon: Brain,
        title: "AI & Machine Learning",
        description: "Intelligent systems that automate processes and provide data-driven insights.",
        color: "text-emerald-400"
    },
    {
        icon: Palette,
        title: "UI/UX Design",
        description: "User-centric designs that are both visually stunning and intuitively functional.",
        color: "text-pink-400"
    },
    {
        icon: Globe,
        title: "Web Development",
        description: "Modern, responsive websites built with the latest technologies for maximum performance.",
        color: "text-cyan-400"
    },
    {
        icon: Layers,
        title: "Cloud Solutions",
        description: "Scalable cloud infrastructure and migration services for modern businesses.",
        color: "text-orange-400"
    }
];

const Services = () => {
    return (
        <section id="services" className="py-20 relative">
            <div className="container mx-auto px-6">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-purple">Expertise</span></h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            Comprehensive technology solutions tailored to your unique needs.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ScrollReveal key={service.title} delay={index * 0.1} className="h-full">
                            <SpotlightCard className="p-8 h-full flex flex-col group hover:-translate-y-2 transition-transform duration-300">
                                <div className={`p-4 rounded-xl bg-white/5 w-fit mb-6 ${service.color} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 border border-white/10 shadow-lg`}>
                                    <service.icon size={32} />
                                </div>

                                <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-neon transition-colors font-display">{service.title}</h3>
                                <p className="text-gray-400 leading-relaxed flex-grow">
                                    {service.description}
                                </p>
                            </SpotlightCard>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
