import { motion } from 'motion/react';

const stats = [
  { label: "Chaînes Live", value: "25K+" },
  { label: "Uptime Serveur", value: "99.9%" },
  { label: "Utilisateurs", value: "150K+" },
  { label: "Support 24/7", value: "Live" }
];

interface StatsProps {
  className?: string;
  gridClassName?: string;
}

export default function Stats({ className = "", gridClassName = "grid-cols-2 md:grid-cols-4 gap-12 md:gap-24" }: StatsProps) {
  return (
    <div className={`relative ${className}`}>
      <div className={`grid ${gridClassName} relative z-10`}>
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center md:text-left"
          >
            <div className="text-4xl md:text-5xl font-black tracking-tighter mb-2 flex items-center justify-center md:justify-start gap-3 text-white">
              {stat.value}
              {stat.label === "Support 24/7" && (
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              )}
            </div>
            <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
