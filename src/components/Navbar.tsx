import { useEffect, useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'CV', href: '#download-cv' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      for (const id of [...links.map(link => link.href.slice(1))].reverse()) {
        const element = document.getElementById(id);
        if (element && window.scrollY >= element.offsetTop - 120) { setActive(id); break; }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-azure-900/95 backdrop-blur-md shadow-lg shadow-azure-900/20' : 'bg-transparent'}`}>
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={() => handleNav('#home')} className="flex items-center gap-2 font-bold text-white text-lg tracking-tight hover:text-pink-400 transition-colors">
          <Sparkles size={20} className="text-pink-400" />Nwabisa Jali
        </button>
        <ul className="hidden md:flex items-center gap-1">
          {links.map(({ label, href }) => (
            <li key={href}>
              <button onClick={() => handleNav(href)} className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${active === href.slice(1) ? 'text-pink-400 bg-pink-400/10' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}>
                {label}
              </button>
            </li>
          ))}
        </ul>
        <button onClick={() => setOpen(!open)} className="md:hidden text-slate-300 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors" aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-azure-900/98 backdrop-blur-md border-t border-slate-800">
          <ul className="px-4 py-3 flex flex-col gap-1">
            {links.map(({ label, href }) => (
              <li key={href}>
                <button onClick={() => handleNav(href)} className={`w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-all ${active === href.slice(1) ? 'text-pink-400 bg-pink-400/10' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}>
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
