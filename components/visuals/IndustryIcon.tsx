import { Briefcase, HeartPulse, Home, Wrench, Truck, type LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  briefcase: Briefcase,
  "heart-pulse": HeartPulse,
  home: Home,
  wrench: Wrench,
  truck: Truck,
};

export default function IndustryIcon({ name, size = 20 }: { name: string; size?: number }) {
  const Icon = icons[name] ?? Briefcase;
  return <Icon size={size} />;
}
