import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  href?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  href, 
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-display font-bold uppercase tracking-wider transition-all duration-300 relative overflow-hidden group";
  
  const variants = {
    primary: "bg-apex-red text-white hover:bg-red-700 border-2 border-transparent shadow-[0_0_20px_rgba(255,0,0,0.4)] hover:shadow-[0_0_30px_rgba(255,0,0,0.6)]",
    secondary: "bg-white text-black hover:bg-gray-200 border-2 border-transparent",
    outline: "bg-transparent text-apex-gold border-2 border-apex-gold hover:bg-apex-gold/10 shadow-[0_0_15px_rgba(255,215,0,0.2)]"
  };

  const sizes = {
    sm: "text-[10px] px-3 py-1.5 md:text-xs md:px-4 md:py-2",
    md: "text-xs px-5 py-2.5 md:text-sm md:px-6 md:py-3",
    lg: "text-sm px-6 py-3 md:text-base md:px-8 md:py-4"
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
      )}
    </>
  );

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`;

  if (href) {
    return (
      <motion.a 
        href={href} 
        className={classes}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button 
      className={classes}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default Button;