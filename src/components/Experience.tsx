import { Briefcase } from 'lucide-react';
import { SectionHeader } from '@/components/About';

const jobs = [
  {
    role: 'Project Manager & Co-Founder',
    company: 'School2gether',
    period: '1 Year Contract',
    type: 'EdTech project',
    description: 'Conceptualised and led the development of a South African education technology platform connecting learners, tutors, and parents.',
    achievements: [
      'Conducted market research and competitor analysis across the South African EdTech sector',
      'Developed the marketing strategy, including objectives, target segments, pricing, and promotions',
      'Designed the app concept, user experience flows, and functional framework with accessibility as a core principle',
      'Pitched the business to potential investors and education sector partners',
    ],
    tech: ['Market research', 'Campaign planning', 'Product strategy', 'Stakeholder presentations'],
  },
  {
    role: 'Merchandiser',
    company: 'Shoprite P.F.M',
    period: '1 Year Contract',
    type: 'Retail marketing',
    description: 'Supported in-store product visibility and category presentation through merchandising and cross-functional collaboration.',
    achievements: [
      'Designed and executed in-store product displays that improved shelf visibility',
      'Collaborated with suppliers and store teams to maintain optimal stock levels',
      'Applied consumer buying behaviour insights to position products for engagement and conversion',
    ],
    tech: ['Retail merchandising', 'Product placement', 'Consumer insight', 'Supplier collaboration'],
  },
  {
    role: 'Booking Clerk',
    company: 'RSA Group',
    period: '2 Years',
    type: 'Customer operations',
    description: 'Managed booking administration and customer queries while maintaining accurate digital and paper records.',
    achievements: [
      'Issued booking confirmations, tickets, and reference numbers',
      'Handled cash, invoices, and payment records related to bookings',
      'Answered customer queries in person, by phone, and via email',
      'Resolved booking conflicts, cancellations, and changes with care and accuracy',
    ],
    tech: ['Customer service', 'Records management', 'Payment administration', 'Problem solving'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-azure-950">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="Work Experience" title="Where I have contributed" />
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-pink-400/10 text-pink-400"><Briefcase size={20} /></div>
          <p className="text-slate-400 text-sm">Marketing, retail, EdTech, and customer operations experience</p>
        </div>
        <div className="relative pl-6 border-l border-slate-800 space-y-10">
          {jobs.map(job => (
            <div key={job.company} className="relative group">
              <div className="absolute -left-[25px] top-5 w-4 h-4 rounded-full bg-slate-700 border-2 border-slate-900 ring-4 ring-slate-800 group-hover:bg-purple-500 group-hover:ring-purple-500/20 transition-all" />
              <div className="p-6 rounded-2xl bg-azure-900 border border-slate-800 hover:border-purple-500/30 transition-all duration-300">
                <div className="flex flex-wrap items-start gap-3 mb-4">
                  <div className="flex-1 min-w-0"><h3 className="text-white font-bold text-lg">{job.role}</h3><p className="text-pink-400 font-medium">{job.company}</p></div>
                  <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center flex-shrink-0"><span className="text-xs px-2.5 py-1 rounded-lg font-medium bg-purple-500/10 text-pink-400">{job.type}</span><span className="text-xs text-slate-500 bg-slate-800 px-2.5 py-1 rounded-lg">{job.period}</span></div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{job.description}</p>
                <ul className="space-y-2 mb-5">{job.achievements.map(achievement => <li key={achievement} className="flex items-start gap-2 text-slate-400 text-sm"><span className="text-purple-500 font-bold mt-0.5 flex-shrink-0">+</span>{achievement}</li>)}</ul>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">{job.tech.map(skill => <span key={skill} className="px-2.5 py-1 text-xs rounded-lg bg-slate-800 text-slate-400 border border-slate-700">{skill}</span>)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
