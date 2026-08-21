import { ArrowUp, Github, Linkedin, Mail, Phone, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-azure-950 border-t border-slate-800 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-slate-400">
          <Sparkles size={18} className="text-pink-400" />
          <span className="text-sm">© {new Date().getFullYear()} Nwabisa Queen Jali</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://linkedin.com/in/nwabisa-jali-136b67338" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-500 hover:text-pink-400 transition-colors"><Linkedin size={18} /></a>
          <a href="https://github.com/jalinwabisa14-prog" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-500 hover:text-pink-400 transition-colors"><Github size={18} /></a>
          <a href="mailto:jali.nwabisa14@gmail.com" aria-label="Email" className="text-slate-500 hover:text-pink-400 transition-colors"><Mail size={18} /></a>
          <a href="tel:+27730224379" aria-label="Phone" className="text-slate-500 hover:text-pink-400 transition-colors"><Phone size={18} /></a>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top" className="ml-2 w-9 h-9 flex items-center justify-center rounded-xl bg-slate-800 hover:bg-purple-500/10 text-slate-500 hover:text-pink-400 border border-slate-700 hover:border-purple-500/30 transition-all"><ArrowUp size={16} /></button>
        </div>
      </div>
    </footer>
  );
}
