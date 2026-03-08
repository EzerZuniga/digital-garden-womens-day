// Paletas de rosas rojas — variaciones naturales para dar profundidad al ramo
// o=outer, m=mid, i=inner, k=core oscuro, s=sombra, h=highlight, lf=hoja clara, ld=hoja oscura
const PALETTES = [
  // 1 — Rojo vivo
  { o:"#ef9a9a", m:"#e53935", i:"#c62828", k:"#7f0000", s:"#2d0000", h:"#ffcdd2", lf:"#4caf50", ld:"#2e7d32", lv:"#388e3c" },
  // 2 — Rojo carmesí
  { o:"#ffcdd2", m:"#e53935", i:"#b71c1c", k:"#6a0000", s:"#260000", h:"#ffe0e0", lf:"#43a047", ld:"#2e7d32", lv:"#1b5e20" },
  // 3 — Rojo oscuro profundo
  { o:"#ef9a9a", m:"#c62828", i:"#b71c1c", k:"#7f0000", s:"#2d0000", h:"#ffcdd2", lf:"#66bb6a", ld:"#388e3c", lv:"#2e7d32" },
  // 4 — Rojo brillante
  { o:"#ffcdd2", m:"#f44336", i:"#c62828", k:"#7f0000", s:"#2d0000", h:"#fff5f5", lf:"#4caf50", ld:"#388e3c", lv:"#2e7d32" },
  // 5 — Rojo intenso
  { o:"#ef9a9a", m:"#d32f2f", i:"#b71c1c", k:"#7f0000", s:"#200000", h:"#ffcdd2", lf:"#4caf50", ld:"#2e7d32", lv:"#1b5e20" },
  // 6 — Rojo suave
  { o:"#ffcdd2", m:"#ef5350", i:"#c62828", k:"#6a0000", s:"#220000", h:"#ffe0e0", lf:"#81c784", ld:"#388e3c", lv:"#2e7d32" },
  // 7 — Rojo vino
  { o:"#ef9a9a", m:"#b71c1c", i:"#7f0000", k:"#4e0000", s:"#180000", h:"#ffcdd2", lf:"#4caf50", ld:"#2e7d32", lv:"#1b5e20" },
  // 8 — Rojo cereza
  { o:"#ffcdd2", m:"#d32f2f", i:"#b71c1c", k:"#7f0000", s:"#2d0000", h:"#fff5f5", lf:"#66bb6a", ld:"#388e3c", lv:"#2e7d32" },
];

