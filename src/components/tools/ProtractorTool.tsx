"use client";

import { useState, useRef, useCallback } from "react";

export default function ProtractorTool() {
  const [angle, setAngle] = useState(127.5);
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

  const adjustAngle = (delta: number) => {
    setAngle((prev) => {
      let next = prev + delta;
      if (next >= 360) next -= 360;
      if (next < 0) next += 360;
      return Math.round(next * 10) / 10;
    });
  };

  const displayValue = () => {
    if (unit === "rad") return (angle * Math.PI / 180).toFixed(4);
    if (unit === "grad") return (angle * 200 / 180).toFixed(2);
    return angle.toFixed(1);
  };

  const displayUnit = () => {
    if (unit === "rad") return "rad";
    if (unit === "grad") return "grad";
    return "°";
  };

  const copyResult = () => {
    navigator.clipboard.writeText(`${displayValue()} ${displayUnit()}`);
  };

  return (
    <section className="py-12 px-6 max-w-[1280px] mx-auto">
      <div className="text-center mb-8">
        <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-af-on-surface mb-2">
          Online Protractor
        </h1>
        <p className="text-af-on-surface-variant">Measure any angle from 0° to 360°. Drag to rotate.</p>
      </div>

      <div className="bg-af-surface border border-af-outline-variant rounded-xl p-6 md:p-10 shadow-sm max-w-3xl mx-auto">
        {/* Semi-circle protractor */}
        <div className="flex justify-center mb-8">
          <div className="relative w-[320px] h-[160px] md:w-[500px] md:h-[250px]">
            {/* Semi-circle */}
            <div
              className="w-full h-[200%] rounded-full border border-af-outline-variant relative overflow-hidden bg-af-surface"
              style={{
                background: `conic-gradient(from 180deg at 50% 100%, transparent 0deg, #f3f4f1 1deg, transparent 2deg, transparent 8deg, #f3f4f1 9deg, transparent 10deg, transparent 18deg, #f3f4f1 19deg, transparent 20deg, transparent 28deg, #f3f4f1 29deg, transparent 30deg, transparent 38deg, #f3f4f1 39deg, transparent 40deg, transparent 48deg, #f3f4f1 49deg, transparent 50deg, transparent 58deg, #f3f4f1 59deg, transparent 60deg, transparent 68deg, #f3f4f1 69deg, transparent 70deg, transparent 78deg, #f3f4f1 79deg, transparent 80deg, transparent 88deg, #f3f4f1 89deg, transparent 90deg)`,
              }}
            />
            {/* Center pivot */}
            <div
              ref={dialRef}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-af-primary rounded-full z-20"
            />
            {/* Pointer arm */}
            <div
              className="absolute bottom-0 left-1/2 h-[90%] w-[2px] bg-af-tertiary origin-bottom z-10"
              style={{ transform: `translateX(-50%) rotate(${angle - 90}deg)` }}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-5 bg-af-tertiary rounded-full cursor-move shadow" />
            </div>
          </div>
        </div>

        {/* Readout */}
        <div className="text-center mb-6">
          <div className="font-[family-name:var(--font-mono)] text-6xl md:text-7xl font-bold text-af-primary-container leading-none">
            {displayValue()}
            <span className="text-3xl md:text-4xl">{displayUnit()}</span>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {(["deg", "rad", "grad"] as const).map((u) => (
              <button
                key={u}
                onClick={() => setUnit(u)}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase transition-colors ${
                  unit === u
                    ? "bg-af-primary-container text-af-on-primary"
                    : "bg-af-surface-container text-af-on-surface-variant hover:bg-af-surface-container-high"
                }`}
              >
                {u}
              </button>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center border-t border-af-outline-variant pt-6">
          <div className="flex gap-2">
            <button onClick={() => adjustAngle(-1)} className="flex-1 py-3 border border-af-outline-variant rounded-lg hover:bg-af-surface-container transition-colors font-bold">
              −1°
            </button>
            <button onClick={() => adjustAngle(1)} className="flex-1 py-3 border border-af-outline-variant rounded-lg hover:bg-af-surface-container transition-colors font-bold">
              +1°
            </button>
          </div>
          <div className="relative">
            <label className="absolute -top-2.5 left-3 px-1 bg-af-surface text-[10px] font-bold text-af-outline uppercase tracking-wider">
              Manual Input
            </label>
            <input
              type="number"
              min={unit === "deg" ? 0 : unit === "rad" ? 0 : 0}
              max={unit === "deg" ? 360 : unit === "rad" ? 6.2832 : 400}
              step={unit === "deg" ? 0.1 : unit === "rad" ? 0.0001 : 0.1}
              value={displayValue()}
              onChange={(e) => {
                const val = parseFloat(e.target.value);
                if (!isNaN(val)) {
                  if (unit === "deg") setAngle(Math.max(0, Math.min(360, Math.round(val * 10) / 10)));
                  else if (unit === "rad") setAngle(Math.max(0, Math.min(360, Math.round((val * 180 / Math.PI) * 10) / 10)));
                  else setAngle(Math.max(0, Math.min(360, Math.round((val * 180 / 200) * 10) / 10)));
                }
              }}
              className="w-full py-3 px-4 border border-af-outline-variant rounded-lg font-[family-name:var(--font-mono)] text-lg text-center focus:border-af-primary focus:ring-1 focus:ring-af-primary outline-none"
            />
          </div>
          <button
            onClick={copyResult}
            className="w-full py-3 bg-af-tertiary text-af-on-tertiary rounded-lg font-bold hover:brightness-110 transition-all flex items-center justify-center gap-2"
          >
            <span>Copy Result</span>
          </button>
        </div>

        <p className="text-center mt-4 text-xs text-af-outline">
          ±0.1° accuracy for educational purposes.
        </p>
      </div>
    </section>
  );
}
