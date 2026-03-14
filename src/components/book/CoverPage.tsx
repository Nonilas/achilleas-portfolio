import React from 'react';
import BookPage from './BookPage';

export default function CoverPage() {
  return (
    <BookPage showScrollbar={false}>
      <div className="flex flex-col items-center justify-center w-full h-full text-center relative pointer-events-none">
        {/* Ornate gold double border with corner embellishments */}
        <div className="absolute inset-4 md:inset-8 border-2 border-double border-[#D4AF37] opacity-80 pointer-events-none">
          <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]" />
          <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]" />
          <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]" />
          <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]" />
        </div>

        <div className="relative z-10 space-y-8">
          {/* Gold Cross SVG Icon */}
          <div className="w-24 h-24 mx-auto mb-6 opacity-80">
            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-[#D4AF37] stroke-[2]">
              <path d="M50 10V90M10 50H90" />
              <circle cx="50" cy="50" r="20" className="fill-[#D4AF37]/10" />
              <circle cx="50" cy="20" r="4" className="fill-[#D4AF37]" />
              <circle cx="50" cy="80" r="4" className="fill-[#D4AF37]" />
              <circle cx="20" cy="50" r="4" className="fill-[#D4AF37]" />
              <circle cx="80" cy="50" r="4" className="fill-[#D4AF37]" />
              <path d="M35 35L65 65M35 65L65 35" className="stroke-[#D4AF37]/50" />
            </svg>
          </div>

          {/* Title */}
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#8B0000] drop-shadow-sm uppercase tracking-widest leading-tight font-display">
              Chronicles of the<br />Archmaester
            </h1>

            {/* Gold divider */}
            <div className="w-32 h-[1px] bg-[#D4AF37] mx-auto my-6 opacity-70" />

            {/* Subtitle */}
            <h2 className="text-xl md:text-2xl text-[#D4AF37] font-semibold italic font-display">
              Achilleas Leivadiotis
            </h2>
          </div>

          {/* Year */}
          <div className="pt-12">
            <p className="text-[#4A3A32] text-sm uppercase tracking-[0.2em] opacity-80 font-display">
              A.D. MMXXVI
            </p>
          </div>
        </div>
      </div>
    </BookPage>
  );
}
