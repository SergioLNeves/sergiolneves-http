"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

// ── Types ────────────────────────────────────────────────────────────────────

export type GlyphVariant =
  | "brutalist"
  | "pixel"
  | "bitmap"
  | "drawn"
  | "serif"
  | "thin"
  | "svg-polygon-o"
  | "svg-pixel-o"
  | "svg-pixel-eye"
  | "svg-pixel-r"
  | "svg-thin-l"
  | "svg-fork-i"
  | "svg-star"

export type RansomTitleProps = {
  text: string
  as?: "h1" | "h2" | "h3" | "h4" | "span" | "div"
  mode?: "deterministic" | "random"
  enableSvgWildcards?: boolean
  randomizeOnHover?: boolean
  customMap?: Record<number, GlyphVariant>
  className?: string
} & Omit<React.HTMLAttributes<HTMLElement>, "children">

// ── Constants ─────────────────────────────────────────────────────────────────

const FONT_VARIANTS: GlyphVariant[] = [
  "brutalist",
  "pixel",
  "bitmap",
  "drawn",
  "serif",
  "thin",
]

const VARIANT_CLASSES: Record<string, string> = {
  brutalist: "font-['Anton'] uppercase tracking-tighter text-[1em] leading-none",
  pixel:     "font-['Silkscreen'] uppercase text-[0.88em] tracking-tighter leading-none",
  bitmap:    "font-['VT323'] uppercase text-[1.1em] leading-none",
  drawn:     "font-['Gloria_Hallelujah'] text-[1.35em] leading-none",
  serif:     "font-['Playfair_Display'] font-black text-[0.97em] tracking-tight leading-none",
  thin:      "font-['Cormorant_Garamond'] font-light text-[1.08em] leading-none",
}

// ── SVG Wildcards ─────────────────────────────────────────────────────────────

function SvgPolygonO() {
  return (
    <svg
      viewBox="0 0 140 180"
      className="inline-block h-[0.72em] w-[0.56em] fill-current align-baseline"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35,15 L105,12 L120,28 L128,60 L125,120 L115,160 L85,172 L40,168 L18,150 L12,95 L18,40 Z M45,35 L34,75 L36,115 L52,142 L88,145 L104,120 L106,65 L94,36 L70,30 Z"
      />
    </svg>
  )
}

function SvgPixelO() {
  return (
    <svg
      viewBox="0 0 13 18"
      className="inline-block h-[0.72em] w-[0.52em] fill-current align-baseline [shape-rendering:crispEdges]"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M3,0 H10 V2 H12 V4 H13 V14 H12 V16 H10 V18 H3 V16 H1 V14 H0 V4 H1 V2 H3 Z M3,3 H10 V15 H3 Z"
      />
    </svg>
  )
}

function SvgPixelEye() {
  return (
    <span
      className="inline-flex h-[0.72em] w-[0.72em] -rotate-3 items-center justify-center bg-current align-baseline [clip-path:polygon(15%_0%,85%_0%,100%_15%,100%_85%,85%_100%,15%_100%,0%_85%,0%_15%)]"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-[60%] w-[60%] [shape-rendering:crispEdges]"
        style={{ fill: 'var(--background)' }}
      >
        <path d="M4 11h16v2H4zm2-2h12v2H6zm2-2h8v2H8zm0 6h8v2H8zm2-8h4v2h-4zm0 10h4v2h-4zM11 11h2v2h-2z" />
      </svg>
    </span>
  )
}

function SvgPixelR() {
  return (
    <svg
      viewBox="0 0 13 18"
      className="inline-block h-[0.72em] w-[0.52em] fill-current align-baseline [shape-rendering:crispEdges]"
      aria-hidden="true"
    >
      <path d="M0,0 H11 V8 H8 V9 H6 V8 H3 V18 H0 Z M3,3 H8 V6 H3 Z M6,9 H9 V12 H6 Z M9,12 H12 V18 H9 Z" />
    </svg>
  )
}

function SvgThinL() {
  return (
    <svg
      viewBox="0 0 45 180"
      className="inline-block h-[0.72em] w-[0.18em] fill-current align-baseline"
      aria-hidden="true"
    >
      <path d="M5,10 H35 V16 H23 V165 H38 V172 H10 V165 H17 V16 H5 Z" />
    </svg>
  )
}

function SvgForkI() {
  return (
    <svg
      viewBox="0 0 50 180"
      className="inline-block h-[0.72em] w-[0.24em] fill-current align-baseline"
      aria-hidden="true"
    >
      <path d="M8,10 L15,18 H22 V162 L12,170 H20 L25,162 L30,170 H38 L28,162 V18 H35 L42,10 H32 L25,18 L18,10 Z" />
    </svg>
  )
}

