import { ReactNode } from 'react'

export default function Section({ id, title, lead, children }: { id: string, title: string, lead?: string, children: ReactNode }) {
  return (
    <section id={id} className="py-14 scroll-mt-20">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold border-l-4 pl-3 border-primary leading-tight">{title}</h2>
        {lead && <p className="text-muted mt-1 mb-6">{lead}</p>}
        {children}
      </div>
    </section>
  )
}

