import React from 'react';
import { motion } from 'framer-motion';
import { User, Linkedin, Github, Twitter, Globe, ArrowUpRight } from 'lucide-react';
import SpotlightCard from '../components/ui/SpotlightCard';
import ScrollReveal from '../components/ui/ScrollReveal';

const teamMembers = [
    {
        name: "Keshara Rathnayaka",
        role: "Founder & CEO",
        bio: "Visionary leader driving innovation at Inniviware. Obsessed with detail and perfection.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=400&h=400",
        spotlight: "rgba(59, 130, 246, 0.4)",
        socials: {
            portfolio: "https://keshararathnayaka.vercel.app/",
            linkedin: "#",
            twitter: "#",
            github: "#"
        }
    },
    {
        name: "Nilushka Purnima",
        role: "Lead Developer",
        bio: "Master of full-stack architecture. Turns caffeinated ideas into robust code.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=400&h=400",
        spotlight: "rgba(124, 58, 237, 0.4)",
        socials: {
            portfolio: "https://nilushkapoornima.vercel.app/",
            linkedin: "#",
            twitter: "#",
            github: "#"
        }
    },
    {
        name: "Hashantha Pramod",
        role: "Software Engineer",
        bio: "Coding wizard passionate about scalable solutions and clean architecture.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?fit=crop&w=400&h=400",
        spotlight: "rgba(244, 114, 182, 0.4)",
        socials: {
            portfolio: "https://hashanthapramod.vercel.app/",
            linkedin: "#",
            twitter: "#",
            github: "#"
        }
    },
    {
        name: "Shashika Kalhara",
        role: "UI/UX Designer",
        bio: "Crafting intuitive and beautiful user experiences that people love to use.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=400&h=400",
        spotlight: "rgba(132, 204, 22, 0.4)",
        socials: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        }
    },
    {
        name: "Join Our Team",
        role: "Future Innovator",
        bio: "We are always looking for talented individuals to join our mission.",
        spotlight: "rgba(255, 255, 255, 0.2)",
        isJoinCard: true,
    }
];

const Team = () => {
    return (
        <section id="team" className="py-32 relative overflow-hidden bg-brand-900">
            {/* Background Elements */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-brand-neon/10 rounded-full blur-[120px] pointer-events-none -z-10" />
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-color-neon-purple/10 rounded-full blur-[120px] pointer-events-none -z-10" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-20 animate-fade-in-up">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-color-neon-purple font-semibold tracking-wider uppercase text-xs mb-4"
                        >
                            Our Team
                        </motion.span>
                        <h2 className="text-5xl md:text-6xl font-bold mb-6 font-display tracking-tight">
                            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-color-neon-purple">Visionaries</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed font-light">
                            The talented individuals behind Inniviware's success, united by a passion for innovation.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <ScrollReveal key={member.name} delay={index * 0.1}>
                            <SpotlightCard spotlightColor={member.spotlight} className={`p-8 relative group h-full flex flex-col items-center ${member.isJoinCard ? 'justify-center text-center border-dashed border-white/20 hover:border-white/40 transition-colors bg-white/5' : 'bg-white/[0.02]'}`}>
                                {!member.isJoinCard ? (
                                    <>
                                        <div className="relative w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-white/30 transition-all duration-500 shadow-2xl">
                                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-neon/20 to-color-neon-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                            {member.image ? (
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-brand-secondary flex items-center justify-center">
                                                    <User className="w-12 h-12 text-gray-400" />
                                                </div>
                                            )}
                                        </div>

                                        <h3 className="text-2xl font-bold text-center mb-2 group-hover:text-white transition-colors font-display tracking-tight">{member.name}</h3>
                                        <p className="text-brand-neon text-center text-sm mb-6 font-medium tracking-wide uppercase">{member.role}</p>
                                        <p className="text-gray-400 text-center text-sm mb-8 leading-relaxed max-w-[260px] mx-auto font-light border-t border-white/5 pt-6">{member.bio}</p>

                                        <div className="mt-auto flex flex-col items-center w-full gap-4">
                                            {member.socials?.portfolio && (
                                                <a
                                                    href={member.socials.portfolio}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors group/link"
                                                >
                                                    <span>View Portfolio</span>
                                                    <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                                </a>
                                            )}

                                            <div className="flex justify-center gap-3">
                                                {member.socials?.linkedin && (
                                                    <a href={member.socials.linkedin} className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all backdrop-blur-sm"><Linkedin size={16} /></a>
                                                )}
                                                {member.socials?.twitter && (
                                                    <a href={member.socials.twitter} className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all backdrop-blur-sm"><Twitter size={16} /></a>
                                                )}
                                                {member.socials?.github && (
                                                    <a href={member.socials.github} className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all backdrop-blur-sm"><Github size={16} /></a>
                                                )}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white/50 group-hover:text-brand-neon group-hover:scale-110 transition-all duration-500 border border-white/10">
                                            <User size={32} />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3 font-display">Join Our Team</h3>
                                        <p className="text-gray-400 mb-8 max-w-[200px] leading-relaxed font-light">{member.bio}</p>
                                        <button className="px-8 py-3 rounded-full bg-white text-black hover:bg-brand-neon hover:text-white transition-all shadow-lg font-bold text-sm">
                                            Apply Now
                                        </button>
                                    </>
                                )}
                            </SpotlightCard>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
