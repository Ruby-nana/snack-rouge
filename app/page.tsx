import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import PricingTable from '@/components/PricingTable'
import ContactForm from '@/components/ContactForm'

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        <Section id="info" title="店舗情報">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="card card-pad">
              <h3 className="font-semibold text-primary mb-1">営業時間</h3>
              <p className="m-0">18:00–24:00　定休日：日曜・木曜</p>
            </div>
            <div className="card card-pad">
              <h3 className="font-semibold text-primary mb-1">住所</h3>
              <p className="m-0">伊勢市一之木丁目10-8　三交ビルパートⅡ</p>
            </div>
            <div className="card card-pad">
              <h3 className="font-semibold text-primary mb-1">電話</h3>
              <p className="m-0"><a className="no-underline text-primary" href="tel:0596-22-7233">0596-22-7233</a></p>
            </div>
            <div className="card card-pad md:col-span-3">
              <h3 className="font-semibold text-primary mb-1">席数</h3>
              <p className="m-0">カウンター 8席／BOX席 10席</p>
            </div>
          </div>
        </Section>

        <Section id="greeting" title="ご挨拶">
          <div className="card overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <img src="/placeholder-photo.svg" alt="店内写真（プレースホルダ）" className="w-full h-full object-cover" />
              <div className="card-pad">
                <p className="whitespace-pre-line m-0">
{`1988年月オープンより、今年37周年を迎えました。
お一人様でもグループでも楽しめる、アットホームなお店です。
常連さんも一見さんも一緒になって、ワイワイ楽しみましょう!!`}
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section id="mama" title="ママの紹介">
          <div className="card card-pad grid md:grid-cols-5 gap-4 items-center">
            <div className="md:col-span-2">
              <img src="/placeholder-photo.svg" alt="ママ・和子（写真プレースホルダ）" className="w-full rounded-md" />
            </div>
            <div className="md:col-span-3">
              <h3 className="text-xl font-bold">ママ・和子</h3>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>歌とゴルフが好き</li>
                <li>本やチャンネル好き</li>
                <li>猫「マリリン」</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="pricing" title="料金システム">
          <PricingTable />
        </Section>

        <Section id="payment" title="お支払い">
          <div className="card card-pad">
            <p className="m-0">現金・各種カード（VISA/Mastercard/JCB/AMEX/NICOS/DC/UC/MUFG）</p>
            <p className="m-0 text-muted">※PayPayは非対応</p>
          </div>
        </Section>

        <Section id="access" title="アクセス">
          <div className="grid md:grid-cols-3 gap-4 items-start">
            <div className="md:col-span-2 card overflow-hidden">
              <iframe
                title="Google Map"
                aria-label="Google Map"
                className="w-full h-[320px] md:h-[380px] border-0"
                src={`https://www.google.com/maps?q=${encodeURIComponent('伊勢市一之木丁目10-8 三交ビルパートⅡ')}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="card card-pad">
              <ul className="m-0 space-y-2">
                <li>最寄り駅：伊勢市駅より徒歩10分</li>
                <li>ホテル三交イン徒歩10分／コンフォートホテル伊勢徒歩10分／東横イン徒歩分</li>
                <li>二富士の隣</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="contact" title="お問い合わせ">
          <div className="card card-pad">
            <div className="flex flex-wrap gap-2 mb-4">
              <a href="tel:0596-22-7233" className="btn btn-outline" aria-label="電話する">電話する</a>
            </div>
            <ContactForm />
          </div>
        </Section>
      </main>

      <footer className="border-t border-black/10 py-6 bg-white/60">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-muted m-0">&copy; スナック Rouge</p>
          <div className="flex gap-3">
            <a className="nav-link" href="tel:0596-22-7233" aria-label="電話">電話</a>
            <a className="nav-link" href="https://line.me/" aria-label="LINE" target="_blank" rel="noopener noreferrer">LINE</a>
            <a className="nav-link" href="https://www.instagram.com/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </footer>
    </>
  )
}
