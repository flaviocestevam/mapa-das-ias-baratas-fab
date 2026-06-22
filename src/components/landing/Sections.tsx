import { ASSETS } from "./data";

export function ProblemSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-kicker">O problema</div>
          <h2>O custo das ferramentas de IA virou uma mensalidade invisível</h2>
          <p>
            Uma assinatura parece pequena. Mas quando você soma várias
            ferramentas para trabalhar, criar conteúdo, vender e produzir, o
            custo cresce rápido.
          </p>
        </div>

        <div className="highlight-box">
          <h3>VOCÊ TERÁ ACESSO A UMA PLATAFORMA ÚNICA NO MUNDO</h3>
          <p>
            Você vai comprar todas licenças, créditos e acesso até 90% mais
            baratos.
          </p>
        </div>
      </div>
    </section>
  );
}

export function SolutionSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-kicker">A solução</div>
          <h2>
            Você recebe um mapa prático para comprar todas as ferramentas de IA
            com até 90% a menos
          </h2>
          <p>
            Em vez de ficar pesquisando ferramenta por ferramenta, você acessa
            uma estrutura organizada para economizar tempo e dinheiro.
          </p>
        </div>

        <div className="cards-3">
          <div className="card">
            <div className="card-icon">1</div>
            <h3>Lista organizada</h3>
            <p>
              Ferramentas separadas por categoria: texto, imagem, vídeo, voz,
              design, edição, produtividade e automação.
            </p>
          </div>
          <div className="card">
            <div className="card-icon">2</div>
            <h3>Comparativo de preço</h3>
            <p>
              Preço oficial vs preço encontrado em marketplace, com cálculo de
              economia mensal e anual.
            </p>
          </div>
          <div className="card">
            <div className="card-icon">3</div>
            <h3>Links e caminhos</h3>
            <p>
              O acesso aos marketplaces, vendedores e oportunidades fica dentro
              da área do produto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const MODULES = [
  {
    num: "01",
    title: "Encontre a ferramenta certa",
    text: "Navegue por categorias e veja quais ferramentas de IA fazem sentido para o seu objetivo — texto, imagem, vídeo, áudio, design, produtividade e automação.",
  },
  {
    num: "02",
    title: "Compare antes de decidir",
    text: "Veja preço encontrado, preço oficial estimado, economia, tipo de oferta e nível de atenção em cada opção.",
  },
  {
    num: "03",
    title: "Compre com mais clareza",
    text: "Use o tutorial visual com prints, o checklist de segurança e o glossário para analisar vendedor, descrição, comentários e tipo de entrega antes de avançar.",
  },
];

