import { motion } from "framer-motion";
import Flag from "react-world-flags";
import profilePhoto from "@/assets/profile-photo.jpg";
import { fadeUpVariants } from "@/lib/motion";
import { cv } from "@/data/cv";
import SocialLink from "@/components/atoms/SocialLink";

const Hero = () => (
  <section className="min-h-screen flex items-center justify-center px-6 pt-20">
    <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-20">
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
      >
        <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-[#d4d0cc] bg-[#d4d0cc] shadow-lifted">
          <img src={profilePhoto} alt={cv.profileImageAlt} className="w-full h-full object-cover object-[center_30%]" />
        </div>
        <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-primary rounded-full animate-float opacity-60" />
        <div className="absolute -top-2 -left-4 w-8 h-8 bg-secondary rounded-full animate-float opacity-40" style={{ animationDelay: "2s" }} />
      </motion.div>

      <div className="text-center md:text-left">
        <motion.p custom={0} variants={fadeUpVariants} initial="hidden" animate="visible" className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-3">
          Hello, I'm
        </motion.p>
        <motion.h1 custom={1} variants={fadeUpVariants} initial="hidden" animate="visible" className="font-heading text-5xl md:text-6xl font-semibold text-foreground leading-tight mb-4">
          {cv.name}
        </motion.h1>
        <motion.p custom={2} variants={fadeUpVariants} initial="hidden" animate="visible" className="text-lg text-muted-foreground max-w-md mb-2">
          {cv.tagline}
        </motion.p>
        <motion.p custom={3} variants={fadeUpVariants} initial="hidden" animate="visible" className="text-base text-muted-foreground max-w-md mb-8">
          From <Flag code={cv.locationFrom} style={{ width: 20, display: "inline", verticalAlign: "middle" }} /> {cv.locationFrom === "MY" ? "Malaysia" : cv.locationFrom}
          {" "}· Based in <Flag code={cv.locationBased} style={{ width: 20, display: "inline", verticalAlign: "middle" }} /> {cv.locationBased === "SE" ? "Sweden" : cv.locationBased}
        </motion.p>
        <motion.div custom={4} variants={fadeUpVariants} initial="hidden" animate="visible" className="flex gap-4 justify-center md:justify-start">
          {cv.socialLinks.map((s) => (
            <SocialLink key={s.label} href={s.href} icon={s.icon} label={s.label} />
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
