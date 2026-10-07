import { useState } from "react";
const phone = "5586988632531";
const whatsapp = (message) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
const plans = [
  {
    name: "Econômico",
    frequency: "3x na semana",
    price: "69,99",
    features: [
      "Acesso 3 dias/semana",
      "Musculação livre",
      "Sem taxa de matrícula",
      "Apoio de professores",
    ],
  },
  {
    name: "Flex",
    frequency: "4x na semana",
    price: "74,99",
    features: [
      "Acesso 4 dias/semana",
      "Musculação livre",
      "Horário livre",
      "Apoio de professores",
    ],
  },
  {
    name: "Iron Standard",
    frequency: "Segunda a sábado",
    price: "89,99",
    features: [
      "Acesso ilimitado (Seg–Sáb)",
      "Treino livre em qualquer horário",
      "Avaliação física básica",
      "Acesso a todas as máquinas",
    ],
    featured: true,
  },
  {
    name: "Iron Premium",
    frequency: "Seg a sáb + Nutri",
    price: "119,99",
    features: [
      "Acesso total (Seg–Sáb)",
      "Consulta com nutricionista",
      "Acompanhamento de dieta",
      "Todos os benefícios Standard",
    ],
  },
];
const classes = [
  ["Musculação", "Força construída repetição por repetição."],
  ["Cross Training", "Intensidade, variedade e movimento."],
  ["FitDance & Ritmos", "Energia que encontra o seu ritmo."],
  ["Indoor Cycle", "Pedale no ritmo da sua evolução."],
];
function Weight() {
  return (
    <svg viewBox="0 0 550 520" fill="none" aria-hidden="true">
      <g transform="rotate(-24 275 260)">
        <path d="M60 269h440" stroke="currentColor" strokeWidth="26" />
        <rect
          x="78"
          y="160"
          width="54"
          height="216"
          rx="12"
          fill="currentColor"
        />
        <rect
          x="140"
          y="115"
          width="66"
          height="306"
          rx="14"
          fill="currentColor"
        />
        <rect
          x="344"
          y="115"
          width="66"
          height="306"
          rx="14"
          fill="currentColor"
        />
        <rect
          x="418"
          y="160"
          width="54"
          height="216"
          rx="12"
          fill="currentColor"
        />
        <path d="M152 140v235M356 140v235" stroke="#262822" strokeWidth="5" />
      </g>
      <path d="M45 450h470" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
export default function App() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="iron-page">
      <a className="skip" href="#conteudo">
        Pular para o conteúdo
      </a>
      <header className="iron-header frame">
        <a href="#inicio" className="iron-logo">
          IRON<span>GYM®</span>
        </a>
        <button
          className="menu-button"
          aria-expanded={menu}
          aria-controls="iron-nav"
          onClick={() => setMenu(!menu)}
        >
          {menu ? "Fechar" : "Menu"}
        </button>
        <nav
          id="iron-nav"
          aria-label="Navegação principal"
          className={menu ? "open" : ""}
        >
          {[
            ["sobre", "A academia"],
            ["modalidades", "Modalidades"],
            ["planos", "Planos"],
            ["contato", "Contato ↗"],
          ].map(([id, text]) => (
            <a key={id} href={"#" + id} onClick={() => setMenu(false)}>
              {text}
            </a>
          ))}
        </nav>
      </header>
      <main id="conteudo">
        <section id="inicio" className="iron-hero frame">
          <div className="hero-topline">
            <p>ESPERANTINA, PI / SEGUNDA A SÁBADO</p>
            <span>FORÇA. ROTINA. COMUNIDADE.</span>
          </div>
          <div className="hero-grid">
            <div>
              <h1>
                SEU
                <br />
                PRÓXIMO
                <br />
                <em>PASSO.</em>
              </h1>
              <p className="hero-description">
                Não precisa começar pronto.
                <br />
                Precisa começar. Encontre seu ritmo na Iron Gym.
              </p>
              <a className="iron-button" href="#planos">
                Encontre seu plano <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="weight-poster">
              <div className="poster-top">
                <span>IRON / 01</span>
                <span>FAÇA POR VOCÊ.</span>
              </div>
              <Weight />
              <p>
                CONSTÂNCIA
                <br />
                CONSTRÓI FORÇA.
              </p>
              <span className="poster-caption">Um treino de cada vez.</span>
            </div>
          </div>
          <div className="hero-rule">
            <span>Treino que cabe na sua rotina.</span>
            <a href="#modalidades">Explore as modalidades ↓</a>
          </div>
        </section>
        <section id="sobre" className="iron-manifesto">
          <div className="frame manifesto-grid">
            <p className="tag">01 / A ACADEMIA</p>
            <div>
              <h2>
                NÃO É SÓ
                <br />
                SOBRE <em>PESO.</em>
              </h2>
              <p>
                É sobre encontrar uma rotina que faça sentido para você.
                Musculação, diferentes modalidades e apoio de professores para
                acompanhar seu treino.
              </p>
              <div className="iron-values">
                <span>01 / HORÁRIO FLEXÍVEL</span>
                <span>02 / APOIO NO TREINO</span>
                <span>03 / AMBIENTE MOTIVADOR</span>
              </div>
            </div>
          </div>
        </section>
        <section id="modalidades" className="iron-classes frame">
          <div className="section-title">
            <p className="tag">02 / MODALIDADES</p>
            <h2>
              ENCONTRE
              <br />
              SEU <em>RITMO.</em>
            </h2>
          </div>
          <div className="class-list">
            {classes.map(([name, description], i) => (
              <article key={name}>
                <span className="class-no">0{i + 1}</span>
                <h3>{name}</h3>
                <p>{description}</p>
                <a
                  href={whatsapp(
                    "Olá! Quero saber mais sobre " + name + " na Iron Gym.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={"Consultar " + name}
                >
                  ↗
                </a>
              </article>
            ))}
          </div>
        </section>
        <section id="planos" className="iron-pricing">
          <div className="frame">
            <div className="pricing-header">
              <div>
                <p className="tag">03 / PLANOS</p>
                <h2>
                  SEU TREINO.
                  <br />
                  <em>SEU PLANO.</em>
                </h2>
              </div>
              <p>
                Escolha uma frequência que combine com a sua rotina. Fale com a
                equipe para confirmar valores e condições.
              </p>
            </div>
            <div className="plan-grid">
              {plans.map((plan) => (
                <article
                  className={"plan " + (plan.featured ? "featured" : "")}
                  key={plan.name}
                >
                  <p className="plan-frequency">{plan.frequency}</p>
                  <h3>{plan.name}</h3>
                  <p className="price">
                    <small>R$</small>
                    {plan.price}
                    <span>/mês</span>
                  </p>
                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <a
                    className="iron-button"
                    href={whatsapp(
                      "Olá! Tenho interesse em me matricular no plano " +
                        plan.name +
                        " da Iron Gym. Como procedo?",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Consultar plano <span aria-hidden="true">↗</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="contato" className="iron-contact frame">
          <div>
            <p className="tag">04 / SEU PRIMEIRO PASSO</p>
            <h2>
              COMECE
              <br />
              <em>POR AQUI.</em>
            </h2>
            <a
              className="iron-button"
              href={whatsapp(
                "Olá! Vim pelo site e gostaria de saber mais sobre a Iron Gym.",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Converse com a equipe ↗
            </a>
          </div>
          <div className="contact-details">
            <p className="tag">VENHA CONHECER</p>
            <p>
              Rua Marechal Deodoro, 646
              <br />
              Centro — Esperantina, PI
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rua+Marechal+Deodoro+646+Esperantina+PI"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir no mapa ↗
            </a>
            <hr />
            <p className="tag">ACOMPANHE A IRON</p>
            <a
              href="https://www.instagram.com/irongymgd/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram ↗
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61576582526668"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook ↗
            </a>
            <a
              href="https://www.tiktok.com/@iron.gym.gd"
              target="_blank"
              rel="noopener noreferrer"
            >
              TikTok ↗
            </a>
          </div>
        </section>
      </main>
      <footer className="iron-footer frame">
        <a href="#inicio" className="iron-logo">
          IRON<span>GYM®</span>
        </a>
        <span>UM TREINO DE CADA VEZ.</span>
        <p>© {new Date().getFullYear()} Iron Gym.</p>
      </footer>
    </div>
  );
}
