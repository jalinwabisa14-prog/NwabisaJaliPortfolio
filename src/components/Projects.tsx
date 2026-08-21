import { ArrowUpRight, Lightbulb, MapPinned, ShoppingBag, Users } from 'lucide-react';
import { SectionHeader } from '@/components/About';

const projects = [
  {
    title: 'School2gether',
    subtitle: 'EdTech start-up · Project Manager & Co-Founder',
    description: 'A South African education technology platform connecting learners, tutors, and parents.',
    image: 'https://images.pexels.com/photos/7688106/pexels-photo-7688106.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: Users,
    tags: ['Market research', 'Product-market fit', 'Go-to-market strategy', 'Investor pitch'],
    featured: true,
  },
  {
    title: 'The Konnect Marketing Plan',
    subtitle: 'Academic marketing project · Go-to-market strategy',
    description: 'A complete go-to-market strategy for a fictional hyperlocal services app connecting Johannesburg residents with vetted local service providers — plumbers, tutors, and cleaners. The plan demonstrates practical marketing planning skills end to end, from market opportunity through competitor analysis, target audience segmentation, positioning via the marketing mix, digital channel strategy, budgeting, and KPI setting, all mapped to a 12-month execution timeline.',
    image: 'https://images.pexels.com/photos/7710139/pexels-photo-7710139.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: MapPinned,
    tags: ['Go-to-market strategy', 'Market & competitor analysis', 'Audience segmentation', 'Marketing mix', 'Digital channel strategy', 'Budgeting & KPIs'],
    featured: true,
  },
  {
    title: 'Retail product placement',
    subtitle: 'Shoprite P.F.M · Merchandiser',
    description: 'In-store product displays designed to improve shelf visibility and support category sales.',
    image: 'https://images.pexels.com/photos/8764356/pexels-photo-8764356.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: ShoppingBag,
    tags: ['Merchandising', 'Consumer behaviour', 'Supplier collaboration', 'Store presentation'],
    featured: false,
  },
  {
    title: 'Bookings operations',
    subtitle: 'RSA Group · Booking Clerk',
    description: 'Customer-facing booking administration with accurate records, payments, confirmations, and issue resolution.',
    image: 'https://images.pexels.com/photos/31112222/pexels-photo-31112222.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: Lightbulb,
    tags: ['Customer service', 'Records management', 'Payment records', 'Problem solving'],
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-azure-950">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="Selected Work" title="Experience in action" />
        <div className="grid md:grid-cols-2 gap-7">
          {projects.map(project => <ProjectCard key={project.title} project={project} />)}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: typeof projects[number] }) {
  const Icon = project.icon;
  return (
    <article className={`group rounded-2xl overflow-hidden bg-azure-900 border border-slate-800 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/5 flex flex-col ${project.featured ? 'md:col-span-2 md:flex-row' : ''}`}>
      <div className={`${project.featured ? 'md:w-2/5 md:h-auto' : 'h-48'} relative overflow-hidden`}>
        <img src={project.image} alt={project.title} className="w-full h-full min-h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 to-transparent" />
        {project.featured && <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold bg-purple-500 text-slate-900 rounded-full">Featured</span>}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-pink-400/10 text-pink-400 flex-shrink-0"><Icon size={17} /></div>
          <div>
            <h3 className="text-white font-bold group-hover:text-pink-400 transition-colors">{project.title}</h3>
            <p className="text-slate-500 text-xs mt-0.5">{project.subtitle}</p>
          </div>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map(tag => <span key={tag} className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-800 text-slate-400 border border-slate-700">{tag}</span>)}
        </div>
        <a href="#contact" className="inline-flex items-center gap-1.5 text-sm text-pink-400 hover:text-pink-300 transition-colors pt-4 border-t border-slate-800">Discuss this experience <ArrowUpRight size={14} /></a>
      </div>
    </article>
  );
}
