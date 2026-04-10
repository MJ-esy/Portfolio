import { motion } from "framer-motion";
import { scrollReveal } from "@/lib/motion";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

const SectionHeading = ({ children, className = "" }: SectionHeadingProps) => (
  <motion.h2
    {...scrollReveal}
    className={`font-heading text-3xl md:text-4xl font-semibold text-foreground mb-8 text-center ${className}`}
  >
    {children}
  </motion.h2>
);

export default SectionHeading;
