import { ArrowRight, Dumbbell, TrendingUp } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.25),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.18),_transparent_30%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">
            <TrendingUp size={16} />
            Smarter fitness tracking for modern lifestyles
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Elevate your fitness journey with <span className="text-emerald-400">FitTrack</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Log workouts, monitor your body weight, and stay consistent with a beautifully designed personal fitness dashboard.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#features" className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400">
              Get Started <ArrowRight size={18} />
            </a>
            <a href="#about" className="rounded-full border border-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
              Learn More
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-emerald-500/10 backdrop-blur-xl">
          <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-slate-800 to-slate-900 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Weekly Progress</p>
                <p className="mt-1 text-3xl font-semibold text-white">+12.4%</p>
              </div>
              <div className="rounded-2xl bg-emerald-500/20 p-3 text-emerald-400">
                <Dumbbell size={24} />
              </div>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-800/80 p-4">
                <p className="text-sm text-slate-400">Workouts</p>
                <p className="mt-1 text-xl font-semibold text-white">5 / 7</p>
              </div>
              <div className="rounded-2xl bg-slate-800/80 p-4">
                <p className="text-sm text-slate-400">Consistency</p>
                <p className="mt-1 text-xl font-semibold text-white">92%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
