"use client"
import Link from 'next/link'
import { useState } from 'react'

const links: { href: string; label: string }[] = [
  { href: '#home', label: 'ホーム' },
  { href: '#info', label: '店舗情報' },
  { href: '#mama', label: 'ママの紹介' },
  { href: '#pricing', label: '料金システム' },
  { href: '#access', label: 'アクセス' },
  { href: '#contact', label: 'お問い合わせ' },
]

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
            {links.map(l => (
              <li key={l.href}><Link href={l.href as string} className="nav-link">{l.label}</Link></li>
            ))}
          </ul>
        </nav>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <ul className="container py-2 grid gap-1">
            {links.map(l => (
              <li key={l.href}><Link href={l.href as string} className="nav-link w-full" onClick={() => setOpen(false)}>{l.label}</Link></li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

