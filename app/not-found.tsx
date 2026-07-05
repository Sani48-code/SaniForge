import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm uppercase tracking-[0.2em] text-gold-light">404</p>
      <h1 className="mt-4 font-display text-5xl text-ink sm:text-6xl">
        Page not <em className="italic text-gold-light">found</em>
      </h1>
      <p className="mt-4 max-w-md text-lg text-ink-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <div className="mt-8">
        <Button href="/">Back to Home</Button>
      </div>
    </section>
  );
}
