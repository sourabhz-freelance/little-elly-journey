import logo from "@/assets/little-elly-logo.png";
import { heroContent } from "@/content/hero";

export function LogoLockup() {
  return (
    <img
      src={logo}
      alt={`${heroContent.brand.name} — ${heroContent.brand.tagline}`}
      className="h-14 w-auto sm:h-16"
    />
  );
}
