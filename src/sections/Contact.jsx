import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Button from '../components/ui/Button';

const Contact = () => {
    const formRef = useRef();
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formState.name || !formState.email || !formState.message) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        // SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY
        // You need to create an account on EmailJS (https://www.emailjs.com/)
        // and replace these placeholders with your actual IDs.
        // For now, I'll simulate a delay.

        try {
            // Replace with your actual EmailJS Header
            // await emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY');

            // Temporary simulation for demonstration until keys are added
            // Remove this setTimeout and uncomment the emailjs line above when ready
            await new Promise(resolve => setTimeout(resolve, 2000));
            // throw new Error("EmailJS keys not configured"); // Uncomment to test error

            setSubmitStatus('success');
            setFormState({ name: '', email: '', message: '' });
            setTimeout(() => setSubmitStatus(null), 5000);
        } catch (error) {
            console.error('FAILED...', error);
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus(null), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute -left-[20%] top-[20%] w-[600px] h-[600px] bg-brand-neon/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -right-[20%] bottom-[20%] w-[600px] h-[600px] bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-brand-neon font-semibold tracking-wider uppercase text-sm mb-4 block">
                        Contact Us
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-purple">Touch</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Ready to start your next project? We'd love to hear from you. Let's build something amazing together.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="glass-card p-8 rounded-3xl border border-white/5 bg-brand-800/50 backdrop-blur-md">
                            <h3 className="text-2xl font-bold mb-8 font-display">Contact Information</h3>
                            <div className="space-y-8">
                                <div className="flex items-start gap-5 group">
                                    <div className="p-4 bg-brand-neon/10 rounded-2xl text-brand-neon group-hover:bg-brand-neon group-hover:text-white transition-colors duration-300">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-1">Email Us</h4>
                                        <p className="text-gray-400 group-hover:text-brand-neon transition-colors">innoviware41@gmail.com</p>
                                        <p className="text-gray-500 text-sm">Response within 24 hours</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5 group">
                                    <div className="p-4 bg-brand-purple/10 rounded-2xl text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-colors duration-300">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-1">Call Us</h4>
                                        <p className="text-gray-400 group-hover:text-brand-purple transition-colors">+94 775247113</p>
                                        <p className="text-gray-500 text-sm">Mon - Fri, 9am - 6pm</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5 group">
                                    <div className="p-4 bg-pink-500/10 rounded-2xl text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-1">Visit Us</h4>
                                        <p className="text-gray-400 group-hover:text-pink-500 transition-colors">No 215 Hungamalagama</p>
                                        <p className="text-gray-400">Dehiattakandiya, 32150</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-10 rounded-3xl border border-white/5 bg-brand-800/50 backdrop-blur-md relative overflow-hidden"
                    >
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300 ml-1">Name</label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-brand-neon focus:ring-1 focus:ring-brand-neon/50 transition-all placeholder:text-white/20"
                                        placeholder="John Doe"
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300 ml-1">Email</label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-brand-neon focus:ring-1 focus:ring-brand-neon/50 transition-all placeholder:text-white/20"
                                        placeholder="john@example.com"
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300 ml-1">Message</label>
                                <textarea
                                    name="message"
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-brand-neon focus:ring-1 focus:ring-brand-neon/50 transition-all h-32 resize-none placeholder:text-white/20"
                                    placeholder="Tell us about your project..."
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    required
                                />
                            </div>

                            <Button
                                variant="primary"
                                className="w-full justify-center py-4 text-lg shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <Loader2 className="animate-spin" size={20} />
                                ) : (
                                    <>Send Message <Send size={18} /></>
                                )}
                            </Button>
                        </form>

                        {/* Status Feedback */}
                        <AnimatePresence>
                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute inset-0 bg-brand-800/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-8 z-20"
                                >
                                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4 text-green-500">
                                        <CheckCircle size={32} />
                                    </div>
                                    <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                                    <p className="text-gray-400">We'll get back to you within 24 hours.</p>
                                </motion.div>
                            )}
                            {submitStatus === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute inset-0 bg-brand-800/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-8 z-20"
                                >
                                    <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mb-4 text-red-500">
                                        <XCircle size={32} />
                                    </div>
                                    <h4 className="text-2xl font-bold mb-2">Failed to Send</h4>
                                    <p className="text-gray-400">Please try again later or email us directly.</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
