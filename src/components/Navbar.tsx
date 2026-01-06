import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between border-b border-zinc-200 bg-white/80 px-6 py-4 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80 sm:px-12">
            {/* Logo / Name */}
            <Link href="/" className="font-serif text-lg font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
                Vivek JD
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center gap-6 sm:gap-8">
                <Link href="/#home" className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors">Home</Link>
                <Link href="/about" className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors">About</Link>
                <Link href="/#projects" className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors">Projects</Link>
                <Link href="/#contact" className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors">Contact</Link>
            </div>
        </nav>
    );
}
