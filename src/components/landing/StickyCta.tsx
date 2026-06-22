import { useEffect, useState } from "react";
import { CheckoutButton, OfferChip } from "./Cta";

export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 650);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`sticky-cta${visible ? " is-visible" : ""}`}>
      <OfferChip />
      <CheckoutButton>Acessar agora</CheckoutButton>
    </div>
  );
}
