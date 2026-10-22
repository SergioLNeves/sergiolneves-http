import { createFileRoute } from '@tanstack/react-router'
import { RansomTitle } from '@/components/ui/ransom-title'

export const Route = createFileRoute('/_layout/')({
  component: PortfolioPage,
})

function PortfolioPage() {
  return (
    <section className="relative h-svh min-h-[560px] flex items-center justify-center overflow-hidden bg-[#f5f5f0]">
      <RansomTitle
        as="h1"
        text="PORTFOLIO"
        enableSvgWildcards
        className="absolute inset-0 items-center justify-center m-0 text-[clamp(64px,16vw,280px)] text-neutral-900 whitespace-nowrap select-none -translate-y-[8%]"
      />

      {/*<div className="relative z-10 flex items-center gap-[clamp(10px,1.4vw,22px)] px-[3vw]">
        {projects.map((project) => (
          <Link
            key={project.id}
            to="/projects/$projectId"
            params={{ projectId: project.id }}
            className="block flex-shrink-0 w-[clamp(110px,11.5vw,175px)] transition-[transform,filter] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
            style={
              {
                transform: `rotate(${project.rotation}deg) translateY(${project.offsetY}px)`,
              } as CSSProperties
            }
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = `rotate(${project.rotation * 0.4}deg) translateY(${project.offsetY - 16}px) scale(1.04)`
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = `rotate(${project.rotation}deg) translateY(${project.offsetY}px)`
            }}
          >
            <div
              className="w-full aspect-[3/4] rounded-[3px] relative shadow-[2px_6px_22px_rgba(0,0,0,0.22)] overflow-hidden"
              style={{ background: project.color }}
            >
              <span
                className="absolute top-2.5 left-2.5 font-mono text-[10px] font-semibold tracking-[0.05em]"
                style={{ color: project.light ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.35)' }}
              >
                {project.tag}
              </span>
              <span
                className="absolute bottom-2.5 right-2.5 font-mono text-[8px] tracking-[0.06em]"
                style={{ color: project.light ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.3)' }}
              >
                {project.year}
              </span>
            </div>
            <div className="pt-2 px-0.5 flex flex-col gap-0.5">
              <span className="font-mono text-[8px] uppercase tracking-[0.09em] text-neutral-400">
                {project.category}
              </span>
              <strong className="text-[11px] font-semibold text-neutral-900 leading-snug">
                {project.title}
              </strong>
            </div>
          </Link>
        ))}
      </div>*/}
    </section>
  )
}
