import WorkflowMockup from "./WorkflowMockup";
import DocumentMockup from "./DocumentMockup";
import WebsiteMockup from "./WebsiteMockup";
import type { WorkCategory } from "@/lib/mdx";

const mockupByCategory: Record<WorkCategory, typeof WorkflowMockup> = {
  Automation: WorkflowMockup,
  Copywriting: DocumentMockup,
  "Web Development": WebsiteMockup,
};

export default function CaseStudyVisual({
  category,
  state = "after",
  className,
}: {
  category: WorkCategory;
  state?: "before" | "after";
  className?: string;
}) {
  const Mockup = mockupByCategory[category] ?? WorkflowMockup;
  return <Mockup state={state} className={className} />;
}
