import { motion } from "framer-motion";
import { scrollReveal, scrollRevealDelayed } from "@/lib/motion";
import { resolveIcon } from "@/lib/icons";
import { cv } from "@/data/cv";
import SectionHeading from "@/components/atoms/SectionHeading";

// Contact uses labeled buttons (different visual from the icon-only circles in Hero/Footer)
// hrefs still come from cv.socialLinks — no duplication
const github   = cv.socialLinks.find((s) => s.icon === "github")!;
const linkedin = cv.socialLinks.find((s) => s.icon === "linkedin")!;

const Contact = () => (
  <section id="contact" className="py-24 px-6">
    <div className="max-w-2xl mx-auto text-center">
      <SectionHeading>Let's Connect</SectionHeading>
      <motion.p {...scrollRevealDelayed(0.1)} className="text-muted-foreground mb-2">
        Looking to collaborate or share ideas?
      </motion.p>
      <motion.p {...scrollRevealDelayed(0.15)} className="text-muted-foreground mb-8">
        Drop me a message! 😊 I'd love to connect!
      </motion.p>
      <motion.div {...scrollRevealDelayed(0.2)} className="flex gap-4 justify-center">
        <a
          href={github.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border text-foreground font-medium hover:border-secondary hover:bg-secondary/10 hover:text-secondary hover:shadow-lifted hover:-translate-y-0.5 transition-all duration-200"
        >
          {resolveIcon("github", { size: 18 })}
          {github.label}
        </a>
        <a
          href={linkedin.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium hover:opacity-85 hover:-translate-y-0.5 hover:shadow-lifted transition-all duration-200 shadow-soft"
        >
          {resolveIcon("linkedin", { size: 18 })}
          {linkedin.label}
        </a>
      </motion.div>
    </div>
  </section>
);

export default Contact;
