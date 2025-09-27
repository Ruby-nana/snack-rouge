"use client"
import Link from 'next/link'
import type { Route } from 'next'
import { useState } from 'react'

type NavItem = { href: Route; label: string }

const links: NavItem[] = [
  { href: '/', label: 'ホーム' },
  { href: '/', label: '店舗情報' },
  { href: '/', label: 'ママの紹介' },
  { href: '/', label: '料金システム' },
  { href: '/', label: 'アクセス' },
  { href: '/', label: 'お問い合わせ' },
]

const hashes = ['home','info','mama','pricing','access','contact'] as const

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/90 border-b border-black/5">
      <div className="container flex items-center justify-between py-2">
        <a href="#home" className="flex items-center gap-2 no-underline text-ink" aria-label="トップへ">
          <span className="grid place-items-center w-8 h-8 rounded-full bg-primary text-white font-bold">R</span>
          <span className="font-semibold tracking-wide">スナック Rouge</span>
        </a>
        <button aria-expanded={open} aria-controls="site-nav" aria-label="メニュー" onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md">
          <span className="sr-only">メニュー</span>
          <div className="w-6 h-0.5 bg-ink mb-1" />
          <div className="w-6 h-0.5 bg-ink mb-1" />
          <div className="w-6 h-0.5 bg-ink" />
        </button>
        <nav id="site-nav" className="hidden md:block" aria-label="メインメニュー">
          <ul className="flex gap-2 m-0 p-0 list-none">
            {links.map((l, i) => {
              const to = { pathname: l.href, hash: hashes[i] }
              const key = `${l.href}#${hashes[i]}`
              return (
                <li key={key}><Link href={to} className="nav-link">{l.label}</Link></li>
              )
            })}
          </ul>
        </nav>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <ul className="container py-2 grid gap-1">
            {links.map((l, i) => {
              const to = { pathname: l.href, hash: hashes[i] }
              const key = `${l.href}#${hashes[i]}`
              return (
                <li key={key}><Link href={to} className="nav-link w-full" onClick={() => setOpen(false)}>{l.label}</Link></li>
              )
            })}
          </ul>
        </div>
      )}
    </header>
  )
}
