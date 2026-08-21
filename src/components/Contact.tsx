import { useState } from 'react';
import { CircleCheck as CheckCircle, Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { SectionHeader } from '@/components/About';

const channels = [
  { Icon: Mail, label: 'Email', value: 'jali.nwabisa14@gmail.com', href: 'mailto:jali.nwabisa14@gmail.com' },
  { Icon: Phone, label: 'Phone', value: '073 022 4379 · 083 687 4565', href: 'tel:+27730224379' },
  { Icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/nwabisa-jali-136b67338', href: 'https://linkedin.com/in/nwabisa-jali-136b67338' },
  { Icon: Github, label: 'GitHub', value: 'github.com/jalinwabisa14-prog', href: 'https://github.com/jalinwabisa14-prog' },
  { Icon: MapPin, label: 'Location', value: 'Orlando East, Soweto, South Africa', href: null },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(previous => ({ ...previous, [event.target.name]: event.target.value }));
    setError('');
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.message) { setError('Please fill in all required fields.'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { setError('Please enter a valid email address.'); return; }
    const subject = encodeURIComponent(form.subject || `Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:jali.nwabisa14@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 bg-azure-900">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="Contact" title="Let's connect" />
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">I am immediately available for internships, part-time, or full-time roles in marketing, brand support, campaign planning, and related fields.</p>
            <ul className="space-y-5">{channels.map(({ Icon, label, value, href }) => <li key={label} className="flex items-center gap-4"><div className="w-11 h-11 flex items-center justify-center rounded-xl bg-pink-400/10 text-pink-400 flex-shrink-0"><Icon size={18} /></div><div><p className="text-slate-500 text-xs uppercase tracking-wider">{label}</p>{href ? <a href={href} target={href.startsWith('mailto') || href.startsWith('tel') ? undefined : '_blank'} rel="noreferrer" className="text-slate-300 hover:text-pink-400 transition-colors font-medium text-sm">{value}</a> : <p className="text-slate-300 font-medium text-sm">{value}</p>}</div></li>)}</ul>
          </div>
          <div>
            {sent ? <div className="h-full flex flex-col items-center justify-center text-center py-16 px-6 rounded-2xl bg-slate-800/40 border border-purple-500/20"><div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple-500/10 text-pink-400 mb-5"><CheckCircle size={32} /></div><h3 className="text-white font-bold text-xl mb-2">Your email app is ready</h3><p className="text-slate-400 text-sm">Complete the message in your email app and send it to Nwabisa.</p></div> : <form onSubmit={handleSubmit} className="space-y-5"><div className="grid sm:grid-cols-2 gap-5"><Field label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required /><Field label="Email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required /></div><Field label="Subject" name="subject" value={form.subject} onChange={handleChange} placeholder="What would you like to discuss?" /><div><label className="block text-slate-400 text-xs font-medium uppercase tracking-wider mb-2">Message <span className="text-pink-400">*</span></label><textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Tell me about the opportunity..." className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all text-sm resize-none" /></div>{error && <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 px-4 py-3 rounded-xl">{error}</p>}<button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-purple-500 hover:bg-pink-400 text-slate-900 font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-purple-500/20 hover:-translate-y-0.5"><Send size={16} /> Open Email Draft</button></form>}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, value, onChange, placeholder, required = false }: { label: string; name: string; value: string; onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; placeholder: string; required?: boolean }) {
  return <div><label className="block text-slate-400 text-xs font-medium uppercase tracking-wider mb-2">{label} {required && <span className="text-pink-400">*</span>}</label><input name={name} value={value} onChange={onChange} placeholder={placeholder} className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all text-sm" /></div>;
}
