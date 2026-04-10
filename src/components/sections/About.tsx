import { motion } from "framer-motion";
import { scrollRevealDelayed } from "@/lib/motion";
import { cv } from "@/data/cv";
import SectionHeading from "@/components/atoms/SectionHeading";

const About = () => (
  <section id="about" className="py-24 px-6">
    <div className="max-w-3xl mx-auto">
      <SectionHeading>About Me</SectionHeading>
      <motion.div
        {...scrollRevealDelayed(0.1)}
        className="bg-card rounded-2xl p-8 md:p-10 shadow-soft border border-border space-y-4"
      >
        {cv.aboutParagraphs.map((paragraph, i) => (
          <p key={i} className="text-muted-foreground leading-relaxed">
            {paragraph}
          </p>
        ))}
      </motion.div>
    </div>
  </section>
);

export default About;
