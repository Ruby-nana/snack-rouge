type Row = { item: string; price: string }

const drinkRows: Row[] = [
  { item: '瓶ビール', price: '1,000円' },
  { item: '生ビール', price: '900円' },
  { item: 'ワンショット・焼酎', price: '800円〜' },
  { item: 'ソフトドリンク', price: '500円〜' },
]

const extras = [
  { label: 'カラオケ', value: '1曲 200円' },
  { label: 'チャージ料', value: '無し' },
]

export default function PricingTable() {
  return (
    <div className="card overflow-hidden">
      <div className="card-pad">
        <div className="hidden sm:block">
          <table className="table">
            <thead>
              <tr><th className="w-2/3">メニュー</th><th>価格</th></tr>
            </thead>
            <tbody>
              {drinkRows.map((r) => (
                <tr key={r.item}><td>{r.item}</td><td className="font-semibold">{r.price}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="grid gap-3 sm:hidden">
          {drinkRows.map(r => (
            <div key={r.item} className="grid grid-cols-2 gap-2">
              <div className="text-muted">{r.item}</div>
              <div className="text-right font-semibold">{r.price}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 grid sm:grid-cols-2 gap-3" aria-label="追加情報">
          {extras.map(ex => (
            <div key={ex.label} className="rounded-md border border-black/10 bg-cream/60 px-4 py-3 flex items-baseline justify-between">
              <strong className="text-primary">{ex.label}</strong>
              <span className="font-semibold text-ink">{ex.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
