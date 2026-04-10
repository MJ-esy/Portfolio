import { motion } from "framer-motion";
import { scrollReveal, scrollRevealDelayed } from "@/lib/motion";
import { resolveIcon } from "@/lib/icons";
import { cv } from "@/data/cv";
import SectionHeading from "@/components/atoms/SectionHeading";
import TimelineItem from "@/components/atoms/TimelineItem";
import { useToast } from "@/hooks/use-toast";

const Resume = () => {
  const { toast } = useToast();

  const handleDownload = () => {
    toast({ title: "Thank you for downloading!", duration: 3000 });
  };

  return (
  <section id="resume" className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <SectionHeading className="mb-4">My Resumé</SectionHeading>

      {/* CV Downloads */}
      <motion.div {...scrollRevealDelayed(0.1)} className="flex gap-3 justify-center mb-12">
        {cv.cvDownloads.map((dl) => (
          <a
            key={dl.label}
            href={dl.href}
            download
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-border text-sm font-medium text-foreground hover:border-secondary hover:bg-secondary/10 hover:text-secondary hover:shadow-lifted hover:-translate-y-0.5 transition-all duration-200"
          >
            {resolveIcon("download", { size: 16 })}
            {dl.label}
          </a>
        ))}
      </motion.div>

      {/* Employment & Education */}
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-6">
            {resolveIcon("briefcase", { size: 20, className: "text-primary" })}
            <h3 className="font-heading text-xl font-semibold text-foreground">Employment</h3>
          </div>
          {cv.employments.map((e, i) => (
            <TimelineItem key={i} title={e.position} subtitle={e.company} duration={e.duration} description={e.description} index={i} />
          ))}
        </div>

        <div>
          <div className="flex items-center gap-2 mb-6">
            {resolveIcon("graduation-cap", { size: 20, className: "text-primary" })}
            <h3 className="font-heading text-xl font-semibold text-foreground">Education</h3>
          </div>
          {cv.education.map((e, i) => (
            <TimelineItem key={i} title={e.course} subtitle={e.school} duration={e.duration} description={e.info} index={i} />
          ))}
        </div>
      </div>

      {/* Languages & Skills */}
      <div className="grid md:grid-cols-2 gap-12 mt-16">
        <motion.div {...scrollReveal}>
          <div className="flex items-center gap-2 mb-6">
            {resolveIcon("languages", { size: 20, className: "text-primary" })}
            <h3 className="font-heading text-xl font-semibold text-foreground">Languages</h3>
          </div>
          <div className="space-y-3">
            {cv.languages.map((l) => (
              <div key={l.language} className="flex items-center justify-between bg-card rounded-xl px-5 py-3 border border-border">
                <span className="font-medium text-foreground text-sm">{l.language}</span>
                <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">{l.proficiency}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...scrollRevealDelayed(0.1)}>
          <div className="flex items-center gap-2 mb-6">
            {resolveIcon("code", { size: 20, className: "text-primary" })}
            <h3 className="font-heading text-xl font-semibold text-foreground">Skills</h3>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {cv.skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground shadow-soft hover:shadow-lifted hover:border-secondary/40 hover:text-secondary transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default Resume;
