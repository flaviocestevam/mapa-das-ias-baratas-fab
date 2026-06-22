import { ASSETS, TESTIMONIALS } from "./data";

export function GuaranteeTestimonials() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="guarantee-card">
          <div className="guarantee-photo">
            <img src={ASSETS.garantiaMan} alt="Garantia" />
          </div>
          <strong className="guarantee-title">
            E se eu não economizar o que prometem? Tem garantia?
          </strong>
          <p className="guarantee-text">
            Imagina situação, vou te mostrar onde estão as ferramentas mais
            baratas, vai economizar muito dinheiro, não tem lógica pedir
            reembolso.{"\n"}Mas se vc for desonesto e fdp, vai conseguir seu
            dinheiro de volta{"\n"}pq{" "}
            <span className="hl">você tem 7 dias de garantia incondicional</span>
            .{"\n"}Não faça isso!
          </p>
        </div>

        <div className="cards-3 testi-grid">
          {TESTIMONIALS.map((t) => (
            <div className="card" key={t.name}>
              <div className="testi-head">
                <img className="testi-avatar" src={t.face} alt={t.name} />
                <div>
                  <p className="testi-name">{t.name}</p>
                  <p className="testi-role">{t.role}</p>
                </div>
              </div>
              <p className="testi-quote">{t.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
