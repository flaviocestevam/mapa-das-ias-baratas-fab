// Shared data and constants for the "Mapa das IAs Baratas" landing page.

export const CHECKOUT_URL = "https://pay.kiwify.com.br/4jhASXa";
export const PRODUCT_PRICE = 197;
export const OFFER_OLD_PRICE = "R$497";
export const OFFER_NEW_PRICE = "R$197";

// Asset URLs (served by the platform asset pipeline).
export const ASSETS = {
  catCriadores:
    "/__l5e/assets-v1/33822227-30d1-45c8-966a-3d56381deb24/cat-criadores.png",
  catFreelancers:
    "/__l5e/assets-v1/edeae1b4-5c53-467b-86fc-1a71f8754140/cat-freelancers.png",
  catInfoprodutores:
    "/__l5e/assets-v1/69516914-401a-4e60-94f1-a0bbeb5f4c2b/cat-infoprodutores.png",
  garantiaMan:
    "/__l5e/assets-v1/f7fca284-3230-46d5-825a-42e6f70275b1/garantia-man.png",
} as const;

export type Tool = {
  id: string;
  name: string;
  cat: string;
  official: number;
  map: number;
  checked: boolean;
  icon: string;
  color: string;
};

// Preços oficiais pesquisados (planos mais vendidos de cada serviço, em BRL aproximado).
// "map" é o preço com o Mapa: ajuste com seus valores reais antes de publicar.
export const TOOLS: Tool[] = [
  { id: "chatgpt", name: "ChatGPT Plus", cat: "texto e produtividade", official: 110, map: 42, checked: true, icon: "GPT", color: "#10A37F" },
  { id: "netflix", name: "Netflix Padrão", cat: "streaming sem anúncio", official: 44.9, map: 17, checked: true, icon: "N", color: "#E50914" },
  { id: "spotify", name: "Spotify Premium", cat: "música sem anúncio", official: 23.9, map: 9, checked: true, icon: "Sp", color: "#1DB954" },
  { id: "gemini", name: "Gemini Advanced", cat: "IA do Google", official: 110, map: 42, checked: true, icon: "G", color: "#4285F4" },
  { id: "canva", name: "Canva Pro", cat: "design e criativos", official: 55, map: 19, checked: true, icon: "Cv", color: "#00C4CC" },
  { id: "youtube", name: "YouTube Premium", cat: "streaming sem anúncio", official: 27, map: 12, checked: true, icon: "▶", color: "#FF0000" },
  { id: "claude", name: "Claude Pro", cat: "texto e raciocínio", official: 110, map: 42, checked: false, icon: "C", color: "#D97757" },
  { id: "disney", name: "Disney+ Premium", cat: "streaming sem anúncio", official: 66.9, map: 25, checked: false, icon: "D+", color: "#113CCF" },
  { id: "midjourney", name: "Midjourney", cat: "imagem IA", official: 170, map: 65, checked: false, icon: "MJ", color: "#dcdcdc" },
  { id: "tinder", name: "Tinder Gold", cat: "relacionamento", official: 55, map: 21, checked: false, icon: "♥", color: "#FD5068" },
  { id: "globoplay", name: "Globoplay Premium", cat: "streaming nacional", official: 39.9, map: 15, checked: false, icon: "Gp", color: "#990AE3" },
  { id: "grok", name: "Grok (X Premium+)", cat: "IA do X", official: 80, map: 32, checked: false, icon: "X", color: "#dcdcdc" },
  { id: "perplexity", name: "Perplexity Pro", cat: "pesquisa IA", official: 110, map: 42, checked: false, icon: "Px", color: "#20B8CD" },
  { id: "lovable", name: "Lovable", cat: "criação de apps com IA", official: 140, map: 55, checked: false, icon: "Lv", color: "#FF6B81" },
  { id: "runway", name: "Runway", cat: "vídeo IA", official: 85, map: 32, checked: false, icon: "Rw", color: "#dcdcdc" },
  { id: "elevenlabs", name: "ElevenLabs", cat: "voz IA", official: 125, map: 48, checked: false, icon: "11", color: "#dcdcdc" },
  { id: "capcut", name: "CapCut Pro", cat: "edição de vídeo", official: 57, map: 21, checked: false, icon: "CC", color: "#00D4D4" },
  { id: "freepik", name: "Freepik Premium", cat: "assets e imagens", official: 60, map: 22, checked: false, icon: "Fp", color: "#1273EB" },
  { id: "leonardo", name: "Leonardo AI", cat: "imagem IA", official: 65, map: 25, checked: false, icon: "Le", color: "#A26BFA" },
  { id: "gamma", name: "Gamma", cat: "apresentações IA", official: 55, map: 21, checked: false, icon: "γ", color: "#F2A93C" },
  { id: "suno", name: "Suno", cat: "música IA", official: 55, map: 21, checked: false, icon: "Su", color: "#FF7A45" },
  { id: "heygen", name: "HeyGen", cat: "avatar e vídeo IA", official: 180, map: 68, checked: false, icon: "Hy", color: "#3CA7F0" },
  { id: "notion", name: "Notion AI", cat: "produtividade", official: 50, map: 19, checked: false, icon: "N", color: "#dcdcdc" },
  { id: "adobe", name: "Adobe Creative Cloud", cat: "todos os apps", official: 310, map: 119, checked: false, icon: "Ae", color: "#FF0000" },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  face: string;
};

