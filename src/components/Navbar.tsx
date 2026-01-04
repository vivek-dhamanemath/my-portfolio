import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-8 left-1/2 z-50 flex -translate-x-1/2 items-center gap-8 rounded-full border border-zinc-200 bg-white/80 px-8 py-3.5 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
            <Link href="/" className="font-serif text-lg font-medium tracking-tight text-zinc-900 dark:text-zinc-100">Vivek Dhamanemath</Link>
            <div className="h-4 w-[1px] bg-zinc-200 dark:bg-zinc-800" />
            <Link href="/#home" className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors">Home</Link>
            <Link href="/#about" className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors">About</Link>
            <Link href="/#projects" className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors">Projects</Link>
            <Link href="/#contact" className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors">Contact</Link>
        </nav>
    );
}
