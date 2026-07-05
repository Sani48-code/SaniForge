import {
  Briefcase,
  HeartPulse,
  Home,
  Wrench,
  Truck,
  Scale,
  Sparkles,
  Landmark,
  Factory,
  Wind,
  Paintbrush,
  ParkingSquare,
  Waves,
  WashingMachine,
  Flower2,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  briefcase: Briefcase,
  "heart-pulse": HeartPulse,
  home: Home,
  wrench: Wrench,
  truck: Truck,
  scale: Scale,
  sparkles: Sparkles,
  landmark: Landmark,
  factory: Factory,
  wind: Wind,
  paintbrush: Paintbrush,
  "parking-square": ParkingSquare,
  waves: Waves,
  "washing-machine": WashingMachine,
  flower: Flower2,
};

export default function IndustryIcon({ name, size = 20 }: { name: string; size?: number }) {
  const Icon = icons[name] ?? Briefcase;
  return <Icon size={size} />;
}
