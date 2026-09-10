import { useState, useCallback } from "react";
import logoESC from "@/imports/Logo_ESC.png";

type Value = {
  id: string;
  label: string;
  pt: string;
  color: string;
  icon: React.ReactNode;
};

const values: Value[] = [
  {
    id: "responsabilidade",
    label: "Responsabilidade",
    pt: "Agir com compromisso e responder pelos próprios atos.",
    color: "#3B82F6",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <circle cx="32" cy="20" r="10" stroke="currentColor" strokeWidth="3" fill="none"/>
        <path d="M12 56c0-11 9-20 20-20s20 9 20 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
        <path d="M24 32l6 6 10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "integridade",
    label: "Integridade",
    pt: "Agir com honestidade, coerência e transparência.",
    color: "#10B981",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <path d="M32 8L38 20H52L41 29L45 43L32 34L19 43L23 29L12 20H26L32 8Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" fill="none"/>
        <path d="M26 30l4 4 8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "excelencia",
    label: "Excelência",
    pt: "Superar expectativas e buscar o melhor resultado.",
    color: "#F59E0B",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <path d="M32 8l4 12h13l-10 8 4 12-11-8-11 8 4-12-10-8h13L32 8z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" fill="none"/>
        <circle cx="32" cy="50" r="3" fill="currentColor"/>
        <line x1="32" y1="38" x2="32" y2="44" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "exigencia",
    label: "Exigência",
    pt: "Manter padrões elevados e não aceitar a mediocridade.",
    color: "#EF4444",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="3" fill="none"/>
        <circle cx="32" cy="32" r="14" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3" fill="none"/>
        <circle cx="32" cy="32" r="5" fill="currentColor"/>
        <line x1="32" y1="10" x2="32" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <line x1="32" y1="50" x2="32" y2="54" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <line x1="10" y1="32" x2="14" y2="32" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <line x1="50" y1="32" x2="54" y2="32" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "curiosidade-reflexao",
    label: "Curiosidade e Reflexão",
    pt: "Questionar, explorar e pensar criticamente.",
    color: "#8B5CF6",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <circle cx="22" cy="26" r="12" stroke="currentColor" strokeWidth="3" fill="none"/>
        <path d="M18 22c0-2.2 1.8-4 4-4s4 1.8 4 4c0 1.7-1 3-2.3 3.7L22 32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <circle cx="22" cy="35" r="1.5" fill="currentColor"/>
        <path d="M34 20c3-2 8-1 10 3s0 9-4 11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <path d="M40 34l2 6h-6l1-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <line x1="37" y1="44" x2="43" y2="44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "inovacao",
    label: "Inovação",
    pt: "Criar soluções novas para desafios presentes e futuros.",
    color: "#F97316",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <path d="M32 8l6 14h14l-11 9 4 14-13-9-13 9 4-14L12 22h14L32 8z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" fill="none"/>
        <path d="M44 10l3 2-2 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="50" cy="14" r="2" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: "cidadania-participacao",
    label: "Cidadania e Participação",
    pt: "Participar ativamente na construção da sociedade.",
    color: "#14B8A6",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <circle cx="20" cy="20" r="7" stroke="currentColor" strokeWidth="3" fill="none"/>
        <circle cx="44" cy="20" r="7" stroke="currentColor" strokeWidth="3" fill="none"/>
        <circle cx="32" cy="36" r="7" stroke="currentColor" strokeWidth="3" fill="none"/>
        <path d="M13 34c0-5 3-8 7-9M44 34c0-5-3-8-7-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <path d="M25 42c0 5 3 8 7 9s7-4 7-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      </svg>
    ),
  },
  {
    id: "liberdade",
    label: "Liberdade",
    pt: "Agir com autonomia, respeito e responsabilidade.",
    color: "#6366F1",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <path d="M10 44c6-8 14-20 22-28 8 8 16 20 22 28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M20 36c4-6 8-12 12-16 4 4 8 10 12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.5"/>
        <circle cx="32" cy="16" r="3" fill="currentColor"/>
      </svg>
    ),
  },
];

type Card = {
  uid: string;
  valueId: string;
  value: Value;
  flipped: boolean;
  matched: boolean;
};

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function buildDeck(): Card[] {
  const cards = values.flatMap((v) => [
    { uid: `${v.id}-a`, valueId: v.id, value: v, flipped: false, matched: false },
    { uid: `${v.id}-b`, valueId: v.id, value: v, flipped: false, matched: false },
  ]);
  return shuffle(cards);
}

