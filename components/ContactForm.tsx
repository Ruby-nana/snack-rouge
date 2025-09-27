"use client"
import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle'|'sending'|'done'|'error'>('idle')

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    // simple client validation
    if (!data.name || !data.email || !data.message) {
      alert('未入力の項目があります。ご確認ください。')
      return
    }
    setStatus('sending')
    try {
      await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } })
      setStatus('done')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="grid gap-4" onSubmit={onSubmit} aria-describedby="contact-desc">
      <p id="contact-desc" className="text-muted">お問い合わせ内容を入力してください。送信はダミーで処理されます。</p>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="grid gap-2">
          <label htmlFor="name">お名前</label>
          <input id="name" name="name" required className="border rounded-md px-3 py-2" />
        </div>
        <div className="grid gap-2">
          <label htmlFor="email">メール</label>
          <input id="email" name="email" type="email" required className="border rounded-md px-3 py-2" />
        </div>
        <div className="grid gap-2 md:col-span-2">
          <label htmlFor="phone">電話</label>
          <input id="phone" name="phone" className="border rounded-md px-3 py-2" />
        </div>
        <div className="grid gap-2 md:col-span-2">
          <label htmlFor="message">お問い合わせ内容</label>
          <textarea id="message" name="message" required rows={5} className="border rounded-md px-3 py-2" />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button type="submit" className="btn btn-primary" disabled={status==='sending'}>
          {status==='sending' ? '送信中…' : '送信する'}
        </button>
        {status==='done' && <span role="status" className="text-green-700">送信ありがとうございました。折り返しご連絡いたします。</span>}
        {status==='error' && <span role="status" className="text-red-700">送信に失敗しました。時間をおいてお試しください。</span>}
      </div>
    </form>
  )
}

