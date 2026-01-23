import React from 'react';
import { motion } from 'framer-motion';

/**
 * AdaptiveCard Component
 * Demonstrates the "Polymorphic" principle of the Morphism Design System.
 *
 * @param {'static' | 'fluid' | 'interactive'} mode - Determines behavior
 * @param {'low' | 'high'} density - Determines information packing
 */
export const AdaptiveCard = ({ 
  mode = 'static', 
  density = 'low',
  title, 
  value, 
  trend,
  icon: Icon 
}) => {
  // Base styles for the geometric container
  const baseStyles = "relative overflow-hidden border-2 transition-all duration-300 backdrop-blur-sm";
  
  // Theme variants based on mode
  const variants = {
    static: "bg-slate-900/50 border-slate-700 hover:border-blue-500/50",
    fluid: "bg-blue-950/30 border-blue-500/30 hover:border-blue-400 hover:bg-blue-900/40",
    interactive: "bg-indigo-950/30 border-indigo-500/30 cursor-pointer hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]"
  };

  // Density configurations
  const padding = density === 'high' ? 'p-4' : 'p-8';
  const titleSize = density === 'high' ? 'text-xs' : 'text-sm';
  const valueSize = density === 'high' ? 'text-2xl' : 'text-4xl';

  return (
    <motion.div 
      className={`${baseStyles} ${variants[mode]} ${padding}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={mode === 'interactive' ? { y: -2 } : {}}
    >
      {/* Geometric Decoration */}
      <div className="absolute top-0 right-0 p-2 opacity-20">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M0 0H20V20" stroke="currentColor" strokeWidth="1" className="text-blue-400"/>
        </svg>
      </div>

      {/* Content Layout */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className={`font-mono uppercase tracking-wider text-slate-400 ${titleSize} mb-1`}>
            {title}
          </h3>
          <div className={`font-display font-bold text-white ${valueSize}`}>
            {value}
          </div>
        </div>
        
        {Icon && (
          <div className={`p-2 rounded-lg ${mode === 'fluid' ? 'bg-blue-500/20 text-blue-400' : 'bg-slate-800 text-slate-400'}`}>
            <Icon size={density === 'high' ? 16 : 24} />
          </div>
        )}
      </div>

      {/* Footer / Trend */}
      {trend && (
        <div className="flex items-center gap-2 font-mono text-xs">
          <span className={trend > 0 ? 'text-emerald-400' : 'text-rose-400'}>
            {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
          </span>
          <span className="text-slate-600">vs last cycle</span>
        </div>
      )}

      {/* Active State Indicator (Fluid Mode) */}
      {mode === 'fluid' && (
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 animate-pulse w-full" />
      )}
    </motion.div>
  );
};
