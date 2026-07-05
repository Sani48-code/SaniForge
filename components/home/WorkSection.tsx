import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import SectionHeading from "@/components/ui/SectionHeading";
import IndustryMarquee from "@/components/work/IndustryMarquee";
import WorkClient from "@/components/work/WorkClient";
import { getAllCaseStudies } from "@/lib/mdx";

export default function WorkSection() {
  const studies = getAllCaseStudies().map((study) => ({
    ...study,
    contentNode: (
      <MDXRemote
        source={study.content}
        options={{ mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug] } }}
      />
    ),
  }));

  return (
    <section id="work" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-px mx-auto max-w-content">
        <SectionHeading
          eyebrow="Selected Work"
          title="Results, not just deliverables"
          description="Six projects across automation, copywriting, and web development. Click any card for the full case study."
        />

        <div className="mt-16">
          <WorkClient studies={studies} />
        </div>

        <div className="mt-24 border-t border-navy-border pt-20">
          <SectionHeading
            eyebrow="Client Industries"
            title="Businesses I&apos;ve Worked With"
            description="Over 20+ businesses across the US, grouped by industry. Client names kept private, case studies available on request."
          />
        </div>
      </div>

      <div className="relative left-1/2 right-1/2 -mx-[50vw] mt-16 w-screen">
        <IndustryMarquee />
      </div>
    </section>
  );
}
