"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";

export default function HeroSection() {
  const [angle, setAngle] = useState(127);
  const [unit, setUnit] = useState<"deg" | "rad" | "grad">("deg");
  const dialRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const getAngleFromEvent = useCallback((clientX: number, clientY: number) => {
    const rect = dialRef.current?.getBoundingClientRect();
    if (!rect) return 0;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = clientX - cx;
    const dy = clientY - cy;
    let deg = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
    if (deg < 0) deg += 360;
    return Math.round(deg * 10) / 10;
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isDragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    setAngle(getAngleFromEvent(e.clientX, e.clientY));
  }, [getAngleFromEvent]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    setAngle(getAngleFromEvent(e.clientX, e.clientY));
  }, [getAngleFromEvent]);

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const displayAngle = () => {
    if (unit === "rad") return (angle * Math.PI / 180).toFixed(4) + " rad";
    if (unit === "grad") return (angle * 200 / 180).toFixed(2) + " grad";
    return angle.toFixed(1) + "°";
  };

  const adjustAngle = (delta: number) => {
    setAngle((prev) => {
      let next = prev + delta;
      if (next >= 360) next -= 360;
      if (next < 0) next += 360;
      return Math.round(next * 10) / 10;
    });
  };

  const copyResult = () => {
    navigator.clipboard.writeText(displayAngle());
  };

  return (
    <section className="py-16 px-6 text-center bg-af-background">
      <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-af-on-surface mb-4">
        Measure Any Angle. Instantly.
      </h1>
      <p className="text-lg text-af-on-surface-variant max-w-2xl mx-auto mb-10">
        Free 360° online protractor — no signup required. Precision tools for students, DIYers, and professionals.
      </p>

      {/* Protractor Card */}
      <div className="max-w-[800px] mx-auto bg-af-surface border border-af-outline-variant rounded-xl p-6 md:p-10 shadow-sm">
        {/* Dial */}
        <div
          ref={dialRef}
          className="relative w-[280px] h-[280px] md:w-[360px] md:h-[360px] mx-auto rounded-full border border-af-outline-variant flex items-center justify-center mb-8 select-none"
          style={{
            background: `conic-gradient(from 0deg, transparent 0deg, #f3f4f1 1deg, transparent 2deg, transparent 28deg, #f3f4f1 29deg, transparent 30deg, transparent 58deg, #f3f4f1 59deg, transparent 60deg, transparent 88deg, #f3f4f1 89deg, transparent 90deg, transparent 118deg, #f3f4f1 119deg, transparent 120deg, transparent 148deg, #f3f4f1 149deg, transparent 150deg, transparent 178deg, #f3f4f1 179deg, transparent 180deg, transparent 208deg, #f3f4f1 209deg, transparent 210deg, transparent 238deg, #f3f4f1 239deg, transparent 240deg, transparent 268deg, #f3f4f1 269deg, transparent 270deg, transparent 298deg, #f3f4f1 299deg, transparent 300deg, transparent 328deg, #f3f4f1 329deg, transparent 330deg, transparent 358deg, #f3f4f1 359deg, transparent 360deg)`,
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
        >
          {/* Degree labels */}
          <span className="absolute top-3 text-xs text-af-outline font-[family-name:var(--font-mono)]">0°</span>
          <span className="absolute right-3 text-xs text-af-outline font-[family-name:var(--font-mono)]">90°</span>
          <span className="absolute bottom-3 text-xs text-af-outline font-[family-name:var(--font-mono)]">180°</span>
          <span className="absolute left-3 text-xs text-af-outline font-[family-name:var(--font-mono)]">270°</span>

          {/* Pointer arm */}
          <div
            className="absolute w-1/2 h-[2px] bg-af-tertiary origin-right right-1/2 top-1/2"
            style={{ transform: `rotate(${angle}deg)` }}
          >
            <div className="absolute -left-2 -top-2 w-4 h-4 bg-af-tertiary rounded-full shadow cursor-grab active:cursor-grabbing" />
          </div>

          {/* Center display */}
          <div className="flex flex-col items-center z-10 bg-af-surface rounded-full w-24 h-24 justify-center shadow-sm">
            <span className="font-[family-name:var(--font-mono)] text-3xl md:text-4xl text-af-on-surface font-bold">
              {unit === "deg" ? angle.toFixed(1) : unit === "rad" ? (angle * Math.PI / 180).toFixed(2) : (angle * 200 / 180).toFixed(1)}
            </span>
            <span className="text-xs text-af-on-surface-variant font-[family-name:var(--font-mono)]">
              {unit === "deg" ? "°" : unit === "rad" ? "rad" : "grad"}
            </span>
          </div>
        </div>

        {/* Unit toggle */}
        <div className="flex justify-center bg-af-surface-container-high p-1 rounded-lg w-fit mx-auto mb-6">
          {(["deg", "rad", "grad"] as const).map((u) => (
            <button
              key={u}
              onClick={() => setUnit(u)}
              className={`px-4 py-1.5 rounded-md text-xs font-bold uppercase transition-colors ${
                unit === u
                  ? "bg-af-surface text-af-primary shadow-sm"
                  : "text-af-on-surface-variant hover:text-af-primary"
              }`}
            >
              {u}
            </button>
          ))}
        </div>

        {/* Fine controls */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <button
            onClick={() => adjustAngle(-1)}
            className="w-12 h-12 flex items-center justify-center border border-af-outline-variant rounded-lg hover:bg-af-surface-container transition-colors active:scale-95 text-xl font-bold"
            aria-label="Decrease 1 degree"
          >
            −
          </button>
          <input
            type="number"
            value={unit === "deg" ? angle.toFixed(1) : unit === "rad" ? (angle * Math.PI / 180).toFixed(4) : (angle * 200 / 180).toFixed(2)}
            onChange={(e) => {
              const val = parseFloat(e.target.value);
              if (!isNaN(val)) {
                if (unit === "deg") setAngle(Math.max(0, Math.min(360, Math.round(val * 10) / 10)));
                else if (unit === "rad") setAngle(Math.max(0, Math.min(360, Math.round((val * 180 / Math.PI) * 10) / 10)));
                else setAngle(Math.max(0, Math.min(360, Math.round((val * 180 / 200) * 10) / 10)));
              }
            }}
            className="w-28 text-center h-12 bg-af-surface border border-af-outline font-[family-name:var(--font-mono)] text-lg rounded-lg focus:ring-2 focus:ring-af-primary-container outline-none"
          />
          <button
            onClick={() => adjustAngle(1)}
            className="w-12 h-12 flex items-center justify-center border border-af-outline-variant rounded-lg hover:bg-af-surface-container transition-colors active:scale-95 text-xl font-bold"
            aria-label="Increase 1 degree"
          >
            +
          </button>
        </div>

        {/* Actions */}
        <div className="flex flex-col items-center gap-3">
          <button
            onClick={copyResult}
            className="w-full max-w-xs bg-af-tertiary text-af-on-tertiary py-3 rounded-lg font-bold hover:opacity-90 active:scale-[0.98] transition-all"
          >
            Copy Result
          </button>
          <p className="text-[12px] text-af-outline">
            Results are for educational use only. Not for professional surveying or medical diagnosis.
          </p>
        </div>
      </div>

      {/* Sub-CTA */}
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link href="/calculator" className="bg-af-primary-container text-af-on-primary px-6 py-3 rounded-full font-bold hover:opacity-90 transition-opacity">
          Try Triangle Calculator
        </Link>
        <Link href="/image" className="border border-af-outline-variant text-af-primary px-6 py-3 rounded-full font-bold hover:bg-af-surface-container transition-colors">
          Measure on Image
        </Link>
      </div>
    </section>
  );
}
