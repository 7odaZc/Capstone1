export default function ContactPage() {
  return (
    <main className="mx-auto w-[min(900px,calc(100%-32px))] py-20">
      <p className="text-xs font-bold tracking-[.14em] text-[#7785FF]">CONTACT</p>
      <h1 className="mt-3 text-5xl font-bold tracking-tight">Let’s talk.</h1>
      <p className="mt-4 max-w-2xl leading-7 text-[#9EACC0]">
        Have a project, opportunity, or question? Send me a message.
      </p>

      <form className="mt-10 rounded-3xl border border-white/10 bg-[#101B2E] p-7">
        <div className="grid gap-5">
          <label className="grid gap-2">
            <span className="text-sm font-semibold">Name</span>
            <input className="rounded-xl border border-white/10 bg-[#0B1424] px-4 py-3 outline-none focus:border-[#7785FF]" />
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-semibold">Email</span>
            <input type="email" className="rounded-xl border border-white/10 bg-[#0B1424] px-4 py-3 outline-none focus:border-[#7785FF]" />
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-semibold">Message</span>
            <textarea rows="6" className="rounded-xl border border-white/10 bg-[#0B1424] px-4 py-3 outline-none focus:border-[#7785FF]" />
          </label>
          <button type="button" className="rounded-xl bg-[#7785FF] px-5 py-3 font-bold">
            Send message
          </button>
        </div>
      </form>
    </main>
  );
}
