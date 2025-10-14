"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);
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

  // Scroll gallery to center on mount
  useEffect(() => {
    if (galleryRef.current) {
      // Calculate scroll position to center the gallery
      // We want to show: half of card 1, full cards 2-4, half of card 5
      // Each card is 256px (w-64) + 16px gap = 272px per card
      // To center on cards 2, 3, 4, we need to scroll by 0.5 cards worth
      const cardWidth = 256; // w-64
      const gap = 16; // gap-4
      const scrollAmount = (cardWidth + gap) * 0.5; // Scroll by half a card
      galleryRef.current.scrollLeft = scrollAmount;
    }
  }, []);

  return (
    <>
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

        <Image src="/cup_main.png" alt="crafted" width={800} height={800} className="w-full h-auto" />

        {/* Menu Gallery Section */}
        <div className="w-full mt-32 mb-20">
          <h2 className="text-2xl font-normal tracking-wide text-center mb-2 text-black/60">menu</h2>
          <p className="text-sm text-center mb-12 text-black/50">a new surprise each time</p>
          
          {/* Horizontally scrollable gallery */}
          <div 
            ref={galleryRef}
            className="overflow-x-auto pb-6 scrollbar-hide mx-auto"
            style={{ maxWidth: 'calc(3.5 * 256px + 3 * 16px)' }}
          >
            <div className="flex gap-4 min-w-max pl-2">
              {/* Blueberry */}
              <div className="flex-shrink-0 w-64">
                <div className="bg-white overflow-hidden border-2 border-black/20">
                  <Image 
                    src="/Blueberry.jpg" 
                    alt="Blueberry" 
                    width={256}
                    height={256}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <p className="mt-4 text-xs tracking-widest text-black/50 uppercase font-mono">Blueberry</p>
              </div>

              {/* Guava */}
              <div className="flex-shrink-0 w-64">
                <div className="bg-white overflow-hidden border-2 border-black/20">
                  <Image 
                    src="/Guava.jpg" 
                    alt="Guava" 
                    width={256}
                    height={256}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <p className="mt-4 text-xs tracking-widest text-black/50 uppercase font-mono">Guava</p>
              </div>

              {/* Dubai Chocolate */}
              <div className="flex-shrink-0 w-64">
                <div className="bg-white overflow-hidden border-2 border-black/20">
                  <Image 
                    src="/DubaiChocolate.jpg" 
                    alt="Dubai Chocolate" 
                    width={256}
                    height={256}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <p className="mt-4 text-xs tracking-widest text-black/50 uppercase font-mono">Dubai Chocolate</p>
              </div>

              {/* Black Sesame */}
              <div className="flex-shrink-0 w-64">
                <div className="bg-white overflow-hidden border-2 border-black/20">
                  <Image 
                    src="/BlackSesame.jpg" 
                    alt="Black Sesame" 
                    width={256}
                    height={256}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <p className="mt-4 text-xs tracking-widest text-black/50 uppercase font-mono">Black Sesame</p>
              </div>

              {/* Banana Bread */}
              <div className="flex-shrink-0 w-64">
                <div className="bg-white overflow-hidden border-2 border-black/20">
                  <Image 
                    src="/BananaBread.jpg" 
                    alt="Banana Bread" 
                    width={256}
                    height={256}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <p className="mt-4 text-xs tracking-widest text-black/50 uppercase font-mono">Banana Bread</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

      {/* About Us Section */}
      <section className="w-full bg-[#FFFBF0] py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-normal tracking-wide mb-8 text-black/60">about us</h2>
          
          <p className="text-sm leading-relaxed mb-6 text-black/60 font-mono">
            we&apos;re a team of scrappy college students<br />
            bringing quality matcha to campus.
          </p>
          
          <p className="text-sm leading-relaxed mb-12 text-black/60 font-mono">
            matcha should be good, green, & easily<br />
            accessible for all.
          </p>
          
          <div className="flex flex-col items-center">
            <Image 
              src="/Team.jpg" 
              alt="Team photo" 
              width={448}
              height={448}
              className="w-full max-w-md rounded-lg"
            />
            <p className="mt-4 text-xs tracking-wide text-black/50 font-mono">
              juliet, molly, & jayson
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-[#FFF7E6] py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm text-black/60 font-mono mb-4 flex items-center justify-center gap-2">
            <span className="text-lg">🌿</span>
            keep up with our latest adventures
          </p>
          
          <a 
            href="https://instagram.com/crafted.ucla" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-black/60 hover:text-black/80 transition-colors font-mono text-sm"
          >
            <svg 
              className="w-5 h-5" 
              fill="currentColor" 
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @crafted.ucla
          </a>
        </div>
      </footer>

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
          className="relative z-10 w-[min(92vw,900px)] h-fit max-h-[90vh] bg-white/10 rounded-xl shadow-2xl border border-black/10 overflow-hidden outline-none"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between px-2 py-1 border-b border-black/10 bg-white/80 cursor-pointer">
            <div className="text-lg font-medium text-black"></div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close reservation modal"
              className="cursor-pointer text-2xl leading-none text-black/60 hover:text-black rounded-full p-1 transition-colors focus:outline-none focus:ring-0 focus:ring-black/0"
            >
              &times;
            </button>
          </div>
          <div className="w-full h-full">
           
            <style>
              {`
                .scaled-iframe {
                  transform: scale(0.8);
                  transform-origin: top left;
                  width: calc(100% / 0.8);
                  height: calc(600px / 0.8);
                  margin-bottom: -150px;
                  border: 0;
                  display: block;
                }
              `}
            </style>
            <iframe
              className="scaled-iframe"
              src="https://jtian.notion.site/ebd/28b23e1f0d0e80269c77e2e3d4a7c18d"
              width="100%"
              height="600px"
              frameBorder="0"
              allowFullScreen
              title="Reservation embed"
            />
          </div>
        </div>
      </div>
    </>
  );
}
