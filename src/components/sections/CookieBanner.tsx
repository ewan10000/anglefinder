"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const handleChoice = (choice: "essential" | "all") => {
    localStorage.setItem("cookie_consent", choice);
    setVisible(false);
    if (choice === "all") {
      // Trigger AdSense loading event
      window.dispatchEvent(new CustomEvent("cookie-consent-granted"));
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] bg-af-inverse-surface text-af-inverse-on-surface p-4 shadow-lg">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          We use cookies for essential site functionality and analytics. AdSense may use cookies for personalized ads.
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={() => handleChoice("essential")}
            className="px-4 py-2 text-sm border border-af-outline-variant rounded hover:bg-af-surface-container transition-colors"
          >
            Essential Only
          </button>
          <button
            onClick={() => handleChoice("all")}
            className="px-4 py-2 text-sm bg-af-surface text-af-on-surface rounded hover:bg-af-surface-container-high transition-colors font-medium"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
