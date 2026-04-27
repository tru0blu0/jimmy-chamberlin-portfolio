export const data = {
  name: 'Jimmy Chamberlin',
  title: 'Operations Architect',
  tagline: ['Building systems', 'that scale.'],
  subtitle: 'Business Operations Leader · 16 Years · BBA',
  available: true,
  availableText: 'AVAILABLE FOR HIRE',
  email: 'jimmy@jimmychamberlin.com',
  linkedin: 'https://linkedin.com/in/jimmychamberlin',
  github: 'https://github.com/jimmychamberlin',
  location: 'United States',

  stats: [
    { value: 16, suffix: '+', label: 'Years Operations Leadership', prefix: '' },
    { value: 4, suffix: '', label: 'Industries Mastered', prefix: '' },
    { value: 85, suffix: '%', label: 'Average Process Efficiency Gain', prefix: '' },
    { value: 12, suffix: 'M', label: 'Operational Cost Savings Driven', prefix: '$' },
  ],

  experience: [
    {
      domain: 'Business DevOps',
      role: 'Senior Operations Leader',
      period: '2018–Present',
      icon: '⚙',
    },
    {
      domain: 'Logistics Operations',
      role: 'Supply Chain & Distribution Manager',
      period: '2015–2018',
      icon: '◈',
    },
    {
      domain: 'Restaurant Operations',
      role: 'Multi-Unit Operations Director',
      period: '2012–2015',
      icon: '◆',
    },
    {
      domain: 'Legal Operations',
      role: 'Operations & Process Manager',
      period: '2010–2012',
      icon: '◇',
    },
    {
      domain: 'IT Operations',
      role: 'IT Support Intern → Systems Analyst',
      period: '2008–2010',
      icon: '◉',
    },
  ],

  caseStudies: [
    {
      id: '01',
      domain: 'Business DevOps',
      company: 'Enterprise SaaS Operations',
      year: '2023',
      headline: 'Reduced deployment cycle time by 72% across 6 product teams',
      challenge:
        'Six siloed engineering teams with inconsistent release cadences, manual QA gates, and zero shared operational tooling. Each release took 3–5 days and required 12+ stakeholders to coordinate.',
      approach:
        'Mapped the full value stream, identified 8 critical bottlenecks, implemented a unified CI/CD framework, and created cross-functional runbooks that reduced coordination overhead by half.',
      results: [
        { metric: '72%', label: 'Faster release cycles' },
        { metric: '−8', label: 'Fewer coordination touchpoints' },
        { metric: '×4.1', label: 'Deployment frequency' },
        { metric: '$2.4M', label: 'Annual overhead saved' },
      ],
      tags: ['Process Engineering', 'CI/CD', 'Cross-functional Alignment', 'DevOps Culture'],
    },
    {
      id: '02',
      domain: 'Logistics Operations',
      company: 'Regional Distribution Network',
      year: '2017',
      headline: 'Rebuilt 3-state distribution operation, cutting fulfillment time in half',
      challenge:
        'A 3-state distribution operation running on paper manifests, reactive routing, and 18% order error rate. Peak season threatened a major retail contract.',
      approach:
        'Deployed real-time route optimization, digitized inbound/outbound workflows, retrained 40+ staff on new SOPs, and built a live ops dashboard for shift supervisors.',
      results: [
        { metric: '51%', label: 'Faster fulfillment' },
        { metric: '−94%', label: 'Order error reduction' },
        { metric: '40+', label: 'Staff upskilled' },
        { metric: '$3.8M', label: 'Retail contract retained' },
      ],
      tags: ['Supply Chain', 'Workflow Digitization', 'SOP Development', 'KPI Dashboards'],
    },
    {
      id: '03',
      domain: 'Restaurant Operations',
      company: 'Multi-Unit Restaurant Group',
      year: '2014',
      headline: 'Turned 3 underperforming units into top performers in 8 months',
      challenge:
        'Three locations with declining revenue, 140% annual staff turnover, inconsistent service quality, and food cost running 38% (industry target: 28–32%).',
      approach:
        'Implemented unified training program, redesigned scheduling model, introduced waste tracking system, and created unit-level P&L accountability for managers.',
      results: [
        { metric: '−28pts', label: 'Turnover reduction' },
        { metric: '31%', label: 'Food cost normalized' },
        { metric: '+22%', label: 'Revenue uplift (YoY)' },
        { metric: '×3', label: 'Units to top quartile' },
      ],
      tags: ['Multi-unit Ops', 'P&L Management', 'Training Systems', 'Cost Control'],
    },
    {
      id: '04',
      domain: 'Legal Operations',
      company: 'Regional Law Firm',
      year: '2011',
      headline: 'Designed matter intake system that cut attorney admin time by 60%',
      challenge:
        'Attorneys spending 40% of billable hours on administrative coordination — matter intake, document routing, client communication tracking — all handled ad hoc.',
      approach:
        'Mapped attorney workflow end-to-end, implemented a structured matter management system, created standardized intake templates, and trained support staff as operational buffers.',
      results: [
        { metric: '60%', label: 'Less attorney admin time' },
        { metric: '+40%', label: 'Billable capacity gained' },
        { metric: '100%', label: 'Client intake standardized' },
        { metric: '$1.2M', label: 'Recoverable revenue unlocked' },
      ],
      tags: ['Legal Ops', 'Process Design', 'Capacity Planning', 'Document Systems'],
    },
  ],

  approach: [
    {
      step: '01',
      title: 'Map the System',
      description:
        'Before changing anything, I map the full value stream — every handoff, bottleneck, and assumption baked into current operations. Clarity precedes action.',
    },
    {
      step: '02',
      title: 'Identify Leverage Points',
      description:
        'Not all problems are equal. I find the 20% of constraints causing 80% of drag — then sequence interventions for maximum compounding effect.',
    },
    {
      step: '03',
      title: 'Build for Ownership',
      description:
        'Systems without ownership fail at handoff. Every solution I build includes documentation, training, and accountability structures so teams own what they run.',
    },
    {
      step: '04',
      title: 'Measure and Iterate',
      description:
        'Gut feel is not a KPI. I define clear metrics before starting, track them rigorously, and iterate based on evidence — not assumption.',
    },
  ],

  skills: [
    'Process Engineering', 'Value Stream Mapping', 'KPI / OKR Frameworks',
    'Cross-functional Leadership', 'P&L Ownership', 'SOPs & Playbooks',
    'CI/CD & DevOps Culture', 'Supply Chain Ops', 'Workforce Development',
    'Legal & Compliance Ops', 'IT Systems Analysis', 'Change Management',
    'Capacity Planning', 'Vendor Management', 'Executive Reporting',
  ],

  credibilityMarquee: [
    'Business DevOps', '·', 'Logistics Ops', '·', 'Restaurant Ops', '·',
    'Legal Ops', '·', 'IT Operations', '·', 'BBA Graduate', '·',
    '16 Years Leadership', '·', 'Process Engineering', '·',
    'P&L Management', '·', 'Cross-functional Teams', '·',
  ],
}
