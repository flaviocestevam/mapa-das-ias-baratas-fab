import { useEffect, useRef, useState } from "react";
import { BUYERS, BUYER_TIMES } from "./data";

type Notice = { name: string; city: string; time: string };

export function BuyPopup() {
  const [notice, setNotice] = useState<Notice | null>(null);
  const [show, setShow] = useState(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const showNext = () => {
      const b = BUYERS[Math.floor(Math.random() * BUYERS.length)];
      const t = BUYER_TIMES[Math.floor(Math.random() * BUYER_TIMES.length)];
      setNotice({
        name: b.n,
        city: b.c,
        time: `${t} • Mapa das IAs Baratas`,
      });
      setShow(true);
      if (hideTimer.current) clearTimeout(hideTimer.current);
      hideTimer.current = setTimeout(() => setShow(false), 7000);
    };

    const firstTimer = setTimeout(showNext, 8000);
    const interval = setInterval(showNext, 27000);
    return () => {
      clearTimeout(firstTimer);
      clearInterval(interval);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, []);

  return (
    <div className={`buy-popup${show ? " show" : ""}`}>
      <button className="close-x" onClick={() => setShow(false)} aria-label="Fechar">
        ×
      </button>
      <div className="avatar">{notice ? notice.name.charAt(0) : "J"}</div>
      <div className="info">
        <span>{notice?.name ?? "João S."}</span> de{" "}
        <span>{notice?.city ?? "São Paulo"}</span> <b>acabou de comprar!</b>
        <small>{notice?.time ?? "há 2 minutos"}</small>
      </div>
    </div>
  );
}
