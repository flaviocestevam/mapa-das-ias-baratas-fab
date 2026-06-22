import { useMemo, useState } from "react";
import { CheckoutButton, OfferChip } from "./Cta";
import { PRODUCT_PRICE, TOOLS, formatBRL } from "./data";

export function Calculator() {
  const [checked, setChecked] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(TOOLS.map((t) => [t.id, t.checked])),
  );

  const toggle = (id: string) =>
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  const { oldTotal, newTotal, monthlySaving, selectedCount } = useMemo(() => {
    let oldTotal = 0;
    let newTotal = 0;
    let selectedCount = 0;
    for (const tool of TOOLS) {
      if (checked[tool.id]) {
        oldTotal += tool.official;
        newTotal += tool.map;
        selectedCount++;
      }
    }
    return {
      oldTotal,
      newTotal,
      monthlySaving: Math.max(oldTotal - newTotal, 0),
      selectedCount,
    };
  }, [checked]);

  const profitMessage = useMemo(() => {
    if (selectedCount === 0) {
      return "Selecione suas ferramentas acima para ver o resultado.";
    }
    const firstMonthNet = monthlySaving - PRODUCT_PRICE;
    if (firstMonthNet > 0) {
      return `O acesso custa ${formatBRL(PRODUCT_PRICE)}. Com essa economia mensal, você sai no lucro de ${formatBRL(firstMonthNet)} já no primeiro mês.`;
    }
    const monthsToPayBack =
      monthlySaving > 0 ? Math.ceil(PRODUCT_PRICE / monthlySaving) : null;
    return monthsToPayBack
      ? `O acesso custa ${formatBRL(PRODUCT_PRICE)}. Com essa economia mensal, ele se paga em ${monthsToPayBack} ${monthsToPayBack > 1 ? "meses" : "mês"} — e depois disso é economia líquida todo mês.`
      : "Marque mais ferramentas para ver quanto tempo leva até o acesso se pagar sozinho.";
  }, [monthlySaving, selectedCount]);

  return (
    <section
      className="section"
      id="calculadora"
      style={{ paddingTop: 44, paddingBottom: 56 }}
    >
      <div className="container">
        <div className="section-header" style={{ maxWidth: 760 }}>
          <div className="eyebrow" style={{ margin: "0 auto 18px" }}>
            <span className="dot" /> Calculadora ao vivo
          </div>
          <h2 style={{ fontSize: "clamp(30px, 4.4vw, 50px)" }}>
            Marque o que você já paga e veja sua economia agora
          </h2>
          <p>
            Sem espera, sem cadastro. Clique nas ferramentas que você usa hoje e
            veja na hora quanto você está pagando a mais — e quanto sobra no
            bolso já no primeiro mês.
          </p>
        </div>

        <div className="calculator">
          <div className="calc-box">
            <label style={{ marginBottom: 14 }}>Suas ferramentas</label>
            <div className="tool-grid">
              {TOOLS.map((tool) => {
                const isChecked = !!checked[tool.id];
                const officialLabel = tool.official
                  .toFixed(2)
                  .replace(".", ",")
                  .replace(",00", "");
                return (
                  <label
                    key={tool.id}
                    className={`tool-check${isChecked ? " is-checked" : ""}`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggle(tool.id)}
                    />
                    <span className="tool-check-label">
                      {tool.name}
                      <small>
                        {tool.cat} · R${officialLabel}/mês
                      </small>
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          <div className="calc-result" style={{ display: "block" }}>
            <div className="calc2-summary">
              <div className="calc2-toprow">
                <div className="calc2-stat is-old">
                  <div className="k">Você paga hoje</div>
                  <div className="v">{formatBRL(oldTotal)}/mês</div>
                </div>
                <div className="calc2-stat is-new">
                  <div className="k">Com o Mapa</div>
                  <div className="v">{formatBRL(newTotal)}/mês</div>
                </div>
              </div>

              <div className="calc2-main">
                <div className="k">Economia por mês</div>
                <div className="v">{formatBRL(monthlySaving)}</div>
              </div>

              <div className="calc2-periods">
                <div className="calc2-period">
                  <div className="v">{formatBRL(monthlySaving * 3)}</div>
                  <div className="k">em 3 meses</div>
                </div>
                <div className="calc2-period">
                  <div className="v">{formatBRL(monthlySaving * 6)}</div>
                  <div className="k">em 6 meses</div>
                </div>
                <div className="calc2-period is-12">
                  <div className="v">{formatBRL(monthlySaving * 12)}</div>
                  <div className="k">em 12 meses</div>
                </div>
              </div>

              <div className="calc2-profit">{profitMessage}</div>

              <OfferChip />
              <CheckoutButton style={{ width: "100%" }}>
                Quero economizar isso
              </CheckoutButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
