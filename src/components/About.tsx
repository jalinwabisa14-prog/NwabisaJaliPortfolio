import { BriefcaseBusiness, Flag, GraduationCap, Linkedin, MapPin } from 'lucide-react';

const stats = [
  { value: '2025', label: 'BCom Graduate' },
  { value: '3', label: 'Core Experience Areas' },
  { value: '3', label: 'Certifications' },
  { value: '3', label: 'Languages Spoken' },
];

const facts = [
  { Icon: MapPin, text: 'Orlando East, Soweto, South Africa' },
  { Icon: GraduationCap, text: 'BCom Marketing Management' },
  { Icon: Flag, text: 'South African citizen' },
  { Icon: BriefcaseBusiness, text: 'Open to internships and full-time roles' },
  { Icon: Linkedin, text: 'linkedin.com/in/nwabisa-jali' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-azure-950">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="About Me" title="Marketing with purpose" />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative w-full max-w-md h-80 mx-auto lg:mx-0 overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-purple-500/10" />
              <img
                src="https://images.pexels.com/photos/7688106/pexels-photo-7688106.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Professionals collaborating on marketing strategy"
                className="relative w-full h-full object-cover border border-slate-700"
              />
              <div className="absolute inset-x-5 bottom-5 p-4 rounded-xl bg-azure-950/85 backdrop-blur-sm border border-white/10">
                <p className="text-pink-400 text-xs font-semibold uppercase tracking-widest mb-1">My approach</p>
                <p className="text-white font-medium">Research, strategy, creativity, and collaboration.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              I am a Marketing Management graduate from the University of Johannesburg
              with a practical foundation in brand support, campaign planning, market
              research, consumer behaviour, and retail merchandising.
            </p>
            <p className="text-slate-400 leading-relaxed">
              My experience includes co-founding School2gether, a South African EdTech
              platform connecting learners, tutors, and parents; supporting product
              placement at Shoprite P.F.M; and managing customer bookings and records at RSA Group.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I bring initiative, clear communication, and a willingness to learn to every
              team. I am currently seeking a marketing, brand, campaign, or related
              internship, part-time, or full-time opportunity.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {facts.map(({ Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-slate-400 text-sm">
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-pink-400/10 text-pink-400 flex-shrink-0">
                    <Icon size={15} />
                  </div>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-20">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center p-6 rounded-2xl bg-azure-900 border border-slate-800 hover:border-purple-500/30 transition-colors group">
              <div className="text-4xl font-bold text-white group-hover:text-pink-400 transition-colors mb-1">{value}</div>
              <div className="text-slate-500 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-14">
      <p className="text-pink-400 text-sm font-semibold uppercase tracking-widest mb-3">{label}</p>
      <h2 className="text-3xl sm:text-4xl font-bold text-white">{title}</h2>
      <div className="mt-4 w-12 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full" />
    </div>
  );
}
