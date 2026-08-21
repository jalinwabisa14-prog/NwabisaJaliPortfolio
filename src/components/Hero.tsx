import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Hero() {
  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-azure-900">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-400/10 border border-pink-400/20 text-pink-400 text-sm font-medium mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
          Available immediately
        </div>

        <p className="text-pink-400 text-sm sm:text-base font-semibold uppercase tracking-[0.25em] mb-5">
          BCom Marketing Management
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
          Nwabisa Queen{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
            Jali
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-slate-400 font-medium mb-4">
          Brand &amp; Campaign Specialist
        </p>
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          A marketing management graduate with hands-on experience in retail
          merchandising and EdTech product development. I turn research,
          consumer insight, and initiative into practical campaign ideas.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <button onClick={() => handleScroll('#experience')} className="px-7 py-3.5 bg-purple-500 hover:bg-pink-400 text-slate-900 font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-purple-500/25 hover:-translate-y-0.5">
            Explore My Experience
          </button>
          <button onClick={() => handleScroll('#download-cv')} className="inline-flex items-center gap-2 px-7 py-3.5 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5">
            Download CV
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 mb-16 text-sm text-slate-400">
          <a href="mailto:jali.nwabisa14@gmail.com" className="inline-flex items-center gap-2 hover:text-pink-400 transition-colors">
            <Mail size={16} className="text-pink-400" />
            jali.nwabisa14@gmail.com
          </a>
          <a href="tel:+27730224379" className="inline-flex items-center gap-2 hover:text-pink-400 transition-colors">
            <Phone size={16} className="text-pink-400" />
            073 022 4379
          </a>
        </div>

        <div className="flex items-center justify-center gap-4 mb-16">
          {[
            { Icon: Linkedin, href: 'https://linkedin.com/in/nwabisa-jali-136b67338', label: 'LinkedIn' },
            { Icon: Github, href: 'https://github.com/jalinwabisa14-prog', label: 'GitHub' },
            { Icon: Mail, href: 'mailto:jali.nwabisa14@gmail.com', label: 'Email' },
          ].map(({ Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="w-11 h-11 flex items-center justify-center rounded-xl border border-slate-700 text-slate-400 hover:text-pink-400 hover:border-pink-400/50 hover:bg-pink-400/5 transition-all duration-200">
              <Icon size={20} />
            </a>
          ))}
        </div>

        <button onClick={() => handleScroll('#about')} className="text-slate-500 hover:text-pink-400 transition-colors animate-bounce" aria-label="Scroll down">
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
}
