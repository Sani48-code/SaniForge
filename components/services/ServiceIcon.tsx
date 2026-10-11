import { PenLine, FileText, Code2, Workflow, Target, Layers } from "lucide-react";
import type { Service } from "@/lib/data/services";

const icons = {
  pen: PenLine,
  file: FileText,
  code: Code2,
  workflow: Workflow,
  target: Target,
  layers: Layers,
};

export default function ServiceIcon({
  name,
  size = 22,
}: {
  name: Service["icon"];
  size?: number;
}) {
  const Icon = icons[name];
  return <Icon size={size} aria-hidden="true" />;
}
