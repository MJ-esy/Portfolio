import { resolveIcon } from "@/lib/icons";
import type { IconKey } from "@/data/cv";

interface SocialLinkProps {
  href: string;
  icon: IconKey;
  label: string;
  size?: number;
}

const SocialLink = ({ href, icon, label, size = 20 }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-secondary hover:border-secondary hover:bg-secondary/10 hover:-translate-y-0.5 hover:shadow-lifted transition-all duration-200"
  >
    {resolveIcon(icon, { size })}
  </a>
);

export default SocialLink;
