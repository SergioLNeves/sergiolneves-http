import { Outlet, createFileRoute } from '@tanstack/react-router'
import { LinkedinLogoIcon } from '@phosphor-icons/react'

export const Route = createFileRoute('/_layout')({
  component: Layout,
})

function Layout() {
  return (
    <div className="min-h-svh flex flex-col">
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-[5vw] h-16 mix-blend-multiply">
        <a
          href="https://www.linkedin.com/in/sergiolneves/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-2xl font-extrabold text-neutral-900 hover:text-[#0A66C2] transition-colors"
        >
          SergioLNeves
          <LinkedinLogoIcon size={22} weight="fill" />
        </a>
        <nav>
          <a
            href="mailto:sergioluiz852@gmail.com"
            className="font-mono text-[11px] tracking-widest lowercase text-neutral-400 hover:text-neutral-900 transition-colors"
          >
            contato
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}
