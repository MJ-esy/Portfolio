import {
  Github,
  Linkedin,
  Mail,
  Briefcase,
  GraduationCap,
  Languages,
  Code,
  Menu,
  X,
  Download,
} from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { IconKey } from "@/data/cv";

const iconMap: Record<IconKey, React.ComponentType<LucideProps>> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  briefcase: Briefcase,
  "graduation-cap": GraduationCap,
  languages: Languages,
  code: Code,
  menu: Menu,
  x: X,
  download: Download,
};

export function resolveIcon(key: IconKey, props?: LucideProps): React.ReactElement {
  const Icon = iconMap[key];
  return <Icon {...props} />;
}
