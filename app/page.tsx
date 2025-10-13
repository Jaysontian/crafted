"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const fullText = "a popup cafe at ucla";
  const [typed, setTyped] = useState("");

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Focus modal when opened
  useEffect(() => {
    if (open && panelRef.current) {
      panelRef.current.focus();
    }
  }, [open]);

  // Typewriter effect for subtitle
  useEffect(() => {
    if (typed.length >= fullText.length) return;
    const id = window.setTimeout(() => {
      setTyped(fullText.slice(0, typed.length + 1));
    }, 40);
    return () => window.clearTimeout(id);
  }, [typed, fullText]);

  return (
    <main className="min-h-[calc(100vh-100px)] flex items-center justify-center px-6 py-10 -mt-12">
      <div className="max-w-3xl w-full text-center flex flex-col items-center gap-5">
        
        <h1 className="text-5xl font-semibold tracking-tight font-mono">crafted.</h1>
        <p className="text-base leading-relaxed max-w-prose text-black/80">
          {typed}
        </p>

        <div className="flex flex-col items-center gap-2 mt-12">
           <div className="flex flex-row items-center gap-3">
             <div className="flex items-center gap-2 text-sm tracking-wide px-4 py-2 rounded-xl border border-black/10 bg-white/60 text-black/70">
               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
               Oct 15 · 11am – 3pm
             </div>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={open}
              aria-controls="reserve-modal"
              className="inline-flex items-center justify-center rounded-xl cursor-pointer bg-black text-white px-4 py-2 text-sm font-medium tracking-wide hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
            >
              Reserve a Drink
            </button>
          </div>
          <p className="text-[10pt] text-black/60 mt-4">Reshare our story, then reserve above for <span className="font-semibold">$1 off</span></p>
        </div>

        <img src="/cup_main.png" alt="crafted" className="w-full h-auto" />
      </div>

      <div
        id="reserve-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="reserve-title"
        aria-hidden={!open}
        className={
          "fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-200 " +
          (open ? "opacity-100" : "opacity-0 pointer-events-none")
        }
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"
          onClick={() => setOpen(false)}
        />

        <div
          ref={panelRef}
          tabIndex={-1}
          className="relative z-10 w-[min(92vw,900px)] max-h-[90vh] bg-white/10 rounded-xl shadow-2xl border border-black/10 overflow-hidden outline-none"
          onClick={(e) => e.stopPropagation()}
        >

          <div className="w-full">
            <iframe
              src="https://jtian.notion.site/ebd/28b23e1f0d0e80269c77e2e3d4a7c18d"
              width="100%"
              height="800"
              frameBorder="0"
              allowFullScreen
              title="Reservation embed"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
