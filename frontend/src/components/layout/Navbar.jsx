import { Menu, Sparkles } from 'lucide-react';

const navItems = ['Home', 'Features', 'About'];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2 text-lg font-semibold text-white">
          <div className="rounded-xl bg-emerald-500/20 p-2 text-emerald-400">
            <Sparkles size={18} />
          </div>
          FitTrack
        </a>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-emerald-400">
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href="#" className="text-sm font-medium text-slate-300 transition hover:text-white">Login</a>
          <a href="#" className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
            Get Started
          </a>
        </div>

        <button className="rounded-full border border-white/10 p-2 text-slate-300 md:hidden">
          <Menu size={18} />
        </button>
      </div>
    </header>
  );
}
