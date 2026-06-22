import { CHECKOUT_URL, OFFER_NEW_PRICE, OFFER_OLD_PRICE } from "./data";

export function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#" className="brand">
          <span className="brand-mark">IA</span>
          <span>Mapa das IAs Baratas</span>
        </a>

        <div className="nav-links">
          <a href="#comparativo">Comparativo</a>
          <a href="#pilares">Como funciona</a>
          <a href="#calculadora">Calculadora</a>
          <a href={CHECKOUT_URL} target="_blank" rel="noopener">
            Oferta
          </a>
        </div>

        <a
          target="_blank"
          rel="noopener"
          href={CHECKOUT_URL}
          className="btn btn-primary"
        >
          <span
            style={{
              textDecoration: "line-through",
              opacity: 0.55,
              fontWeight: 700,
              marginRight: 6,
            }}
          >
            {OFFER_OLD_PRICE}
          </span>
          {OFFER_NEW_PRICE}
        </a>
      </div>
    </nav>
  );
}
