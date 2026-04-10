import { cv } from "@/data/cv";
import SocialLink from "@/components/atoms/SocialLink";

const Footer = () => (
  <footer className="border-t border-border py-8 px-6">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {cv.copyrightYear} {cv.copyrightName}. All rights reserved.
      </p>
      <div className="flex gap-4">
        {cv.socialLinks.map((s) => (
          <SocialLink key={s.label} href={s.href} icon={s.icon} label={s.label} size={16} />
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
