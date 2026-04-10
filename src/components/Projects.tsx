import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { useGitHubPinnedRepos } from "@/hooks/useGitHubPinnedRepos";
import { ProjectCard } from "./ProjectCard";
import { ProjectCardSkeleton } from "./ProjectCardSkeleton";

const Projects = () => {
  const { data: repos, isLoading, isError } = useGitHubPinnedRepos();

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <Github size={28} className="text-primary" />
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">
            Projects
          </h2>
        </motion.div>

        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <ProjectCardSkeleton key={i} />
            ))}
          </div>
        )}

        {isError && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-muted-foreground bg-card rounded-2xl border border-border p-8"
          >
            Unable to load GitHub projects right now. Please try again later.
          </motion.p>
        )}

        {repos && repos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, i) => (
              <ProjectCard key={repo.name} repo={repo} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
