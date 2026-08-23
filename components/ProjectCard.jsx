import Link from "next/link";

export default function ProjectCard({ project, featured = false }) {
  return (
    <article className={`rounded-3xl border border-white/10 bg-[#101B2E] p-5 ${featured ? "md:p-7" : ""}`}>
      <div className="mb-8 flex aspect-[16/9] items-center justify-center rounded-2xl border border-white/10 bg-[#0D1627] text-sm text-[#67758A]">
        REAL PROJECT SCREENSHOT
      </div>
      <p className="mb-2 text-xs font-bold tracking-[.14em] text-[#7785FF]">PROJECT</p>
      <h3 className="text-xl font-bold md:text-2xl">{project.title}</h3>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-[#9EACC0]">{project.short}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-[#C4CDDA]">
            {tag}
          </span>
        ))}
      </div>
      <Link
        href={`/work/${project.slug}`}
        className="mt-6 inline-block font-semibold text-[#AAB2FF] hover:text-white"
      >
        View case study →
      </Link>
    </article>
  );
}
