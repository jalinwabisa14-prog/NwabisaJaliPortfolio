import { Download, FileText, Mail, Linkedin, Github } from 'lucide-react';
import { SectionHeader } from '@/components/About';

export default function DownloadCV() {
  return (
    <section id="download-cv" className="py-24 bg-azure-900">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="For Employers" title="Download my CV" />

        <div className="grid md:grid-cols-3 gap-6">
          {/* Main download card */}
          <div className="md:col-span-2 p-8 rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-purple-500/10 text-pink-400 flex-shrink-0">
                <FileText size={28} />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-xl mb-2">Nwabisa_Q_Jali_CV.pdf</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Full curriculum vitae including education, work experience, certifications,
                  skills, and contact details. PDF format, ready to print or forward.
                </p>
                <a
                  href="/Nwabisa_Q_Jali_CV.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-pink-400 text-slate-900 font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-purple-500/20 hover:-translate-y-0.5"
                >
                  <Download size={18} />
                  Download CV
                </a>
              </div>
            </div>
          </div>

          {/* Quick contact card */}
          <div className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/40 flex flex-col justify-center gap-4">
            <p className="text-slate-500 text-xs uppercase tracking-wider">Prefer to connect first?</p>
            <a href="mailto:jali.nwabisa14@gmail.com" className="flex items-center gap-3 text-slate-300 hover:text-pink-400 transition-colors text-sm">
              <Mail size={16} className="text-pink-400" /> Email me
            </a>
            <a href="https://linkedin.com/in/nwabisa-jali-136b67338" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-pink-400 transition-colors text-sm">
              <Linkedin size={16} className="text-pink-400" /> LinkedIn
            </a>
            <a href="https://github.com/jalinwabisa14-prog" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-pink-400 transition-colors text-sm">
              <Github size={16} className="text-pink-400" /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