export default function FlowerSvg({ flowerId }) {
  const p = PALETTES[(flowerId - 1) % PALETTES.length];
  const id = `r${flowerId}`;

  // cx,cy = centro de la flor en el viewBox
  const cx = 50, cy = 66;

  return (
    <svg
      viewBox="0 0 100 210"
      className="flower__svg"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* ── Gradientes de pétalos — luz desde arriba-izquierda ── */}
        <radialGradient id={`go-${id}`} cx="38%" cy="35%" r="65%" fx="38%" fy="30%">
          <stop offset="0%" stopColor={p.h} stopOpacity="0.9" />
          <stop offset="25%" stopColor={p.o} />
          <stop offset="70%" stopColor={p.m} />
          <stop offset="100%" stopColor={p.k} />
        </radialGradient>
        <radialGradient id={`gm-${id}`} cx="40%" cy="35%" r="60%" fx="38%" fy="28%">
          <stop offset="0%" stopColor={p.h} stopOpacity="0.95" />
          <stop offset="20%" stopColor={p.o} />
          <stop offset="65%" stopColor={p.i} />
          <stop offset="100%" stopColor={p.k} />
        </radialGradient>
        <radialGradient id={`gi-${id}`} cx="42%" cy="32%" r="58%" fx="38%" fy="25%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.9" />
          <stop offset="18%" stopColor={p.h} />
          <stop offset="55%" stopColor={p.o} />
          <stop offset="100%" stopColor={p.m} />
        </radialGradient>
        <radialGradient id={`gc-${id}`} cx="38%" cy="30%" r="65%" fx="35%" fy="22%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.95" />
          <stop offset="20%" stopColor={p.h} />
          <stop offset="50%" stopColor={p.o} />
          <stop offset="100%" stopColor={p.k} />
        </radialGradient>
        {/* Gradiente para sombra interna de pétalos */}
        <radialGradient id={`gsh-${id}`} cx="50%" cy="80%" r="60%">
          <stop offset="0%" stopColor={p.s} stopOpacity="0.5" />
          <stop offset="100%" stopColor={p.s} stopOpacity="0" />
        </radialGradient>

        {/* ── Gradiente tallo ── */}
        <linearGradient id={`gs-${id}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={p.ld} />
          <stop offset="35%" stopColor={p.lf} />
          <stop offset="60%" stopColor={p.lf} />
          <stop offset="100%" stopColor={p.ld} />
        </linearGradient>
        {/* ── Gradiente hojas ── */}
        <linearGradient id={`gl-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={p.lf} />
          <stop offset="55%" stopColor={p.lf} stopOpacity="0.85" />
          <stop offset="100%" stopColor={p.ld} />
        </linearGradient>
        <linearGradient id={`glr-${id}`} x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={p.lf} />
          <stop offset="55%" stopColor={p.lf} stopOpacity="0.85" />
          <stop offset="100%" stopColor={p.ld} />
        </linearGradient>

        {/* ── Filtros ── */}
        {/* Sombra suave para pétalos exteriores */}
        <filter id={`fsh-${id}`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2.2" result="blur" />
          <feOffset dx="0" dy="2.5" result="offsetBlur" />
          <feFlood floodColor={p.s} floodOpacity="0.5" result="color" />
          <feComposite in="color" in2="offsetBlur" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Sombra más suave para pétalos internos */}
        <filter id={`fsi-${id}`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" result="blur" />
          <feOffset dx="0" dy="1.5" result="offsetBlur" />
          <feFlood floodColor={p.s} floodOpacity="0.4" result="color" />
          <feComposite in="color" in2="offsetBlur" operator="in" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Brillo especular para capa interior */}
        <filter id={`fglow-${id}`} x="-15%" y="-15%" width="130%" height="130%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur" />
          <feFlood floodColor={p.h} floodOpacity="0.6" result="color" />
          <feComposite in="color" in2="blur" operator="in" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ════════════════════════════════════════
          TALLO — curva orgánica con grosor variable
          ════════════════════════════════════════ */}
      {/* Sombra del tallo */}
      <path
        d={`M${cx+1} ${cy+32} C${cx} ${cy+58} ${cx+4} ${cy+84} ${cx} 207`}
        stroke={p.ld}
        strokeWidth="5.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.35"
      />
      {/* Tallo principal */}
      <path
        d={`M${cx} ${cy+30} C${cx-2} ${cy+56} ${cx+3} ${cy+82} ${cx-1} 207`}
        stroke={`url(#gs-${id})`}
        strokeWidth="4.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Brillo del tallo */}
      <path
        d={`M${cx-1} ${cy+32} C${cx-3} ${cy+58} ${cx+1} ${cy+82} ${cx-2} 190`}
        stroke="#fff"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
        opacity="0.22"
      />

      {/* ════════════════════════════════════════
          HOJAS — pares orgánicos con nervaduras
          ════════════════════════════════════════ */}
      {/* Hoja izquierda alta */}
      <path
        d={`M${cx-2} ${cy+44} C${cx-6} ${cy+36} ${cx-16} ${cy+26} ${cx-30} ${cy+30}
            C${cx-40} ${cy+34} ${cx-38} ${cy+46} ${cx-28} ${cy+54}
            C${cx-18} ${cy+58} ${cx-6} ${cy+52} ${cx-2} ${cy+44}Z`}
        fill={`url(#gl-${id})`}
        opacity="0.95"
      />
      {/* Nervadura central hoja izq */}
      <path d={`M${cx-2} ${cy+44} C${cx-14} ${cy+40} ${cx-28} ${cy+44}`} stroke={p.lv} strokeWidth="0.7" fill="none" opacity="0.6" />
      {/* Nervaduras secundarias hoja izq */}
      <path d={`M${cx-10} ${cy+40} C${cx-16} ${cy+36} ${cx-22} ${cy+34}`} stroke={p.lv} strokeWidth="0.4" fill="none" opacity="0.4" />
      <path d={`M${cx-16} ${cy+44} C${cx-20} ${cy+40} ${cx-26} ${cy+40}`} stroke={p.lv} strokeWidth="0.4" fill="none" opacity="0.4" />
      {/* Brillo hoja izq */}
      <path
        d={`M${cx-6} ${cy+40} C${cx-10} ${cy+34} ${cx-20} ${cy+30} ${cx-26} ${cy+34}`}
        stroke="#fff" strokeWidth="1.5" fill="none" opacity="0.18" strokeLinecap="round"
      />

      {/* Hoja derecha baja */}
      <path
        d={`M${cx+2} ${cy+64} C${cx+8} ${cy+56} ${cx+20} ${cy+46} ${cx+36} ${cy+50}
            C${cx+44} ${cy+54} ${cx+42} ${cy+66} ${cx+30} ${cy+72}
            C${cx+18} ${cy+76} ${cx+6} ${cy+70} ${cx+2} ${cy+64}Z`}
        fill={`url(#glr-${id})`}
        opacity="0.95"
      />
      {/* Nervadura central hoja der */}
      <path d={`M${cx+2} ${cy+64} C${cx+16} ${cy+60} ${cx+30} ${cy+64}`} stroke={p.lv} strokeWidth="0.7" fill="none" opacity="0.6" />
      {/* Nervaduras secundarias hoja der */}
      <path d={`M${cx+10} ${cy+59} C${cx+16} ${cy+55} ${cx+22} ${cy+53}`} stroke={p.lv} strokeWidth="0.4" fill="none" opacity="0.4" />
      <path d={`M${cx+18} ${cy+62} C${cx+24} ${cy+58} ${cx+28} ${cy+58}`} stroke={p.lv} strokeWidth="0.4" fill="none" opacity="0.4" />
      {/* Brillo hoja der */}
      <path
        d={`M${cx+6} ${cy+60} C${cx+12} ${cy+54} ${cx+22} ${cy+50} ${cx+28} ${cy+54}`}
        stroke="#fff" strokeWidth="1.5" fill="none" opacity="0.18" strokeLinecap="round"
      />

      {/* ════════════════════════════════════════
          SÉPALOS — 5 puntas verdes bajo la rosa, con textura
          ════════════════════════════════════════ */}
      {/* sépalo izq largo */}
      <path d={`M${cx} ${cy+26} C${cx-7} ${cy+14} ${cx-13} ${cy+2} ${cx-9} ${cy-8}
                C${cx-5} ${cy+6} ${cx} ${cy+26}Z`}
        fill={p.lf} opacity="0.9" />
      <path d={`M${cx} ${cy+26} L${cx-9} ${cy-8}`} stroke={p.lv} strokeWidth="0.5" fill="none" opacity="0.4" />
      {/* sépalo der largo */}
      <path d={`M${cx} ${cy+26} C${cx+7} ${cy+14} ${cx+13} ${cy+2} ${cx+9} ${cy-8}
                C${cx+5} ${cy+6} ${cx} ${cy+26}Z`}
        fill={p.lf} opacity="0.9" />
      <path d={`M${cx} ${cy+26} L${cx+9} ${cy-8}`} stroke={p.lv} strokeWidth="0.5" fill="none" opacity="0.4" />
      {/* sépalo frontal */}
      <path d={`M${cx} ${cy+26} C${cx-3} ${cy+12} ${cx-1} ${cy} ${cx} ${cy-8}
                C${cx+2} ${cy+4} ${cx} ${cy+26}Z`}
        fill={p.ld} opacity="0.85" />
      {/* sépalos laterales pequeños */}
      <path d={`M${cx} ${cy+25} C${cx-11} ${cy+20} ${cx-19} ${cy+12} ${cx-15} ${cy+4}
                C${cx-9} ${cy+14} ${cx} ${cy+25}Z`}
        fill={p.lf} opacity="0.82" />
      <path d={`M${cx} ${cy+25} C${cx+11} ${cy+20} ${cx+19} ${cy+12} ${cx+15} ${cy+4}
                C${cx+9} ${cy+14} ${cx} ${cy+25}Z`}
        fill={p.lf} opacity="0.82" />

      {/* ════════════════════════════════════════
          CAPA 1 — PÉTALOS EXTERIORES
          Forma natural con bordes y curvatura realista, con venas
          ════════════════════════════════════════ */}
      {/* Pétalo ext — trasero izq */}
      <path
        d={`M${cx} ${cy+20}
            C${cx-16} ${cy+16} ${cx-27} ${cy+2} ${cx-23} ${cy-16}
            C${cx-19} ${cy-30} ${cx-8} ${cy-36} ${cx+1} ${cy-34}
            C${cx+5} ${cy-32} ${cx+3} ${cy+12} ${cx} ${cy+20}Z`}
        fill={`url(#go-${id})`}
        filter={`url(#fsh-${id})`}
        opacity="0.8"
      />
      <path d={`M${cx-2} ${cy+18} C${cx-10} ${cy+4} ${cx-14} ${cy-14} ${cx-8} ${cy-30}`}
        stroke={p.i} strokeWidth="0.6" fill="none" opacity="0.2" />

      {/* Pétalo ext — trasero der */}
      <path
        d={`M${cx} ${cy+20}
            C${cx+16} ${cy+16} ${cx+27} ${cy+2} ${cx+23} ${cy-16}
            C${cx+19} ${cy-30} ${cx+8} ${cy-36} ${cx-1} ${cy-34}
            C${cx-5} ${cy-32} ${cx-3} ${cy+12} ${cx} ${cy+20}Z`}
        fill={`url(#go-${id})`}
        filter={`url(#fsh-${id})`}
        opacity="0.8"
      />
      <path d={`M${cx+2} ${cy+18} C${cx+10} ${cy+4} ${cx+14} ${cy-14} ${cx+8} ${cy-30}`}
        stroke={p.i} strokeWidth="0.6" fill="none" opacity="0.2" />

      {/* Pétalo ext — lateral izq */}
      <path
        d={`M${cx-5} ${cy+18}
            C${cx-25} ${cy+12} ${cx-36} ${cy-4} ${cx-31} ${cy-20}
            C${cx-27} ${cy-32} ${cx-15} ${cy-36} ${cx-5} ${cy-32}
            C${cx+2} ${cy-22} ${cx+1} ${cy+8} ${cx-5} ${cy+18}Z`}
        fill={`url(#go-${id})`}
        filter={`url(#fsh-${id})`}
        opacity="0.82"
      />
      <path d={`M${cx-6} ${cy+16} C${cx-16} ${cy} ${cx-22} ${cy-16} ${cx-14} ${cy-30}`}
        stroke={p.i} strokeWidth="0.6" fill="none" opacity="0.2" />

      {/* Pétalo ext — lateral der */}
      <path
        d={`M${cx+5} ${cy+18}
            C${cx+25} ${cy+12} ${cx+36} ${cy-4} ${cx+31} ${cy-20}
            C${cx+27} ${cy-32} ${cx+15} ${cy-36} ${cx+5} ${cy-32}
            C${cx-2} ${cy-22} ${cx-1} ${cy+8} ${cx+5} ${cy+18}Z`}
        fill={`url(#go-${id})`}
        filter={`url(#fsh-${id})`}
        opacity="0.82"
      />
      <path d={`M${cx+6} ${cy+16} C${cx+16} ${cy} ${cx+22} ${cy-16} ${cx+14} ${cy-30}`}
        stroke={p.i} strokeWidth="0.6" fill="none" opacity="0.2" />

      {/* Pétalo ext — frontal bajo */}
      <path
        d={`M${cx-11} ${cy+22}
            C${cx-15} ${cy+16} ${cx-17} ${cy+4} ${cx-11} ${cy-8}
            C${cx-5} ${cy-18} ${cx+5} ${cy-18} ${cx+11} ${cy-8}
            C${cx+17} ${cy+4} ${cx+15} ${cy+16} ${cx+11} ${cy+22}
            C${cx+4} ${cy+27} ${cx-4} ${cy+27} ${cx-11} ${cy+22}Z`}
        fill={`url(#go-${id})`}
        filter={`url(#fsh-${id})`}
        opacity="0.88"
      />
      <path d={`M${cx} ${cy+22} C${cx-2} ${cy+8} ${cx} ${cy-8} ${cx} ${cy-16}`}
        stroke={p.i} strokeWidth="0.6" fill="none" opacity="0.2" />
      <path
        d={`M${cx-9} ${cy+20} C${cx-12} ${cy+14} ${cx-12} ${cy+4} ${cx-7} ${cy-6}
            C${cx+6} ${cy-6} ${cx+7} ${cy-6} ${cx+9} ${cy+20} Z`}
        fill={`url(#gsh-${id})`}
        opacity="0.28"
      />

      {/* ════════════════════════════════════════
          CAPA 2 — PÉTALOS MEDIOS
          Más erguidos, con brillos y venas sutiles
          ════════════════════════════════════════ */}
      {/* Med — lateral izq */}
      <path
        d={`M${cx-2} ${cy+14}
            C${cx-21} ${cy+8} ${cx-30} ${cy-6} ${cx-25} ${cy-22}
            C${cx-21} ${cy-34} ${cx-10} ${cy-38} ${cx-1} ${cy-34}
            C${cx+5} ${cy-30} ${cx+4} ${cy+6} ${cx-2} ${cy+14}Z`}
        fill={`url(#gm-${id})`}
        filter={`url(#fsi-${id})`}
        opacity="0.86"
      />
      <path d={`M${cx-3} ${cy+12} C${cx-12} ${cy-4} ${cx-16} ${cy-20} ${cx-10} ${cy-32}`}
        stroke={p.m} strokeWidth="0.5" fill="none" opacity="0.18" />
      <path d={`M${cx-8} ${cy+8} C${cx-14} ${cy-4} ${cx-16} ${cy-18} ${cx-11} ${cy-28}`}
        stroke="#fff" strokeWidth="1.5" fill="none" opacity="0.18" strokeLinecap="round" />

      {/* Med — fondo lateral der */}
      <path
        d={`M${cx+2} ${cy+14}
            C${cx+21} ${cy+8} ${cx+30} ${cy-6} ${cx+25} ${cy-22}
            C${cx+21} ${cy-34} ${cx+10} ${cy-38} ${cx+1} ${cy-34}
            C${cx-5} ${cy-30} ${cx-4} ${cy+6} ${cx+2} ${cy+14}Z`}
        fill={`url(#gm-${id})`}
        filter={`url(#fsi-${id})`}
        opacity="0.86"
      />
      <path d={`M${cx+3} ${cy+12} C${cx+12} ${cy-4} ${cx+16} ${cy-20} ${cx+10} ${cy-32}`}
        stroke={p.m} strokeWidth="0.5" fill="none" opacity="0.18" />
      <path d={`M${cx+6} ${cy+8} C${cx+12} ${cy-4} ${cx+14} ${cy-18} ${cx+9} ${cy-28}`}
        stroke="#fff" strokeWidth="1.5" fill="none" opacity="0.18" strokeLinecap="round" />

      {/* Med — izq frente */}
      <path
        d={`M${cx-6} ${cy+16}
            C${cx-20} ${cy+10} ${cx-26} ${cy-4} ${cx-20} ${cy-20}
            C${cx-15} ${cy-32} ${cx-6} ${cy-36} ${cx+2} ${cy-30}
            C${cx+6} ${cy-20} ${cx+2} ${cy+8} ${cx-6} ${cy+16}Z`}
        fill={`url(#gm-${id})`}
        filter={`url(#fsi-${id})`}
        opacity="0.88"
      />
      <path d={`M${cx-4} ${cy+14} C${cx-10} ${cy+0} ${cx-12} ${cy-14} ${cx-6} ${cy-28}`}
        stroke="#fff" strokeWidth="1.2" fill="none" opacity="0.15" strokeLinecap="round" />

      {/* Med — der frente */}
      <path
        d={`M${cx+6} ${cy+16}
            C${cx+20} ${cy+10} ${cx+26} ${cy-4} ${cx+20} ${cy-20}
            C${cx+15} ${cy-32} ${cx+6} ${cy-36} ${cx-2} ${cy-30}
            C${cx-6} ${cy-20} ${cx-2} ${cy+8} ${cx+6} ${cy+16}Z`}
        fill={`url(#gm-${id})`}
        filter={`url(#fsi-${id})`}
        opacity="0.88"
      />
      <path d={`M${cx+4} ${cy+14} C${cx+10} ${cy+0} ${cx+12} ${cy-14} ${cx+6} ${cy-28}`}
        stroke="#fff" strokeWidth="1.2" fill="none" opacity="0.15" strokeLinecap="round" />

      {/* Med — pétalo frontal */}
      <path
        d={`M${cx-8} ${cy+18}
            C${cx-11} ${cy+8} ${cx-11} ${cy-4} ${cx-5} ${cy-16}
            C${cx-1} ${cy-24} ${cx+3} ${cy-24} ${cx+7} ${cy-16}
            C${cx+13} ${cy-6} ${cx+11} ${cy+8} ${cx+8} ${cy+18}
            C${cx+3} ${cy+23} ${cx-3} ${cy+23} ${cx-8} ${cy+18}Z`}
        fill={`url(#gm-${id})`}
        filter={`url(#fsi-${id})`}
        opacity="0.92"
      />
      {/* Brillo pétalo frontal */}
      <path d={`M${cx-3} ${cy+14} C${cx-4} ${cy+4} ${cx-3} ${cy-8} ${cx} ${cy-18}`}
        stroke="#fff" strokeWidth="1.5" fill="none" opacity="0.22" strokeLinecap="round" />

      {/* ════════════════════════════════════════
          CAPA 3 — PÉTALOS INTERNOS
          Más estrechos y altos, crean la copa interna, con brillos fuertes
          ════════════════════════════════════════ */}
      {/* Inner — envuelve izq */}
      <path
        d={`M${cx-2} ${cy+10}
            C${cx-14} ${cy+6} ${cx-18} ${cy-8} ${cx-14} ${cy-22}
            C${cx-10} ${cy-32} ${cx-4} ${cy-36} ${cx+2} ${cy-30}
            C${cx+5} ${cy-22} ${cx+2} ${cy+4} ${cx-2} ${cy+10}Z`}
        fill={`url(#gi-${id})`}
        filter={`url(#fglow-${id})`}
        opacity="0.9"
      />
      <path d={`M${cx-5} ${cy+6} C${cx-10} ${cy-6} ${cx-12} ${cy-20} ${cx-8} ${cy-30}`}
        stroke="#fff" strokeWidth="1.3" fill="none" opacity="0.22" strokeLinecap="round" />

      {/* Inner — envuelve der */}
      <path
        d={`M${cx+2} ${cy+10}
            C${cx+14} ${cy+6} ${cx+18} ${cy-8} ${cx+14} ${cy-22}
            C${cx+10} ${cy-32} ${cx+4} ${cy-36} ${cx-2} ${cy-30}
            C${cx-5} ${cy-22} ${cx-2} ${cy+4} ${cx+2} ${cy+10}Z`}
        fill={`url(#gi-${id})`}
        filter={`url(#fglow-${id})`}
        opacity="0.9"
      />
      <path d={`M${cx+5} ${cy+6} C${cx+10} ${cy-6} ${cx+12} ${cy-20} ${cx+8} ${cy-30}`}
        stroke="#fff" strokeWidth="1.3" fill="none" opacity="0.22" strokeLinecap="round" />

      {/* Inner — pétalo central alzado */}
      <path
        d={`M${cx-5} ${cy+12}
            C${cx-7} ${cy+4} ${cx-7} ${cy-8} ${cx-2} ${cy-20}
            C${cx} ${cy-28} ${cx+2} ${cy-28} ${cx+6} ${cy-20}
            C${cx+9} ${cy-10} ${cx+7} ${cy+4} ${cx+5} ${cy+12}
            C${cx+2} ${cy+17} ${cx-2} ${cy+17} ${cx-5} ${cy+12}Z`}
        fill={`url(#gi-${id})`}
        filter={`url(#fglow-${id})`}
        opacity="0.94"
      />
      <path d={`M${cx-1} ${cy+10} C${cx-2} ${cy} ${cx-1} ${cy-12} ${cx+1} ${cy-22}`}
        stroke="#fff" strokeWidth="1.5" fill="none" opacity="0.28" strokeLinecap="round" />

      {/* ════════════════════════════════════════
          CAPULLO CENTRAL — espiral de la yema con brillo natural
          ════════════════════════════════════════ */}
      {/* Enrollado exterior */}
      <path
        d={`M${cx} ${cy+6}
            C${cx+10} ${cy+2} ${cx+13} ${cy-10} ${cx+9} ${cy-20}
            C${cx+5} ${cy-28} ${cx} ${cy-30} ${cx} ${cy-30}
            C${cx-4} ${cy-28} ${cx-9} ${cy-22} ${cx-7} ${cy-12}
            C${cx-5} ${cy-4} ${cx} ${cy+6}Z`}
        fill={`url(#gc-${id})`}
        opacity="0.96"
      />
      {/* Brillo del enrollado */}
      <path d={`M${cx-3} ${cy+2} C${cx-6} ${cy-8} ${cx-6} ${cy-20} ${cx-2} ${cy-28}`}
        stroke="#fff" strokeWidth="1.8" fill="none" opacity="0.28" strokeLinecap="round" />

      {/* Enrollado interior — pétalo que abraza */}
      <path
        d={`M${cx+2} ${cy+2}
            C${cx+8} ${cy-2} ${cx+11} ${cy-12} ${cx+7} ${cy-22}
            C${cx+4} ${cy-28} ${cx} ${cy-28} ${cx} ${cy-24}
            C${cx-2} ${cy-16} ${cx-2} ${cy-6} ${cx+2} ${cy+2}Z`}
        fill={p.o}
        opacity="0.82"
      />
      {/* Núcleo cerrado con brillo especular realista */}
      <ellipse cx={cx} cy={cy-20} rx="5.5" ry="6.5" fill={p.o} opacity="0.97" />
      <ellipse cx={cx-1.5} cy={cy-22} rx="2.2" ry="2.8" fill="#fff" opacity="0.55" />
      <ellipse cx={cx+1.5} cy={cy-18} rx="1" ry="1.2" fill="#fff" opacity="0.3" />
    </svg>
  );
}
