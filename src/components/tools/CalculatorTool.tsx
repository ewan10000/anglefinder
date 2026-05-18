"use client";

import { useState, useCallback } from "react";
import { CheckCircle, BookOpen, AlertTriangle } from "lucide-react";

type Mode = "SSS" | "SAS" | "ASA" | "AAS" | "HL";

interface Result {
  angleA?: number;
  angleB?: number;
  angleC?: number;
  sideA?: number;
  sideB?: number;
  sideC?: number;
  area?: number;
  perimeter?: number;
  steps: string[];
}

export default function CalculatorTool() {
  const [mode, setMode] = useState<Mode>("SSS");
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [result, setResult] = useState<Result | null>(null);
  const [unit, setUnit] = useState<"deg" | "rad" | "grad">("deg");

  const updateInput = (key: string, value: string) => {
    setInputs((prev) => ({ ...prev, [key]: value }));
  };

  const toRad = (d: number) => (d * Math.PI) / 180;
  const fromRad = (r: number) => {
    const deg = (r * 180) / Math.PI;
    if (unit === "rad") return r;
    if (unit === "grad") return (deg * 200) / 180;
    return deg;
  };
  const formatAngle = (v: number) => {
    const val = fromRad(v);
    if (unit === "rad") return val.toFixed(4) + " rad";
    if (unit === "grad") return val.toFixed(2) + " grad";
    return val.toFixed(2) + "°";
  };

  const calculate = useCallback(() => {
    const get = (k: string) => parseFloat(inputs[k] || "0");
    const steps: string[] = [];
    let res: Result = { steps };

    try {
      if (mode === "SSS") {
        const a = get("a"), b = get("b"), c = get("c");
        if (a + b <= c || a + c <= b || b + c <= a) {
          steps.push("Error: Triangle inequality violated. Sum of any two sides must exceed the third.");
          setResult(res);
          return;
        }
        // Law of Cosines
        const A = Math.acos((b * b + c * c - a * a) / (2 * b * c));
        const B = Math.acos((a * a + c * c - b * b) / (2 * a * c));
        const C = Math.PI - A - B;
        const s = (a + b + c) / 2;
        res = {
          sideA: a, sideB: b, sideC: c,
          angleA: A, angleB: B, angleC: C,
          area: Math.sqrt(s * (s - a) * (s - b) * (s - c)),
          perimeter: a + b + c,
          steps: [
            `Using Law of Cosines for Angle A: arccos((b² + c² - a²) / 2bc)`,
            `Angle A = arccos((${b}² + ${c}² - ${a}²) / (2 * ${b} * ${c})) = ${formatAngle(A)}`,
            `Using Law of Sines for Angle B: sin(B) / b = sin(A) / a`,
            `Angle B = ${formatAngle(B)}`,
            `Angle C = 180° - (A + B) = ${formatAngle(C)}`,
          ],
        };
      } else if (mode === "SAS") {
        const a = get("a"), C = toRad(get("C")), b = get("b");
        const c = Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(C));
        const A = Math.acos((b * b + c * c - a * a) / (2 * b * c));
        const B = Math.PI - A - C;
        const s = (a + b + c) / 2;
        res = {
          sideA: a, sideB: b, sideC: c,
          angleA: A, angleB: B, angleC: C,
          area: Math.sqrt(s * (s - a) * (s - b) * (s - c)),
          perimeter: a + b + c,
          steps: [
            `Given sides a=${a}, b=${b} and included angle C=${get("C")}°`,
            `Using Law of Cosines: c² = a² + b² - 2ab·cos(C)`,
            `Side c = ${c.toFixed(2)}`,
            `Then solved remaining angles using Law of Sines.`,
          ],
        };
      } else if (mode === "ASA") {
        const A = toRad(get("A")), c = get("c"), B = toRad(get("B"));
        const C = Math.PI - A - B;
        const a = (c * Math.sin(A)) / Math.sin(C);
        const b = (c * Math.sin(B)) / Math.sin(C);
        const s = (a + b + c) / 2;
        res = {
          sideA: a, sideB: b, sideC: c,
          angleA: A, angleB: B, angleC: C,
          area: Math.sqrt(s * (s - a) * (s - b) * (s - c)),
          perimeter: a + b + c,
          steps: [
            `Given angles A=${get("A")}°, B=${get("B")}° and included side c=${c}`,
            `Angle C = 180° - (${get("A")} + ${get("B")}) = ${(C * 180 / Math.PI).toFixed(2)}°`,
            `Using Law of Sines: a = c·sin(A)/sin(C) = ${a.toFixed(2)}`,
          ],
        };
      } else if (mode === "AAS") {
        const A = toRad(get("A")), B = toRad(get("B")), a = get("a");
        const C = Math.PI - A - B;
        const b = (a * Math.sin(B)) / Math.sin(A);
        const c = (a * Math.sin(C)) / Math.sin(A);
        const s = (a + b + c) / 2;
        res = {
          sideA: a, sideB: b, sideC: c,
          angleA: A, angleB: B, angleC: C,
          area: Math.sqrt(s * (s - a) * (s - b) * (s - c)),
          perimeter: a + b + c,
          steps: [
            `Given angles A=${get("A")}°, B=${get("B")}° and side a=${a}`,
            `Angle C = 180° - (${get("A")} + ${get("B")})`,
            `Using Law of Sines to find remaining sides.`,
          ],
        };
      } else if (mode === "HL") {
        // Hypotenuse-Leg for right triangles
        const c = get("c"), a = get("a");
        if (c <= a) {
          steps.push("Error: Hypotenuse must be longer than the leg.");
          setResult(res);
          return;
        }
        const b = Math.sqrt(c * c - a * a);
        const A = Math.asin(a / c);
        const B = Math.PI / 2 - A;
        const C = Math.PI / 2;
        res = {
          sideA: a, sideB: b, sideC: c,
          angleA: A, angleB: B, angleC: C,
          area: 0.5 * a * b,
          perimeter: a + b + c,
          steps: [
            `Right triangle: hypotenuse c=${c}, leg a=${a}`,
            `Using Pythagorean theorem: b = √(c² - a²) = ${b.toFixed(2)}`,
            `Angle A = arcsin(a/c) = ${formatAngle(A)}`,
          ],
        };
      }
      setResult(res);
    } catch {
      setResult({ steps: ["Error: Please check your input values."] });
    }
  }, [mode, inputs, unit]);

  const modeInputs: Record<Mode, { key: string; label: string; type: "side" | "angle" }[]> = {
    SSS: [
      { key: "a", label: "Side A (a)", type: "side" },
      { key: "b", label: "Side B (b)", type: "side" },
      { key: "c", label: "Side C (c)", type: "side" },
    ],
    SAS: [
      { key: "a", label: "Side A (a)", type: "side" },
      { key: "C", label: "Angle C (°)", type: "angle" },
      { key: "b", label: "Side B (b)", type: "side" },
    ],
    ASA: [
      { key: "A", label: "Angle A (°)", type: "angle" },
      { key: "c", label: "Side C (c)", type: "side" },
      { key: "B", label: "Angle B (°)", type: "angle" },
    ],
    AAS: [
      { key: "A", label: "Angle A (°)", type: "angle" },
      { key: "B", label: "Angle B (°)", type: "angle" },
      { key: "a", label: "Side A (a)", type: "side" },
    ],
    HL: [
      { key: "c", label: "Hypotenuse (c)", type: "side" },
      { key: "a", label: "Leg A (a)", type: "side" },
    ],
  };

  return (
    <section className="py-12 px-6 max-w-[1280px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Calculator */}
        <div className="lg:col-span-8">
          <div className="bg-af-surface border border-af-outline-variant rounded-xl p-6 md:p-8">
            <div className="mb-6">
              <h1 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-af-on-surface mb-1">
                Triangle Angle Calculator
              </h1>
              <p className="text-af-on-surface-variant">Solve any triangle. Enter what you know, we calculate the rest.</p>
            </div>

            {/* Mode Tabs */}
            <div className="flex flex-wrap gap-2 mb-8 bg-af-surface-container p-1 rounded-full w-fit">
              {(["SSS", "SAS", "ASA", "AAS", "HL"] as Mode[]).map((m) => (
                <button
                  key={m}
                  onClick={() => { setMode(m); setResult(null); setInputs({}); }}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    mode === m
                      ? "bg-af-primary text-af-on-primary"
                      : "text-af-on-surface-variant hover:bg-af-surface-variant"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {modeInputs[mode].map((field) => (
                <div key={field.key} className="space-y-2">
                  <label className="text-xs font-bold text-af-primary uppercase tracking-wider">
                    {field.label}
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={inputs[field.key] || ""}
                      onChange={(e) => updateInput(field.key, e.target.value)}
                      placeholder="0.00"
                      className="w-full bg-af-surface-container py-3 px-4 border-b-2 border-af-outline-variant focus:border-af-primary-container outline-none font-[family-name:var(--font-mono)] text-lg"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-af-outline font-bold">
                      {field.type === "side" ? "UNIT" : unit.toUpperCase()}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Unit + Calculate */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="text-sm text-af-on-surface-variant">Units:</span>
                <div className="flex border border-af-outline-variant rounded-lg overflow-hidden">
                  {(["deg", "rad", "grad"] as const).map((u) => (
                    <button
                      key={u}
                      onClick={() => setUnit(u)}
                      className={`px-3 py-1 text-[10px] font-bold uppercase transition-colors ${
                        unit === u ? "bg-af-primary-fixed text-af-on-primary-fixed" : "hover:bg-af-surface-variant"
                      }`}
                    >
                      {u}
                    </button>
                  ))}
                </div>
              </div>
              <button
                onClick={calculate}
                className="w-full md:w-auto bg-af-primary-container text-af-on-primary px-10 py-3 rounded-full font-bold shadow-lg hover:brightness-110 active:scale-95 transition-all"
              >
                Calculate
              </button>
            </div>

            {/* Results */}
            {result && (
              <>
                <div className="bg-af-surface-container-low rounded-lg p-6 border-l-4 border-af-primary mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-bold">Results</h3>
                    <CheckCircle className="w-5 h-5 text-af-primary" />
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 font-[family-name:var(--font-mono)] text-sm">
                    {result.angleA !== undefined && (
                      <div>
                        <div className="text-[10px] text-af-on-surface-variant uppercase mb-1">Angle A</div>
                        <div className="text-af-primary font-bold">{formatAngle(result.angleA)}</div>
                      </div>
                    )}
                    {result.angleB !== undefined && (
                      <div>
                        <div className="text-[10px] text-af-on-surface-variant uppercase mb-1">Angle B</div>
                        <div className="text-af-primary font-bold">{formatAngle(result.angleB)}</div>
                      </div>
                    )}
                    {result.angleC !== undefined && (
                      <div>
                        <div className="text-[10px] text-af-on-surface-variant uppercase mb-1">Angle C</div>
                        <div className="text-af-primary font-bold">{formatAngle(result.angleC)}</div>
                      </div>
                    )}
                    {result.sideA !== undefined && (
                      <div>
                        <div className="text-[10px] text-af-on-surface-variant uppercase mb-1">Side A</div>
                        <div className="text-af-primary font-bold">{result.sideA.toFixed(2)}</div>
                      </div>
                    )}
                    {result.sideB !== undefined && (
                      <div>
                        <div className="text-[10px] text-af-on-surface-variant uppercase mb-1">Side B</div>
                        <div className="text-af-primary font-bold">{result.sideB.toFixed(2)}</div>
                      </div>
                    )}
                    {result.sideC !== undefined && (
                      <div>
                        <div className="text-[10px] text-af-on-surface-variant uppercase mb-1">Side C</div>
                        <div className="text-af-primary font-bold">{result.sideC.toFixed(2)}</div>
                      </div>
                    )}
                    {result.area !== undefined && (
                      <div>
                        <div className="text-[10px] text-af-on-surface-variant uppercase mb-1">Area</div>
                        <div className="text-af-primary font-bold">{result.area.toFixed(2)} u²</div>
                      </div>
                    )}
                    {result.perimeter !== undefined && (
                      <div>
                        <div className="text-[10px] text-af-on-surface-variant uppercase mb-1">Perimeter</div>
                        <div className="text-af-primary font-bold">{result.perimeter.toFixed(2)} u</div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Steps */}
                {result.steps.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-af-outline-variant">
                    <h4 className="font-[family-name:var(--font-display)] text-lg font-bold mb-4 flex items-center gap-2">
                      <BookOpen className="w-5 h-5" />
                      Calculation Logic
                    </h4>
                    <div className="space-y-3 text-sm text-af-on-surface-variant">
                      {result.steps.map((step, i) => (
                        <p key={i} className="flex gap-3">
                          <span className="font-[family-name:var(--font-mono)] text-af-primary text-xs shrink-0 pt-0.5">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span>{step}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}

            <p className="mt-6 text-xs italic text-af-outline text-center">
              Results are for educational use.
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-af-surface border border-af-outline-variant p-6 rounded-xl">
            <div className="aspect-square bg-af-surface-container rounded flex items-center justify-center mb-4">
              <svg viewBox="0 0 200 180" className="w-full h-full">
                <polygon points="100,20 180,160 20,160" fill="none" stroke="#012d1d" strokeWidth="2" />
                <text x="95" y="15" fontSize="12" fill="#012d1d" fontWeight="bold">A</text>
                <text x="185" y="170" fontSize="12" fill="#012d1d" fontWeight="bold">B</text>
                <text x="8" y="170" fontSize="12" fill="#012d1d" fontWeight="bold">C</text>
                <text x="50" y="100" fontSize="10" fill="#6B7280">a</text>
                <text x="130" y="100" fontSize="10" fill="#6B7280">b</text>
                <text x="100" y="165" fontSize="10" fill="#6B7280">c</text>
              </svg>
            </div>
            <h3 className="font-[family-name:var(--font-display)] text-lg font-bold mb-1">Geometric Reference</h3>
            <p className="text-sm text-af-on-surface-variant">
              Visualizing input parameters helps verify the physical possibility of the triangle before computation.
            </p>
          </div>

          <div className="bg-af-primary-container text-af-on-primary p-6 rounded-xl">
            <h3 className="font-[family-name:var(--font-display)] text-lg font-bold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Precision Tip
            </h3>
            <p className="text-sm opacity-90 leading-relaxed">
              Ensure all side lengths satisfy the Triangle Inequality Theorem: the sum of any two sides must be strictly greater than the third side.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
