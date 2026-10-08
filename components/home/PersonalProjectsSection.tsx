import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/motion/FadeIn";
import { personalProjects } from "@/lib/data/personal-projects";

export default function PersonalProjectsSection() {
  return (
    <section className="bg-gradient-to-br from-[#13492F] via-[#0F3B26] to-[#0A2818] py-24 sm:py-32">
      <div className="container-px mx-auto max-w-content">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-gold-light">
            Personal Projects
          </p>
          <h2 className="font-display text-5xl font-medium leading-tight text-ink sm:text-6xl text-balance">
            Things{" "}
            <span className="bg-gradient-to-r from-gold-light to-blue-accent bg-clip-text text-transparent">
              I&apos;ve Built on My Own
            </span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted sm:text-xl">
            A few independent projects I designed and developed end to end,
            outside of client work.
          </p>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {personalProjects.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.08}>
              <Card className="h-full overflow-hidden">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-navy-deep/10 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-gold/30 bg-navy-deep/90 px-3 py-1 font-mono text-xs uppercase tracking-wider text-gold-light backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-ink sm:text-2xl">{project.title}</h3>
                  <p className="mt-2.5 text-base leading-relaxed text-ink-muted">
                    {project.description}
                  </p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex items-center gap-1.5 text-base font-medium text-gold-light transition-colors hover:text-gold-soft"
                  >
                    Visit Live Site <ArrowUpRight size={14} />
                  </a>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
