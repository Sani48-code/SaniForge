import type { Metadata } from "next";
import FadeIn from "@/components/motion/FadeIn";
import PersonalProjectsSection from "@/components/home/PersonalProjectsSection";
import SaaSProducts from "@/components/home/SaaSProducts";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Websites, SaaS products and automations built by Abdul Kaiyum Sani, independently and with the GrowMinion team.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-radial py-20 sm:py-28">
        <div className="container-px mx-auto max-w-2xl text-center">
          <FadeIn>
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-gold-light">
              Projects
            </p>
            <h1 className="mt-4 font-display text-5xl font-medium leading-tight text-ink sm:text-6xl text-balance">
              Things I&apos;ve{" "}
              <em className="bg-gradient-to-r from-blue-accent to-gold-light bg-clip-text italic text-transparent">
                built &amp; shipped
              </em>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted sm:text-xl">
              Independent websites and the SaaS products I&apos;ve helped build
              with the GrowMinion team.
            </p>
          </FadeIn>
        </div>
      </section>

      <PersonalProjectsSection />
      <SaaSProducts />
    </>
  );
}
