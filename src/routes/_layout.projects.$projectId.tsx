import { createFileRoute, Link } from '@tanstack/react-router'
import { getProject } from '../lib/projects'

export const Route = createFileRoute('/_layout/projects/$projectId')({
  loader: ({ params }) => {
    const project = getProject(params.projectId)
    if (!project) throw new Error('Projeto não encontrado')
    return project
  },
  component: ProjectPage,
})

function ProjectPage() {
  const project = Route.useLoaderData()

  return (
    <div className="pt-24 pb-20 px-[5vw] min-h-svh">
      <Link
        to="/"
        className="font-mono text-[11px] tracking-widest lowercase text-neutral-400 hover:text-neutral-900 transition-colors"
      >
        ← todos os projetos
      </Link>

      <div className="grid grid-cols-2 gap-[8vw] items-center mt-12 max-md:grid-cols-1 max-md:gap-8">
        <div
          className="aspect-[3/4] rounded-[4px] relative shadow-[4px_12px_40px_rgba(0,0,0,0.18)] max-md:max-w-xs"
          style={{ background: project.color }}
        >
          <span
            className="absolute top-5 left-5 font-mono text-sm font-semibold tracking-[0.05em]"
            style={{ color: project.light ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.3)' }}
          >
            {project.tag}
          </span>
        </div>

        <div className="max-w-[460px]">
          <span className="block font-mono text-[10px] uppercase tracking-[0.1em] text-neutral-400 mb-4">
            {project.category}
          </span>
          <h1 className="text-[clamp(36px,5vw,64px)] font-extrabold tracking-[-0.04em] leading-none text-neutral-900 mb-5">
            {project.title}
          </h1>
          <p className="text-sm leading-relaxed text-neutral-500 mb-8">
            {project.description}
          </p>
          <span className="font-mono text-[11px] tracking-widest text-neutral-300">
            {project.year}
          </span>
        </div>
      </div>
    </div>
  )
}
