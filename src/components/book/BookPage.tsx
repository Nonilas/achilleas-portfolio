import React from 'react';

interface BookPageProps {
  children: React.ReactNode;
  pageNumber?: number;
  showScrollbar?: boolean;
}

/** Convert an integer to a Roman numeral string. */
function toRoman(num: number): string {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const numerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let result = '';
  for (let i = 0; i < values.length; i++) {
    while (num >= values[i]) {
      result += numerals[i];
      num -= values[i];
    }
  }
  return result;
}

export default function BookPage({ children, pageNumber, showScrollbar = true }: BookPageProps) {
  return (
    <div className="relative w-full h-full bg-parchment flex flex-col">
      {/* Corner ornaments — gold L-shaped borders */}
      <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-[#D4AF37] opacity-50 pointer-events-none" />
      <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[#D4AF37] opacity-50 pointer-events-none" />
      <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-[#D4AF37] opacity-50 pointer-events-none" />
      <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-[#D4AF37] opacity-50 pointer-events-none" />

      {/* Scrollable content area */}
      <div
        className={`flex-1 overflow-y-auto p-6 md:p-10 ${showScrollbar ? 'custom-scrollbar' : ''}`}
      >
        {children}
      </div>

      {/* Page number at bottom center */}
      {pageNumber !== undefined && (
        <div className="flex-shrink-0 text-center pb-3 pt-1">
          <span className="font-display text-xs text-[#4A3A32] tracking-[0.15em] opacity-60 select-none">
            — {toRoman(pageNumber)} —
          </span>
        </div>
      )}
    </div>
  );
}
