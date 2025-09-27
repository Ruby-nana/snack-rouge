export default function Hero() {
  return (
    <section id="home" aria-label="ホーム" className="relative grid place-items-center min-h-[68vh] md:min-h-[76vh] overflow-clip">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(250,247,243,0.60) 0%, rgba(250,247,243,0.85) 45%, rgba(250,247,243,1) 100%), "+
            "radial-gradient(1200px 600px at 70% 20%, rgba(228,106,126,0.06), transparent 60%), "+
            "radial-gradient(800px 400px at 20% 10%, rgba(245,158,107,0.08), transparent 60%), "+
            "url('/hero.jpg') center/cover no-repeat"
        }}
      />
      <div className="container relative text-center py-10 md:py-16 min-h-[60vh] flex flex-col justify-end md:justify-center pb-[max(24px,env(safe-area-inset-bottom))]">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight text-balance">
          ちょっと一杯　気軽に寄れるRouge
        </h1>
        <p className="mt-2 text-muted text-balance">お一人様も大歓迎　初めてでも、いつものようにくつろげます</p>
        <div className="mt-5 flex gap-2 flex-wrap justify-center">
          <a href="tel:0596-22-7233" className="btn btn-primary btn-lg" aria-label="電話する">電話する</a>
          <a href="#contact" className="btn btn-outline btn-lg" aria-label="問い合わせる">問い合わせる</a>
        </div>
      </div>
    </section>
  )
}
