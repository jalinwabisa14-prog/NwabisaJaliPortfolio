import { Award, BookOpen, GraduationCap, Languages, MapPin } from 'lucide-react';
import { SectionHeader } from '@/components/About';

const education = [
  {
    degree: 'BCom Marketing Management',
    institution: 'University of Johannesburg',
    period: 'Completed 2025',
    highlights: ['Marketing Management', 'Business Management', 'Logistics Management', 'Financial Management', 'Accounting', 'Economics'],
  },
  {
    degree: 'National Senior Certificate',
    institution: 'Thaba Jabula Secondary School',
    period: 'Completed 2022',
    highlights: ['Mathematics', 'Geography', 'Physical & Life Sciences', 'English (FAL)', 'IsiXhosa (HL)', 'Life Orientation'],
  },
];

const certifications = [
  { name: 'Bachelor of Commerce in Marketing Management', issuer: 'University of Johannesburg', year: '2025', color: 'from-pink-500/20 to-purple-500/20', border: 'border-pink-500/20', badge: 'bg-pink-500/10 text-pink-400' },
  { name: 'Artelligence in the 4IR', issuer: 'Professional Development', year: '2024', color: 'from-purple-500/20 to-blue-500/20', border: 'border-purple-500/20', badge: 'bg-purple-500/10 text-purple-400' },
  { name: 'Advanced Information Technology', issuer: 'Professional Development', year: '2024', color: 'from-blue-500/20 to-pink-500/20', border: 'border-blue-500/20', badge: 'bg-blue-500/10 text-blue-400' },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-azure-900">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="Education & Certifications" title="Background and credentials" />
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-3 mb-8"><div className="w-10 h-10 flex items-center justify-center rounded-xl bg-pink-400/10 text-pink-400"><GraduationCap size={20} /></div><h3 className="text-white font-semibold text-lg">Education</h3></div>
            <div className="relative pl-6 border-l border-slate-800 space-y-8">
              {education.map(edu => (
                <div key={edu.degree} className="relative">
                  <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-purple-500 border-2 border-slate-900 ring-4 ring-purple-500/20" />
                  <div className="p-5 rounded-2xl bg-slate-800/40 border border-slate-700/40 hover:border-purple-500/20 transition-colors">
                    <h4 className="text-white font-bold mb-1">{edu.degree}</h4>
                    <p className="text-pink-400 text-sm mb-1">{edu.institution}</p>
                    <p className="text-slate-500 text-xs mb-4">{edu.period}</p>
                    <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">Relevant subjects</p>
                    <div className="flex flex-wrap gap-2">{edu.highlights.map(item => <span key={item} className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-400 text-xs">{item}</span>)}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 mt-10 mb-6"><div className="w-10 h-10 flex items-center justify-center rounded-xl bg-pink-400/10 text-pink-400"><Award size={20} /></div><h3 className="text-white font-semibold text-lg">Certifications</h3></div>
            <div className="space-y-4">
              {certifications.map(cert => (
                <div key={cert.name} className={`p-4 rounded-xl bg-gradient-to-r ${cert.color} border ${cert.border} hover:scale-[1.02] transition-transform duration-200`}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-semibold text-sm leading-snug mb-1">{cert.name}</p>
                      <p className="text-slate-400 text-xs">{cert.issuer}</p>
                    </div>
                    <span className={`text-xs px-2.5 py-1 rounded-lg font-medium flex-shrink-0 ${cert.badge}`}>{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8"><div className="w-10 h-10 flex items-center justify-center rounded-xl bg-pink-400/10 text-pink-400"><BookOpen size={20} /></div><h3 className="text-white font-semibold text-lg">Additional information</h3></div>
            <div className="space-y-4">
              <InfoCard Icon={Languages} label="Languages" value="IsiXhosa (Native) · English (Fluent) · Sepedi (Conversational)" />
              <InfoCard Icon={MapPin} label="Citizenship" value="South African" />
              <InfoCard Icon={BookOpen} label="Availability" value="Immediately available for internships, part-time, or full-time roles" />
            </div>
            <div className="mt-8 p-5 rounded-2xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-purple-500/20">
              <p className="text-slate-300 text-sm leading-relaxed">With a foundation in marketing, business, logistics, finance, accounting, and economics, I am ready to contribute across brand, campaign, and customer-focused teams.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ Icon, label, value }: { Icon: typeof Languages; label: string; value: string }) {
  return <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-800/40 border border-slate-700/40"><div className="w-10 h-10 flex items-center justify-center rounded-xl bg-pink-400/10 text-pink-400 flex-shrink-0"><Icon size={18} /></div><div><p className="text-slate-500 text-xs uppercase tracking-wider mb-1">{label}</p><p className="text-slate-300 text-sm leading-relaxed">{value}</p></div></div>;
}
