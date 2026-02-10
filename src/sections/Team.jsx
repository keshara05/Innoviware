import React from 'react';
import { motion } from 'framer-motion';
import { User, Linkedin, Github, Twitter, Globe } from 'lucide-react';
import SpotlightCard from '../components/ui/SpotlightCard';
import ScrollReveal from '../components/ui/ScrollReveal';

const teamMembers = [
    {
        name: "Keshara Rathnayaka",
        role: "Founder & CEO",
        bio: "Visionary leader driving innovation at Inniviware.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=400&h=400", // Placeholder
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
        bio: "Expert in full-stack development and architecture.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=400&h=400",
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
        bio: "Passionate about building scalable solutions.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?fit=crop&w=400&h=400",
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
        bio: "Creating intuitive and beautiful user experiences.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=400&h=400",
        socials: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        }
    },
    {
        name: "Join Our Team",
        role: "Future Innovator",
        bio: "We are always looking for talented individuals.",
        isJoinCard: true,
    }
];

const Team = () => {
    return (
        <section id="team" className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-brand-900"></div>
            <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-brand-neon/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-20">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-brand-purple font-semibold tracking-wider uppercase text-sm mb-4 block"
                        >
                            Our Team
                        </motion.span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-purple">Minds</span></h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            The talented individuals behind Inniviware's success, united by a passion for innovation.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <ScrollReveal key={member.name} delay={index * 0.1}>
                            <SpotlightCard className={`p-8 relative group h-full ${member.isJoinCard ? 'flex flex-col justify-center items-center text-center border-dashed border-brand-neon/30 hover:border-brand-neon/60 transition-colors bg-brand-neon/5' : 'bg-brand-800/40'}`}>
                                {!member.isJoinCard ? (
                                    <>
                                        <div className="relative w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-2 border-brand-neon/30 group-hover:border-brand-neon transition-all duration-500 ring-8 ring-transparent group-hover:ring-brand-neon/10">
                                            {/* Fallback to icon if image fails or for placeholder */}
                                            {member.image ? (
                                                <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                            ) : (
                                                <div className="w-full h-full bg-brand-secondary flex items-center justify-center">
                                                    <User className="w-12 h-12 text-gray-400" />
                                                </div>
                                            )}
                                        </div>

                                        <h3 className="text-2xl font-bold text-center mb-2 group-hover:text-brand-neon transition-colors font-display">{member.name}</h3>
                                        <p className="text-brand-purple text-center text-sm mb-6 font-medium tracking-wide border px-4 py-1.5 rounded-full border-brand-purple/20 bg-brand-purple/5 inline-block mx-auto">{member.role}</p>
                                        <p className="text-gray-400 text-center text-sm mb-8 leading-relaxed max-w-[250px] mx-auto">{member.bio}</p>

                                        {member.socials?.portfolio && (
                                            <div className="text-center mb-6">
                                                <a
                                                    href={member.socials.portfolio}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-6 py-2 rounded-full border border-brand-neon/50 text-brand-neon hover:bg-brand-neon hover:text-white transition-all shadow-[0_0_20px_rgba(59,130,246,0.1)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] inline-block font-medium text-sm"
                                                >
                                                    View Portfolio
                                                </a>
                                            </div>
                                        )}

                                        <div className="flex justify-center gap-4 mt-auto">
                                            {member.socials?.linkedin && (
                                                <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/5 hover:bg-brand-neon hover:text-white transition-all text-gray-400 duration-300">
                                                    <Linkedin size={18} />
                                                </a>
                                            )}
                                            {member.socials?.twitter && (
                                                <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/5 hover:bg-brand-neon hover:text-white transition-all text-gray-400 duration-300">
                                                    <Twitter size={18} />
                                                </a>
                                            )}
                                            {member.socials?.github && (
                                                <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/5 hover:bg-brand-neon hover:text-white transition-all text-gray-400 duration-300">
                                                    <Github size={18} />
                                                </a>
                                            )}
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="w-24 h-24 rounded-full bg-brand-neon/10 flex items-center justify-center mb-6 text-brand-neon group-hover:scale-110 transition-transform duration-500 border border-brand-neon/20">
                                            <User size={40} />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3 font-display">{member.name}</h3>
                                        <p className="text-gray-400 mb-8 max-w-[200px] leading-relaxed">{member.bio}</p>
                                        <button className="px-8 py-3 rounded-full border border-brand-neon text-brand-neon hover:bg-brand-neon hover:text-white transition-all shadow-[0_0_20px_rgba(59,130,246,0.1)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] font-medium">
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
