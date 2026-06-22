import { CheckoutButton, OfferChip } from "./Cta";

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <div className="eyebrow">
            <span className="dot" /> Catálogo atualizado para ferramentas de IA
          </div>
          <h1>
            IAS com até <span className="gradient-text">90% de desconto</span>{" "}
            segredo dos Russos e Americanos
          </h1>
          <p className="hero-sub">
            Descubra onde eles compram licenças, créditos e acessos de todas
            ferramentas de IA internacionais por valores muito menores que os
            preços oficiais — e veja como vc vai economizar{" "}
            <strong>R$1.000 ou mais por ano</strong>
          </p>

          <div className="hero-actions">
            <OfferChip />
            <CheckoutButton>Quero economizar com IA</CheckoutButton>
            <a href="#comparativo" className="btn btn-secondary">
              Ver a diferença de preço
            </a>
          </div>

          <div className="microproof">
            <span>
              <b>✓</b> Mapa VIP prático
            </span>
            <span>
              <b>✓</b> Lista de ferramentas
            </span>
            <span>
              <b>✓</b> Preço oficial vs marketplace
            </span>
            <span>
              <b>✓</b> Calculadora de economia
            </span>
          </div>
        </div>

        <div className="hero-card">
          <div className="savings-panel">
            <div className="panel-label">Economia possível no ano</div>
            <div className="big-number">R$1.000+</div>
            <p className="panel-note">
              Uma economia de R$100 por mês já representa R$1.200 no ano. Agora
              imagine aplicar isso em várias ferramentas.
            </p>

            <div className="mini-table">
              <div className="mini-row">
                <div>
                  Design IA <small>ferramentas criativas e templates</small>
                </div>
                <div className="price-chip">até -90%</div>
              </div>
              <div className="mini-row">
                <div>
                  Pesquisa IA <small>respostas, estudos e produtividade</small>
                </div>
                <div className="price-chip">até -55%</div>
              </div>
              <div className="mini-row">
                <div>
                  Imagem e vídeo IA <small>criação visual avançada</small>
                </div>
                <div className="price-chip">R$1000+/ano</div>
              </div>
              <div className="mini-row">
                <div>
                  Voz e áudio IA <small>narração, música e dublagem</small>
                </div>
                <div className="price-chip">grande economia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