export function PillarsSection() {
  return (
    <section className="section" id="pilares">
      <div className="container">
        <div className="section-header">
          <div className="section-kicker">Como funciona</div>
          <h2>3 partes práticas para usar o Mapa das IAs sem se perder</h2>
          <p>
            Tudo entregue em uma página VIP organizada, pronta para consulta
            rápida sempre que precisar.
          </p>
        </div>

        <div className="modules">
          {MODULES.map((m) => (
            <div className="module" key={m.num}>
              <div className="module-num">{m.num}</div>
              <div>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const AUDIENCE = [
  {
    img: ASSETS.catCriadores,
    alt: "Criador",
    title: "Criadores e editores",
    items: [
      "Reels, vídeos, thumbnails e imagens.",
      "Ferramentas de vídeo, voz, design e imagem.",
      "Mais produção gastando menos.",
    ],
  },
  {
    img: ASSETS.catFreelancers,
    alt: "Freelancer",
    title: "Freelancers e agências",
    items: [
      "Stack para entregar serviços com IA.",
      "Design, pesquisa, automação e produtividade.",
      "Redução de custo operacional.",
    ],
  },
  {
    img: ASSETS.catInfoprodutores,
    alt: "Infoprodutor",
    title: "Infoprodutores e afiliados",
    items: [
      "Ferramentas para páginas, criativos e conteúdo.",
      "Pesquisa, copy, imagem, vídeo e áudio.",
      "Economia para reinvestir no negócio.",
    ],
  },
];

export function AudienceSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-kicker">Para quem é</div>
          <h2>Feito para quem usa IA para trabalhar, criar e vender</h2>
          <p>
            O mapa é para quem quer usar ferramentas melhores, produzir mais e
            reduzir o custo mensal do próprio stack
          </p>
        </div>

        <div className="cards-3">
          {AUDIENCE.map((a) => (
            <div className="card" key={a.title}>
              <div className="card-photo">
                <img src={a.img} alt={a.alt} />
              </div>
              <h3>{a.title}</h3>
              <ul>
                {a.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AlertSection() {
  return (
    <section className="alert-section">
      <div className="container">
        <div className="alert-box">
          <span className="alert-tag">Alerta importante</span>
          <h2 className="alert-title">
            Entenda: essa informação vai fazer você{" "}
            <span className="hi">economizar e ganhar dinheiro</span>.
          </h2>
          <div className="alert-guarantee">É GARANTIDO</div>
          <p className="alert-text">
            Se você <strong>não economizar</strong> em todas as ferramentas que
            comprar seguindo o Mapa, eu te devolvo o dinheiro{" "}
            <strong>e ainda envio R$500 no PIX</strong> pra você.
          </p>
          <div className="alert-pix">
            PIX extra de <b>R$500</b> se você não economizar
          </div>
          <p className="alert-fine">
            Não é esquema. É conhecimento que{" "}
            <strong style={{ color: "#ffd56b" }}>
              pouquíssimas pessoas no Brasil
            </strong>{" "}
            sabem que existe — e que grandes empresas já usam há anos pra reduzir
            custos com IA.
          </p>
        </div>
      </div>
    </section>
  );
}

const FAQ = [
  {
    q: "O marketplace aparece na página pública?",
    a: "Não. A página pública vende a economia, o método e o acesso ao mapa. Os marketplaces, caminhos e vendedores ficam dentro da área do produto.",
    open: true,
  },
  {
    q: "O produto é para quem já usa IA?",
    a: "Sim. Ele é ideal para quem já usa ou quer começar a usar ferramentas de IA para conteúdo, design, vídeo, voz, pesquisa, produtividade, marketing ou vendas.",
  },
  {
    q: "Quanto posso economizar?",
    a: "Depende das ferramentas que você usa, mas uma economia de R$100 por mês já representa R$1.200 por ano. O mapa mostra onde estão as melhores oportunidades por categoria.",
  },
  {
    q: "O que eu recebo exatamente?",
    a: "Você recebe acesso ao Mapa VIP das IAs: uma página organizada com lista de ferramentas, comparativo de preço oficial vs marketplace, links de acesso, rankings de oportunidades, tutorial visual com prints, checklist de segurança, glossário e stacks econômicos por profissão.",
  },
  {
    q: "E se eu não economizar o que prometem? Tem garantia?",
    a: "Sim. Você tem 7 dias de garantia incondicional para acessar o Mapa VIP e decidir se ele faz sentido para você.",
  },
  {
    q: "É legal e seguro? Não é pirataria nem conta rachada de gente estranha?",
    a: "Não é pirataria, não é crack, não é conta rachada com desconhecidos. São marketplaces, licenças regionais, planos família, créditos de API e caminhos oficiais que poucos conhecem. Tudo dentro das regras de uso das próprias plataformas.",
  },
  {
    q: "R$197 ainda é caro pra mim. Vale mesmo a pena?",
    a: "Só a economia do primeiro mês em 2 ou 3 ferramentas já costuma pagar o acesso inteiro. Depois disso, tudo que você economiza todo mês fica no seu bolso — durante o ano inteiro. É o tipo de compra que se paga sozinha em semanas e continua rendendo.",
  },
];

export function FaqSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-kicker">Perguntas frequentes</div>
          <h2>Dúvidas comuns</h2>
        </div>

        <div className="faq">
          {FAQ.map((item) => (
            <details key={item.q} open={item.open}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
