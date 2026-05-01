import { data } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-bg-deep py-8 px-6 md:px-10 lg:px-16">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-mono text-[10px] tracking-[0.1em] text-text-secondary">
          © {new Date().getFullYear()} {data.name} · All rights reserved
        </div>
        <div className="font-mono text-[10px] tracking-[0.1em] text-text-secondary">
          {data.siteUrl.replace('https://', '')}
        </div>
        <div className="flex items-center gap-4">
          <a href="https://trubluesolution.com" target="_blank" rel="noopener noreferrer"
             className="font-mono text-[10px] tracking-[0.12em] uppercase text-amber-text/70 hover:text-amber-glow transition-colors">
            Trublue Solution →
          </a>
          <span aria-hidden="true" className="text-text-secondary">·</span>
          <a href={data.linkedin} target="_blank" rel="noopener noreferrer"
             className="font-mono text-[10px] tracking-[0.12em] uppercase text-text-secondary hover:text-amber-text transition-colors">
            LinkedIn
          </a>
          <span aria-hidden="true" className="text-text-secondary">·</span>
          <a href={`mailto:${data.email}`}
             className="font-mono text-[10px] tracking-[0.12em] uppercase text-text-secondary hover:text-amber-text transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
