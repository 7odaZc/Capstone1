import Link from "next/link";

export default function Header() {
  return (
    <header className="mx-auto flex w-[min(1100px,calc(100%-32px))] items-center justify-between py-6">
      <Link href="/" className="font-bold tracking-tight">
        Mahmoud<span className="text-[#7785FF]">.</span>
      </Link>
      <nav className="flex gap-5 text-sm text-[#9EACC0]">
        <Link className="hover:text-[#F4F7FB]" href="/work">Work</Link>
        <Link className="hover:text-[#F4F7FB]" href="/about">About</Link>
        <Link className="hover:text-[#F4F7FB]" href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
