import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2";

    const variants = {
        primary: "bg-brand-neon hover:bg-brand-purple text-white shadow-lg hover:shadow-brand-neon/50",
        outline: "border border-brand-neon text-brand-neon hover:bg-brand-neon/10",
        ghost: "text-gray-300 hover:text-white hover:bg-white/5",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