function SvgStar() {
  return (
    <svg
      viewBox="0 0 140 180"
      className="inline-block h-[0.72em] w-[0.56em] fill-current align-baseline"
      aria-hidden="true"
    >
      <g transform="translate(70, 95)">
        <rect x="-10" y="-75" width="20" height="150" />
        <rect x="-10" y="-75" width="20" height="150" transform="rotate(45)" />
        <rect x="-10" y="-75" width="20" height="150" transform="rotate(90)" />
        <rect x="-10" y="-75" width="20" height="150" transform="rotate(135)" />
      </g>
    </svg>
  )
}

const SVG_MAP: Record<string, React.ReactElement> = {
  "svg-polygon-o": <SvgPolygonO />,
  "svg-pixel-o": <SvgPixelO />,
  "svg-pixel-eye": <SvgPixelEye />,
  "svg-pixel-r": <SvgPixelR />,
  "svg-thin-l": <SvgThinL />,
  "svg-fork-i": <SvgForkI />,
  "svg-star": <SvgStar />,
}

// ── Algorithm ─────────────────────────────────────────────────────────────────

function hashAt(char: string, index: number, seed: number): number {
  return Math.abs(char.charCodeAt(0) * 13 + index * 7 + seed)
}

function pickVariant(
  char: string,
  index: number,
  seed: number,
  prev: GlyphVariant | null
): GlyphVariant {
  const base = hashAt(char, index, seed) % FONT_VARIANTS.length
  let chosen = FONT_VARIANTS[base]
  if (chosen === prev) {
    chosen = FONT_VARIANTS[(base + 1) % FONT_VARIANTS.length]
  }
  return chosen
}

function resolveWildcard(
  char: string,
  occurrenceIndex: number
): GlyphVariant | null {
  const upper = char.toUpperCase()
  if (upper === "*") return "svg-star"
  if (upper === "O") {
    const opts: GlyphVariant[] = ["svg-polygon-o", "svg-pixel-o", "svg-pixel-eye"]
    return opts[occurrenceIndex % opts.length]
  }
  if (upper === "R") return "svg-pixel-r"
  if (upper === "I") return "svg-fork-i"
  return null
}

// ── Component ─────────────────────────────────────────────────────────────────

export function RansomTitle({
  text,
  as: Tag = "h1",
  mode = "deterministic",
  enableSvgWildcards = false,
  randomizeOnHover = false,
  customMap = {},
  className,
  ...props
}: RansomTitleProps) {
  const [seedOffset, setSeedOffset] = React.useState(0)

  React.useEffect(() => {
    if (mode === "random") {
      setSeedOffset(Math.floor(Math.random() * 9973))
    }
  }, [mode])

  const glyphs = React.useMemo(() => {
    const occurrences: Record<string, number> = {}
    let prev: GlyphVariant | null = null

    return Array.from(text).map((char, index) => {
      if (char === " ") return { char, variant: null as unknown as GlyphVariant }

      const upper = char.toUpperCase()
      occurrences[upper] = (occurrences[upper] ?? -1) + 1

      let variant: GlyphVariant

      if (customMap[index] !== undefined) {
        variant = customMap[index]
      } else if (enableSvgWildcards) {
        const wildcard = resolveWildcard(char, occurrences[upper])
        variant = wildcard ?? pickVariant(char, index, seedOffset, prev)
      } else {
        variant = pickVariant(char, index, seedOffset, prev)
      }

      prev = variant
      return { char, variant }
    })
  }, [text, enableSvgWildcards, seedOffset, customMap])

  const handleMouseEnter = React.useCallback(() => {
    if (randomizeOnHover) {
      setSeedOffset((s) => s + 1)
    }
  }, [randomizeOnHover])

  return (
    <Tag
      aria-label={text}
      className={cn("flex items-center gap-x-[0.01em]", className)}
      onMouseEnter={handleMouseEnter}
      {...props}
    >
      {glyphs.map(({ char, variant }, index) => {
        if (char === " ") {
          return (
            <span key={index} aria-hidden="true" className="select-none w-[0.3em]" />
          )
        }

        const isSvg = variant?.startsWith("svg-")

        const duration = 3.5 + (hashAt(char, index, 0) % 16) * 0.2
        const delay = -((hashAt(char, index, 99) % 35) * 0.1)

        return (
          <span
            key={index}
            aria-hidden="true"
            className={cn(
              "select-none inline-flex items-baseline",
              !isSvg && VARIANT_CLASSES[variant]
            )}
            style={{
              animationName: 'letter-float',
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              animationTimingFunction: 'cubic-bezier(0.37, 0, 0.63, 1)',
              animationIterationCount: 'infinite',
            }}
          >
            {isSvg ? SVG_MAP[variant] : char}
          </span>
        )
      })}
    </Tag>
  )
}