export default function App() {
  const [deck, setDeck] = useState<Card[]>(buildDeck);
  const [selected, setSelected] = useState<string[]>([]);
  const [locked, setLocked] = useState(false);
  const [moves, setMoves] = useState(0);
  const [matched, setMatched] = useState(0);
  const [won, setWon] = useState(false);
  const [lastMatch, setLastMatch] = useState<string | null>(null);

  const flip = useCallback(
    (uid: string) => {
      if (locked) return;
      const card = deck.find((c) => c.uid === uid);
      if (!card || card.flipped || card.matched) return;
      if (selected.includes(uid)) return;

      const nextSelected = [...selected, uid];
      setDeck((d) => d.map((c) => (c.uid === uid ? { ...c, flipped: true } : c)));
      setSelected(nextSelected);

      if (nextSelected.length === 2) {
        setMoves((m) => m + 1);
        setLocked(true);
        const [aUid, bUid] = nextSelected;
        const a = deck.find((c) => c.uid === aUid)!;
        const b = deck.find((c) => c.uid === bUid)!;
        if (a.valueId === b.valueId) {
          setTimeout(() => {
            setDeck((d) =>
              d.map((c) =>
                c.uid === aUid || c.uid === bUid ? { ...c, matched: true } : c
              )
            );
            setMatched((m) => {
              const next = m + 1;
              if (next === values.length) setWon(true);
              return next;
            });
            setLastMatch(a.valueId);
            setSelected([]);
            setLocked(false);
          }, 700);
        } else {
          setTimeout(() => {
            setDeck((d) =>
              d.map((c) =>
                c.uid === aUid || c.uid === bUid ? { ...c, flipped: false } : c
              )
            );
            setSelected([]);
            setLocked(false);
          }, 1100);
        }
      }
    },
    [deck, selected, locked]
  );

  const reset = () => {
    setDeck(buildDeck());
    setSelected([]);
    setLocked(false);
    setMoves(0);
    setMatched(0);
    setWon(false);
    setLastMatch(null);
  };

  return (
    <div className="min-h-screen bg-[#0a0a14] text-white flex flex-col items-center py-10 px-4 font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=DM+Serif+Display&display=swap');
        body { font-family: 'Nunito', sans-serif; }
        .card-wrapper { perspective: 900px; }
        .card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.55s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .card-inner.flipped { transform: rotateY(180deg); }
        .card-face {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          border-radius: 14px;
        }
        .card-back { transform: rotateY(180deg); }
        @keyframes pop { 0%{transform:scale(1)} 50%{transform:scale(1.07)} 100%{transform:scale(1)} }
        .matched-pop { animation: pop 0.4s ease; }
        @keyframes win-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        .win-float { animation: win-float 2s ease-in-out infinite; }
      `}</style>

      {/* Header */}
      <header className="text-center mb-8 max-w-2xl">
        <h1 className="text-4xl font-black tracking-tight" style={{ fontFamily: "'Didact Gothic', sans-serif" }}>
          Jogo da Memória <span className="text-indigo-400">Santa Clara</span>
        </h1>
        <p className="text-slate-400 mt-2 text-sm">
          Encontra os pares de cartas que partilham o mesmo valor.
        </p>
      </header>

      {/* Stats */}
      <div className="flex gap-6 mb-8">
        <Stat label="Jogadas" value={moves} />
        <Stat label="Pares" value={`${matched} / ${values.length}`} />
        <button
          onClick={reset}
          className="px-5 py-2 rounded-full text-sm font-bold bg-indigo-600 hover:bg-indigo-500 transition-colors cursor-pointer"
        >
          Reiniciar
        </button>
      </div>

      {/* Win overlay */}
      {won && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="bg-[#14142a] border border-indigo-500/40 rounded-3xl p-10 text-center shadow-2xl max-w-sm mx-4 win-float">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-3xl font-black mb-2" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Parabéns!
            </h2>
            <p className="text-slate-300 mb-6">
              Completaste o jogo em <span className="text-indigo-400 font-bold">{moves} jogadas</span>!
            </p>
            <button
              onClick={reset}
              className="px-8 py-3 rounded-full font-bold bg-indigo-600 hover:bg-indigo-500 transition-colors text-white cursor-pointer"
            >
              Jogar de Novo
            </button>
          </div>
        </div>
      )}

      {/* Grid 4×5 */}
      <div className="grid grid-cols-4 gap-3 w-full max-w-2xl sm:gap-4">
        {deck.map((card) => (
          <MemoryCard
            key={card.uid}
            card={card}
            onClick={() => flip(card.uid)}
            isLastMatch={lastMatch === card.valueId && card.matched}
            logo={logoESC}
          />
        ))}
      </div>

      {/* Legend */}
      <div className="mt-10 max-w-2xl w-full">
        <p className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-4 text-center">Valores</p>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {values.map((v) => {
            const done = deck.filter((c) => c.valueId === v.id && c.matched).length === 2;
            return (
              <div
                key={v.id}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                  done ? "opacity-100" : "opacity-40"
                }`}
                style={{ background: done ? `${v.color}22` : "#1a1a2e", color: done ? v.color : "#666" }}
              >
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: v.color }} />
                {v.label}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="bg-[#14142a] border border-white/10 rounded-2xl px-5 py-3 text-center min-w-[80px]">
      <div className="text-xl font-black text-white">{value}</div>
      <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">{label}</div>
    </div>
  );
}

function MemoryCard({
  card,
  onClick,
  isLastMatch,
  logo,
}: {
  card: Card;
  onClick: () => void;
  isLastMatch: boolean;
  logo: string;
}) {
  const isVisible = card.flipped || card.matched;
  return (
    <div
      className={`card-wrapper aspect-square cursor-pointer ${isLastMatch ? "matched-pop" : ""}`}
      onClick={onClick}
    >
      <div className={`card-inner ${isVisible ? "flipped" : ""}`}>
        {/* Front (hidden) — shows logo */}
        <div className="card-face bg-white border border-slate-200 flex items-center justify-center hover:border-indigo-300 hover:bg-slate-50 transition-colors p-3">
          <img
            src={logo}
            alt="Escola Santa Clara"
            className="w-full h-full object-contain"
          />
        </div>
        {/* Back (revealed) */}
        <div
          className="card-face card-back flex flex-col items-center justify-center gap-2 p-3 border"
          style={{
            background: `linear-gradient(135deg, ${card.value.color}18 0%, #ffffff 100%)`,
            borderColor: `${card.value.color}66`,
          }}
        >
          <div
            className="w-10 h-10 sm:w-14 sm:h-14"
            style={{ color: card.value.color }}
          >
            {card.value.icon}
          </div>
          <span
            className="text-center font-bold leading-tight text-[9px] sm:text-[11px]"
            style={{ color: card.value.color }}
          >
            {card.value.label}
          </span>
        </div>
      </div>
    </div>
  );
}
