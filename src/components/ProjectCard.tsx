import { motion } from "framer-motion";
import { Github, Star, GitFork } from "lucide-react";
import type { PinnedRepo } from "@/hooks/useGitHubPinnedRepos";

export const ProjectCard = ({ repo, index }: { repo: PinnedRepo; index: number }) => (
  <motion.a
    href={`https://github.com/${repo.author}/${repo.name}`}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className="group block bg-card rounded-2xl border border-border p-6 shadow-soft hover:shadow-lifted hover:border-secondary/50 hover:-translate-y-1.5 transition-all duration-300"
  >
    <div className="flex items-center gap-2 mb-3">
      <Github size={18} className="text-muted-foreground" />
      <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors truncate">
        {repo.name}
      </h3>
    </div>

    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2 min-h-[2.5rem]">
      {repo.description || "No description provided."}
    </p>

    <div className="flex items-center gap-4 text-xs text-muted-foreground">
      {repo.language && (
        <span className="inline-flex items-center gap-1.5">
          <span
            className="w-2.5 h-2.5 rounded-full shrink-0"
            style={{ backgroundColor: repo.languageColor || "hsl(var(--muted-foreground))" }}
          />
          {repo.language}
        </span>
      )}
      <span className="inline-flex items-center gap-1">
        <Star size={13} />
        {repo.stars}
      </span>
      <span className="inline-flex items-center gap-1">
        <GitFork size={13} />
        {repo.forks}
      </span>
    </div>
  </motion.a>
);
