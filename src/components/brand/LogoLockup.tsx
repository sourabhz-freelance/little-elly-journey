import logoAsset from "@/assets/little-elly-logo.png.asset.json";
import { heroContent } from "@/content/hero";

export function LogoLockup() {
  return (
    <img
      src={logoAsset.url}
      alt={`${heroContent.brand.name} — ${heroContent.brand.tagline}`}
      className="h-14 w-auto sm:h-16"
    />
  );
}
