export default function ProfileSidebar() {
    return (
        <aside className="lg:col-span-5">
            <div className="group relative overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-2">
                <div className="aspect-[4/5] overflow-hidden rounded-xl">
                    <img
                        src="/about/my-photo.jpg"
                        alt="Vivek Dhamanemath"
                        className="h-full w-full object-cover transition-all duration-700"
                    />
                </div>
                <div className="mt-4 p-4">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Available for Opportunities</span>
                        </div>
                        <div className="space-y-1">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Location</p>
                            <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Bengaluru, Karnataka, India</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Current Role</p>
                            <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Full-Stack Software Developer</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Company</p>
                            <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">C-DAC: Centre for Development of Advanced Computing, India
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
