import { SectionHeader } from '@/components/About';

const skillGroups = [
  { category: 'Brand & Campaigns', skills: ['Brand strategy support', 'Campaign planning', 'Go-to-market thinking', 'Promotional campaigns'] },
  { category: 'Research & Insight', skills: ['Consumer behaviour analysis', 'Market research', 'Competitor analysis', 'Target segments'] },
  { category: 'Retail & Digital', skills: ['Retail merchandising', 'Product placement', 'Social media engagement', 'Digital marketing trends'] },
  { category: 'Business & Collaboration', skills: ['Business pitching', 'Stakeholder presentations', 'Microsoft Excel reporting', 'Cross-functional teamwork'] },
];

const strengths = ['Initiative', 'Clear communication', 'Creative thinking', 'Adaptability', 'Organisation', 'Collaboration'];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-azure-900">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="Core Competencies" title="What I bring to a team" />

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Marketing capabilities</h3>
            <div className="grid sm:grid-cols-2 gap-5">
              {skillGroups.map(({ category, skills }) => (
                <div key={category} className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 group">
                  <h4 className="text-pink-400 font-semibold text-sm uppercase tracking-wider mb-4">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map(skill => (
                      <span key={skill} className="px-3 py-1 text-xs font-medium rounded-lg bg-slate-700/60 text-slate-300 group-hover:bg-slate-700 transition-colors">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Professional strengths</h3>
            <div className="space-y-4">
              {strengths.map((strength, index) => (
                <div key={strength} className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/40 border border-slate-700/40">
                  <span className="text-pink-400 font-semibold text-sm">0{index + 1}</span>
                  <span className="text-slate-300 font-medium">{strength}</span>
                  <span className="ml-auto w-2 h-2 rounded-full bg-pink-400" />
                </div>
              ))}
            </div>
            <div className="mt-8 p-5 rounded-2xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-purple-500/20">
              <p className="text-slate-300 text-sm leading-relaxed">
                I enjoy connecting customer needs with clear business goals, then working
                with others to turn insight into practical action.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
