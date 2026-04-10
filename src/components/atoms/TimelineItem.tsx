import { motion } from "framer-motion";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  index: number;
}

const TimelineItem = ({ title, subtitle, duration, description, index }: TimelineItemProps) => (
  <motion.div
    initial={{ opacity: 0, x: -16 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className="relative pl-8 pb-8 last:pb-0 border-l-2 border-border last:border-transparent"
  >
    <div className="absolute left-[-7px] top-1 w-3 h-3 rounded-full bg-primary" />
    <h4 className="font-heading text-base font-semibold text-foreground">{title}</h4>
    <p className="text-sm text-muted-foreground mt-0.5">
      {subtitle} {duration && <span className="text-primary">· {duration}</span>}
    </p>
    {description && <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{description}</p>}
  </motion.div>
);

export default TimelineItem;