const faceUrl = (id: string, file: string) =>
  `/__l5e/assets-v1/${id}/${file}`;

export const TESTIMONIALS: Testimonial[] = [
  { name: "Ricardo Almeida", role: "CEO • Agência de Marketing (45 colaboradores)", face: faceUrl("6175ea71-b275-4c09-a1f9-ccf0da7c5ad7", "face1.jpg"), quote: "\"Cortei mais de R$3.800 por mês em assinaturas de IA da equipe. Em 4 meses paguei um ano inteiro de ferramentas só com a economia.\"" },
  { name: "Fernanda Costa", role: "Fundadora • E-commerce de moda", face: faceUrl("ee843d64-802e-4dda-8755-023c53e98de8", "face2.jpg"), quote: "\"Usávamos ChatGPT, Midjourney, Canva e Runway na operação. O mapa reduziu nossa conta de IA em quase 70%. Surreal.\"" },
  { name: "Bruno Tavares", role: "Social Media • Freelancer", face: faceUrl("5498328d-1e11-457a-bb05-f53a0e4de3d7", "face3.jpg"), quote: "\"Vivo de criar conteúdo e dependo de várias IAs. Economizo R$420 por mês mantendo exatamente as mesmas ferramentas.\"" },
  { name: "Camila Reis", role: "Designer UX/UI", face: faceUrl("87bcb5db-915a-426c-83cd-245699abed40", "face4.jpg"), quote: "\"Achei que ia ser só uma lista, mas é um passo a passo. Troquei minhas 5 assinaturas e ainda sobrou pra investir em curso.\"" },
  { name: "Juliana Martins", role: "Estudante de publicidade", face: faceUrl("e5a47242-54e3-451e-8f22-c3bc69d3a0fd", "face5.jpg"), quote: "\"Não tinha como pagar tudo cheio. Consegui ChatGPT, Canva Pro e Midjourney por menos de R$60/mês. Mudou meus trabalhos.\"" },
  { name: "Anderson Lima", role: "Motorista de app + criador de conteúdo", face: faceUrl("3ee8be85-0e4c-45fe-866b-5182a65d3d5c", "face6.jpg"), quote: "\"Comecei a editar vídeos no tempo livre. Economizei R$280/mês em CapCut, ElevenLabs e edição de imagem. Faz diferença real.\"" },
  { name: "Patrícia Souza", role: "Contadora • Escritório próprio", face: faceUrl("b35a08e6-18a7-415d-905c-3186f724402b", "face7.jpg"), quote: "\"Sou contadora e usava 3 IAs diferentes pra automatizar relatórios. O mapa me mostrou caminhos que cortaram R$310/mês sem perder nada.\"" },
  { name: "Marcos Oliveira", role: "Dono de restaurante • Interior de SP", face: faceUrl("3b49b35d-81d2-40bd-8ceb-af3e4754eca3", "face8.jpg"), quote: "\"Achava que IA era coisa de gringo rico. Hoje meu pequeno restaurante usa ChatGPT e Canva pagando menos que um café por dia.\"" },
  { name: "Larissa Mendes", role: "Gestora de Tráfego • Freelancer", face: faceUrl("d4435172-b659-44cf-bda7-73824daaf4d8", "face9.jpg"), quote: "\"Trabalho com tráfego pago e testo ferramenta nova toda semana. O mapa virou meu primeiro lugar pra olhar antes de assinar qualquer coisa.\"" },
];

export const BUYERS = [
  { n: "João S.", c: "São Paulo - SP" },
  { n: "Maria F.", c: "Rio de Janeiro - RJ" },
  { n: "Carlos M.", c: "Belo Horizonte - MG" },
  { n: "Ana P.", c: "Curitiba - PR" },
  { n: "Lucas R.", c: "Porto Alegre - RS" },
  { n: "Beatriz L.", c: "Salvador - BA" },
  { n: "Rafael T.", c: "Brasília - DF" },
  { n: "Juliana C.", c: "Fortaleza - CE" },
  { n: "Pedro H.", c: "Recife - PE" },
  { n: "Camila O.", c: "Florianópolis - SC" },
];

export const BUYER_TIMES = [
  "há 1 minuto",
  "há 2 minutos",
  "há 4 minutos",
  "há 6 minutos",
  "há 8 minutos",
  "há 11 minutos",
];

export function formatBRL(value: number): string {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });
}
