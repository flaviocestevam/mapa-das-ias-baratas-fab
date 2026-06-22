import { CheckoutButton, OfferChip } from "./Cta";

const OFFER_ITEMS = [
  "Mapa VIP prático em página de acesso",
  "Lista organizada das ferramentas de IA mais usadas",
  "Tutorial visual com prints reais",
  "Checklist de compra segura",
  "Glossário simples de termos",
  "Preço oficial vs preço marketplace",
  "Cálculo de economia mensal e anual",
  "Links dos marketplaces e vendedores dentro da área do produto",
  "Ranking dos maiores descontos encontrados",
  "Calculadora para montar seu próprio stack",
  "Stacks econômicos por profissão",
];

export function OfferSection() {
  return (
    <section className="offer" id="oferta">
      <div className="container">
        <div className="offer-card">
          <div>
            <div className="section-kicker">Oferta única</div>
            <h2>Acesse o Mapa das IAs Baratas 2026</h2>
            <p
              className="hero-sub"
              style={{ fontSize: 18, marginBottom: 0 }}
            >
              Pague uma vez e tenha acesso ao Mapa VIP das IAs, com lista
              organizada de ferramentas, links, comparativos, rankings, tutorial
              visual, checklist de segurança, glossário e stacks econômicos por
              profissão.
            </p>

            <div className="offer-list">
              {OFFER_ITEMS.map((item) => (
                <div key={item}>
                  <span className="check">✓</span> {item}
                </div>
              ))}
            </div>
          </div>

          <div className="price-box">
            <div className="price-small">Pagamento único</div>
            <div className="price">
              <span>R$</span>197
            </div>
            <p className="price-note">
              Uma única economia mensal em ferramentas de IA pode pagar o acesso
              ao mapa.
            </p>
            <OfferChip center />
            <CheckoutButton style={{ width: "100%", fontSize: 17 }}>
              Quero acessar agora
            </CheckoutButton>
            <p
              style={{ fontSize: 13, color: "var(--muted)", marginTop: 14 }}
            >
              Troque este botão pelo link do seu checkout.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
