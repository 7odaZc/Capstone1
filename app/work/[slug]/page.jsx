import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../../lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <main className="mx-auto w-[min(900px,calc(100%-32px))] py-20">
      <Link href="/work" className="text-sm text-[#9EACC0] hover:text-white">← Back to work</Link>
      <p className="mt-10 text-xs font-bold tracking-[.14em] text-[#7785FF]">CASE STUDY</p>
      <h1 className="mt-3 text-5xl font-bold tracking-tight">{project.title}</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-[#9EACC0]">{project.short}</p>

      <div className="mt-10 aspect-video rounded-3xl border border-white/10 bg-[#101B2E] flex items-center justify-center text-sm text-[#67758A]">
        REAL PROJECT SCREENSHOT
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-3">
        <section>
          <h2 className="font-bold">The Problem</h2>
          <p className="mt-3 leading-7 text-[#9EACC0]">Add the real project problem here.</p>
        </section>
        <section>
          <h2 className="font-bold">What I Did</h2>
          <p className="mt-3 leading-7 text-[#9EACC0]">Add your implementation and technical decisions here.</p>
        </section>
        <section>
          <h2 className="font-bold">What Came of It</h2>
          <p className="mt-3 leading-7 text-[#9EACC0]">Add the honest result and learning here.</p>
        </section>
      </div>

      <div className="mt-12 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-[#C4CDDA]">
            {tag}
          </span>
        ))}
      </div>

      <Link href="/contact" className="mt-10 inline-block rounded-xl bg-[#7785FF] px-5 py-3 font-bold">
        Contact me
      </Link>
    </main>
  );
}
