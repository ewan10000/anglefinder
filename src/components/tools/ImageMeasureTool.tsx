"use client";

import { useState, useRef, useCallback } from "react";
import { Shield, Upload, RotateCcw, Calculator } from "lucide-react";

interface Point {
  x: number;
  y: number;
}

export default function ImageMeasureTool() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [points, setPoints] = useState<Point[]>([]);
  const [angle, setAngle] = useState<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const src = e.target?.result as string;
      setImageSrc(src);
      setPoints([]);
      setAngle(null);
      // Draw on canvas after image loads
      setTimeout(() => drawImage(src), 50);
    };
    reader.readAsDataURL(file);
  };

  const drawImage = (src: string) => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.onload = () => {
      const rect = container.getBoundingClientRect();
      const scale = Math.min(rect.width / img.width, 500 / img.height, 1);
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
    img.src = src;
  };

  const redraw = useCallback(() => {
    if (!imageSrc) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const img = new Image();
    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Draw lines between points
      if (points.length >= 2) {
        ctx.strokeStyle = "#1b4332";
        ctx.lineWidth = 2;
        ctx.setLineDash([6, 4]);
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
          ctx.lineTo(points[i].x, points[i].y);
        }
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Draw points
      points.forEach((p, i) => {
        ctx.fillStyle = "#012d1d";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 10px sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(String(i + 1), p.x, p.y);
      });

      // Draw angle arc
      if (points.length === 3 && angle !== null) {
        const vertex = points[1];
        const radius = 30;
        const angle1 = Math.atan2(points[0].y - vertex.y, points[0].x - vertex.x);
        const angle2 = Math.atan2(points[2].y - vertex.y, points[2].x - vertex.x);
        ctx.strokeStyle = "#E63946";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(vertex.x, vertex.y, radius, angle1, angle2, angle2 < angle1);
        ctx.stroke();
      }
    };
    img.src = imageSrc;
  }, [imageSrc, points, angle]);

  // Redraw when points change
  const prevPointsRef = useRef(points);
  if (JSON.stringify(prevPointsRef.current) !== JSON.stringify(points)) {
    prevPointsRef.current = points;
    setTimeout(redraw, 0);
  }

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (points.length >= 3) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newPoints = [...points, { x, y }];
    setPoints(newPoints);

    if (newPoints.length === 3) {
      const p0 = newPoints[0];
      const p1 = newPoints[1]; // vertex
      const p2 = newPoints[2];
      const a1 = Math.atan2(p0.y - p1.y, p0.x - p1.x);
      const a2 = Math.atan2(p2.y - p1.y, p2.x - p1.x);
      let diff = Math.abs(a2 - a1);
      if (diff > Math.PI) diff = 2 * Math.PI - diff;
      setAngle((diff * 180) / Math.PI);
    }
  };

  const reset = () => {
    setPoints([]);
    setAngle(null);
    if (imageSrc) drawImage(imageSrc);
  };

  const clearImage = () => {
    setImageSrc(null);
    setPoints([]);
    setAngle(null);
  };

  return (
    <section className="py-12 px-6 max-w-[1280px] mx-auto">
      {/* Header */}
      <div className="bg-af-surface border border-af-outline-variant rounded-xl p-8 mb-8">
        <div className="flex flex-col gap-4 mb-6">
          <div>
            <h1 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-af-on-surface mb-1">
              Measure Angle on Image
            </h1>
            <p className="text-af-on-surface-variant">Upload a photo, click three points, get the exact angle.</p>
          </div>
          {/* Privacy Notice */}
          <div className="bg-green-50 border-l-4 border-af-primary p-4 rounded-r flex items-center gap-3">
            <Shield className="w-5 h-5 text-af-primary shrink-0" />
            <p className="text-sm text-af-on-surface-variant">
              Images are processed locally in your browser. Nothing is uploaded to our servers.
            </p>
          </div>
        </div>

        {!imageSrc ? (
          <label className="block border-2 border-dashed border-af-outline-variant rounded-xl p-12 flex flex-col items-center justify-center gap-4 transition-all hover:border-af-outline hover:bg-af-surface-container-low cursor-pointer">
            <Upload className="w-12 h-12 text-af-outline" />
            <div className="text-center">
              <p className="font-[family-name:var(--font-display)] text-lg font-semibold text-af-on-surface">
                Drop an image or click to upload
              </p>
              <p className="text-xs text-af-on-surface-variant mt-1 uppercase tracking-wider">
                Supported formats: JPG, PNG, WEBP, GIF
              </p>
            </div>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleFile(file);
              }}
            />
          </label>
        ) : (
          <div>
            <div ref={containerRef} className="relative bg-af-surface-container border border-af-outline-variant rounded-lg overflow-hidden flex justify-center">
              <canvas
                ref={canvasRef}
                onClick={handleCanvasClick}
                className="cursor-crosshair max-w-full"
              />
              {points.length < 3 && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-af-on-surface/90 text-af-surface px-4 py-2 rounded-full text-xs shadow-lg flex items-center gap-2">
                  Click {3 - points.length} more point{3 - points.length > 1 ? "s" : ""} to measure the angle.
                </div>
              )}
            </div>

            {/* Result bar */}
            <div className="mt-6 flex flex-col md:flex-row items-center justify-between border-t border-af-outline-variant pt-6 gap-4">
              <div className="flex items-center gap-8">
                <div>
                  <span className="text-xs text-af-on-surface-variant uppercase font-bold">Current Angle</span>
                  <div className="font-[family-name:var(--font-mono)] text-3xl text-af-primary font-bold">
                    {angle !== null ? angle.toFixed(2) + "°" : "--"}
                  </div>
                </div>
                {angle !== null && (
                  <div className="border-l border-af-outline-variant pl-6">
                    <span className="text-xs text-af-on-surface-variant uppercase font-bold">Complementary</span>
                    <div className="font-[family-name:var(--font-mono)] text-xl text-af-on-surface">
                      {(180 - angle).toFixed(2)}°
                    </div>
                  </div>
                )}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={reset}
                  className="bg-af-surface-container border border-af-outline-variant text-af-on-surface px-6 py-2.5 rounded-lg font-bold hover:bg-af-surface-container-high transition-colors flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  Reset Points
                </button>
                <button
                  onClick={clearImage}
                  className="bg-af-tertiary text-af-on-tertiary px-6 py-2.5 rounded-lg font-bold hover:brightness-110 transition-all flex items-center gap-2"
                >
                  <Upload className="w-4 h-4" />
                  New Image
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* How to Use */}
      <div className="mb-12">
        <div className="text-center mb-8">
          <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-af-on-surface">How to Use</h2>
          <div className="w-12 h-1 bg-af-primary mx-auto mt-2" />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Upload, title: "1. Upload Image", desc: "Click the upload zone or drag your image file directly onto the canvas area." },
            { icon: Calculator, title: "2. Place Markers", desc: "Click three points: the first arm point, the vertex (angle center), and the second arm point." },
            { icon: Calculator, title: "3. Precision Angle", desc: "The tool instantly calculates and displays the exact angle with two-decimal precision." },
          ].map((step) => (
            <div key={step.title} className="bg-af-surface border border-af-outline-variant p-6 rounded-lg flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-af-secondary-container text-af-primary rounded-full flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6" />
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-af-on-surface-variant">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
