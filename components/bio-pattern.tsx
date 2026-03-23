import Image from "next/image";

// Upright EW logos
const UPRIGHT = [
  { left: "4%",  top: "6%",  w: 54, rot: -15, op: 0.20 },
  { left: "24%", top: "2%",  w: 48, rot:  22, op: 0.18 },
  { left: "48%", top: "5%",  w: 52, rot:  -5, op: 0.19 },
  { left: "72%", top: "8%",  w: 50, rot:  30, op: 0.17 },
  { left: "88%", top: "15%", w: 48, rot: -12, op: 0.18 },
  { left: "10%", top: "22%", w: 50, rot:  18, op: 0.17 },
  { left: "40%", top: "15%", w: 46, rot: -22, op: 0.19 },
  { left: "66%", top: "20%", w: 52, rot:  15, op: 0.18 },
  { right: "3%", top: "28%", w: 46, rot: -25, op: 0.20 },
  { left: "14%", top: "45%", w: 52, rot:  12, op: 0.18 },
  { left: "36%", top: "40%", w: 48, rot: -30, op: 0.16 },
  { left: "60%", top: "35%", w: 54, rot:   8, op: 0.19 },
  { left: "82%", top: "48%", w: 50, rot: -18, op: 0.17 },
  { left: "26%", top: "58%", w: 48, rot:  -8, op: 0.17 },
  { left: "50%", top: "62%", w: 52, rot:  25, op: 0.19 },
  { left: "74%", top: "55%", w: 46, rot: -35, op: 0.18 },
  { left: "8%",  bottom: "8%",  w: 52, rot:  20, op: 0.20 },
  { left: "20%", bottom: "18%", w: 50, rot:   5, op: 0.18 },
  { left: "32%", bottom: "4%",  w: 46, rot: -10, op: 0.18 },
  { left: "44%", bottom: "15%", w: 48, rot: -20, op: 0.19 },
  { left: "56%", bottom: "10%", w: 50, rot:  35, op: 0.17 },
  { left: "90%", bottom: "12%", w: 50, rot:  10, op: 0.17 },
];

// Sideways/tilted EW logos
const TILTED = [
  { left: "10%", top: "10%",    w: 46, rot:   75, op: 0.17 },
  { right: "12%", top: "5%",   w: 50, rot:  -80, op: 0.18 },
  { left: "2%",  top: "35%",   w: 48, rot:   95, op: 0.19 },
  { left: "58%", top: "12%",   w: 50, rot:  -70, op: 0.17 },
  { left: "44%", top: "28%",   w: 52, rot:  110, op: 0.17 },
  { left: "86%", top: "35%",   w: 48, rot:  -95, op: 0.18 },
  { left: "8%",  top: "72%",   w: 52, rot:   85, op: 0.19 },
  { left: "32%", top: "74%",   w: 48, rot: -105, op: 0.17 },
  { left: "64%", bottom: "20%", w: 50, rot:   68, op: 0.18 },
  { right: "5%", bottom: "20%", w: 54, rot:  -88, op: 0.20 },
  { left: "76%", bottom: "5%",  w: 48, rot:  115, op: 0.18 },
  { left: "80%", top: "70%",   w: 52, rot:  -72, op: 0.18 },
];

// Signature logos (fewer, larger)
const SIGNATURES = [
  { left: "1%",  top: "68%",    w: 112, rot: -10, op: 0.14 },
  { left: "30%", top: "60%",    w:  96, rot:  14, op: 0.13 },
  { right: "2%", top: "55%",    w: 104, rot: -12, op: 0.14 },
  { left: "18%", top: "12%",    w:  92, rot:  -8, op: 0.13 },
  { left: "62%", bottom: "3%",  w: 100, rot:   6, op: 0.13 },
];

type Item = {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  w: number;
  rot: number;
  op: number;
};

function logoStyle(item: Item) {
  return {
    left: item.left,
    right: item.right,
    top: item.top,
    bottom: item.bottom,
    width: item.w,
    transform: `rotate(${item.rot}deg)`,
    opacity: item.op,
  };
}

export function BioPattern() {
  return (
    <div className="bio-pattern" aria-hidden="true">
      {UPRIGHT.map((item, i) => (
        <Image key={`u${i}`} src="/logo-ew.png" alt="" width={item.w} height={item.w} className="bp-item" style={logoStyle(item)} />
      ))}
      {TILTED.map((item, i) => (
        <Image key={`t${i}`} src="/logo-ew.png" alt="" width={item.w} height={item.w} className="bp-item" style={logoStyle(item)} />
      ))}
      {SIGNATURES.map((item, i) => (
        <Image key={`s${i}`} src="/logo-eli-ward.png" alt="" width={item.w} height={Math.round(item.w * 0.43)} className="bp-item" style={logoStyle(item)} />
      ))}
    </div>
  );
}
