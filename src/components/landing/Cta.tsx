import { useEffect, useState, type CSSProperties } from "react";
import { CHECKOUT_URL, OFFER_NEW_PRICE, OFFER_OLD_PRICE } from "./data";

const STORAGE_KEY = "mapa_offer_deadline_v1";
const DURATION = 15 * 60 * 1000;

function readDeadline(): number {
  if (typeof window === "undefined") return Date.now() + DURATION;
  let deadline = parseInt(localStorage.getItem(STORAGE_KEY) || "0", 10);
  if (!deadline || deadline < Date.now()) {
    deadline = Date.now() + DURATION;
    localStorage.setItem(STORAGE_KEY, String(deadline));
  }
  return deadline;
}

/** Live "offer ends in mm:ss" countdown, persisted in localStorage. */
export function Countdown({ className }: { className?: string }) {
  const [label, setLabel] = useState("Oferta termina em 15:00");

  useEffect(() => {
    let deadline = readDeadline();
    const tick = () => {
      let remain = Math.max(0, deadline - Date.now());
      if (remain <= 0) {
        deadline = Date.now() + DURATION;
        localStorage.setItem(STORAGE_KEY, String(deadline));
        remain = DURATION;
      }
      const m = Math.floor(remain / 60000);
      const s = Math.floor((remain % 60000) / 1000);
      setLabel(
        `Oferta termina em ${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`,
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className={`o-timer${className ? ` ${className}` : ""}`}>{label}</span>
  );
}

/** Old price / new price / countdown chip. */
export function OfferChip({ center = false }: { center?: boolean }) {
  return (
    <div className={`offer-chip${center ? " offer-chip-center" : ""}`}>
      <span className="o-old">{OFFER_OLD_PRICE}</span>
      <span className="o-new">{OFFER_NEW_PRICE}</span>
      <Countdown />
    </div>
  );
}

/** Primary checkout button (opens the checkout in a new tab). */
export function CheckoutButton({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: CSSProperties;
}) {
  return (
    <a
      target="_blank"
      rel="noopener"
      href={CHECKOUT_URL}
      className="btn btn-primary"
      style={style}
    >
      {children}
    </a>
  );
}
