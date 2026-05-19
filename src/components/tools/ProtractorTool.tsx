"use client";

import { useState, useRef, useCallback, useEffect } from "react";

export default function ProtractorTool() {
  const [angle, setAngle] = useState(127.5);
  const [unit, setUnit] = useState<"deg" | "rad" | "grad">("deg");
  const isDragging = useRef(false);
  const svgRef = useRef<SVGSVGElement>(null);

  const getAngleFromEvent = useCallback((clientX: number, clientY: number) => {
    const svg = svgRef.current;
    if (!svg) return 0;
    const rect = svg.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = clientX - cx;
    const dy = clientY - cy;
    let deg = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
    if (deg < 0) deg += 360;
    // Snap to cardinal directions
    const snap = 0.3;
    if (Math.abs(deg) < snap || Math.abs(deg - 360) < snap) deg = 0;
    else if (Math.abs(deg - 90) < snap) deg = 90;
    else if (Math.abs(deg - 180) < snap) deg = 180;
    else if (Math.abs(deg - 270) < snap) deg = 270;
    return Math.round(deg * 10) / 10;
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true;
    setAngle(getAngleFromEvent(e.clientX, e.clientY));
  }, [getAngleFromEvent]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current) return;
    setAngle(getAngleFromEvent(e.clientX, e.clientY));
  }, [getAngleFromEvent]);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handleClick = useCallback((e: React.MouseEvent) => {
    if (isDragging.current) return;
    setAngle(getAngleFromEvent(e.clientX, e.clientY));
  }, [getAngleFromEvent]);

  // Global mouse events for drag that leaves SVG
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      setAngle(getAngleFromEvent(e.clientX, e.clientY));
    };
    const handleUp = () => {
      isDragging.current = false;
    };
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
    };
  }, [getAngleFromEvent]);

  const adjustAngle = (delta: number) => {
    setAngle((prev) => {
      let next = prev + delta;
      if (next >= 360) next -= 360;
      if (next < 0) next += 360;
      return Math.round(next * 10) / 10;
    });
  };

  const displayValue = () => {
    if (unit === "rad") return ((angle * Math.PI) / 180).toFixed(4);
    if (unit === "grad") return ((angle * 200) / 180).toFixed(2);
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

  // SVG parameters
  const size = 400;
  const center = size / 2;
  const radius = 180;
  const innerRadius = 140;

  // Generate tick marks
  const ticks = [];
  for (let i = 0; i < 360; i += 1) {
    const isMajor = i % 10 === 0;
    const isMedium = i % 5 === 0;
    const tickLen = isMajor ? 12 : isMedium ? 7 : 3;
    const r1 = radius - tickLen;
    const r2 = radius;
    const rad = ((i - 90) * Math.PI) / 180;
    const x1 = center + r1 * Math.cos(rad);
    const y1 = center + r1 * Math.sin(rad);
    const x2 = center + r2 * Math.cos(rad);
    const y2 = center + r2 * Math.sin(rad);
    ticks.push(
      <line
        key={i}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={isMajor ? "#012d1d" : "#8c9a8a"}
        strokeWidth={isMajor ? 1.5 : 0.8}
      />
    );
  }

  // Generate labels
  const labels = [];
  for (let i = 0; i < 360; i += 10) {
    const rad = ((i - 90) * Math.PI) / 180;
    const lx = center + (radius - 28) * Math.cos(rad);
    const ly = center + (radius - 28) * Math.sin(rad);
    labels.push(
      <text
        key={i}
        x={lx}
        y={ly}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="11"
        fontWeight="600"
        fill="#012d1d"
        style={{ fontFamily: "var(--font-mono), monospace" }}
      >
        {i}
      </text>
    );
  }

  // Pointer arm
  const armRad = ((angle - 90) * Math.PI) / 180;
  const armEndX = center + (radius - 15) * Math.cos(armRad);
  const armEndY = center + (radius - 15) * Math.sin(armRad);

  // Inner arc for fill
  const arcPath = `M ${center} ${center} L ${center} ${center - radius + 20} A ${radius - 20} ${radius - 20} 0 0 1 ${center + (radius - 20) * Math.cos((-30 * Math.PI) / 180)} ${center + (radius - 20) * Math.sin((-30 * Math.PI) / 180)} Z`;

  return (
    <section className="py-12 px-6 max-w-[1280px] mx-auto">
      <div className="text-center mb-8">
        <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-af-on-surface mb-2">
          Online Protractor
        </h1>
        <p className="text-af-on-surface-variant">
          Measure any angle from 0° to 360°. Click or drag to rotate.
        </p>
      </div>

      <div className="bg-af-surface border border-af-outline-variant rounded-xl p-6 md:p-10 shadow-sm max-w-3xl mx-auto">
        {/* SVG Protractor */}
        <div className="flex justify-center mb-8">
          <svg
            ref={svgRef}
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            className="cursor-crosshair touch-none select-none"
            onMouseDown={handleMouseDown}
            onClick={handleClick}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            {/* Background circle */}
            <circle
              cx={center}
              cy={center}
              r={radius}
              fill="#fafaf9"
              stroke="#c8d0c4"
              strokeWidth={1.5}
            />

            {/* Inner faint circle */}
            <circle
              cx={center}
              cy={center}
              r={innerRadius}
              fill="none"
              stroke="#e0e5dc"
              strokeWidth={1}
              strokeDasharray="4 4"
            />

            {/* Tick marks */}
            {ticks}

            {/* Labels */}
            {labels}

            {/* Center crosshair */}
            <line
              x1={center - 8}
              y1={center}
              x2={center + 8}
              y2={center}
              stroke="#012d1d"
              strokeWidth={1.5}
            />
            <line
              x1={center}
              y1={center - 8}
              x2={center}
              y2={center + 8}
              stroke="#012d1d"
              strokeWidth={1.5}
            />

            {/* Pointer arm */}
            <line
              x1={center}
              y1={center}
              x2={armEndX}
              y2={armEndY}
              stroke="#012d1d"
              strokeWidth={2.5}
              strokeLinecap="round"
            />

            {/* Pointer tip */}
            <circle
              cx={armEndX}
              cy={armEndY}
              r={6}
              fill="#012d1d"
              className="cursor-move"
            />

            {/* Center pivot */}
            <circle
              cx={center}
              cy={center}
              r={5}
              fill="#012d1d"
            />
          </svg>
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
            <button
              onClick={() => adjustAngle(-1)}
              className="flex-1 py-3 border border-af-outline-variant rounded-lg hover:bg-af-surface-container transition-colors font-bold"
            >
              −1°
            </button>
            <button
              onClick={() => adjustAngle(1)}
              className="flex-1 py-3 border border-af-outline-variant rounded-lg hover:bg-af-surface-container transition-colors font-bold"
            >
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
                  if (unit === "deg")
                    setAngle(
                      Math.max(
                        0,
                        Math.min(360, Math.round(val * 10) / 10)
                      )
                    );
                  else if (unit === "rad")
                    setAngle(
                      Math.max(
                        0,
                        Math.min(
                          360,
                          Math.round((val * 180) / Math.PI * 10) / 10
                        )
                      )
                    );
                  else
                    setAngle(
                      Math.max(
                        0,
                        Math.min(
                          360,
                          Math.round((val * 180) / 200 * 10) / 10
                        )
                      )
                    );
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
