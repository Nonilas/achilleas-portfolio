import React from 'react';
import BookPage from './BookPage';

interface TimelineEntry {
  title: string;
  organization: string;
  period: string;
  detail?: string;
}

const experience: TimelineEntry[] = [
  {
    title: 'Software Developer (Freelance)',
    organization: 'Self-employed / Kassandra Technologies',
    period: 'July 2025 \u2013 Present',
  },
  {
    title: 'AI Research & Development',
    organization: 'EUROCONTROL MUAC',
    period: 'Feb 2025 \u2013 July 2025',
  },
  {
    title: 'Marketing Manager',
    organization: 'SCOPE Maastricht',
    period: 'Sep 2024 \u2013 March 2025',
  },
  {
    title: 'Software Developer Intern',
    organization: 'Next Generation Sensors B.V.',
    period: 'June 2024 \u2013 August 2024',
  },
];

const education: TimelineEntry[] = [
  {
    title: 'Maastricht University',
    organization: 'BSc Data Science & AI',
    period: 'Sep 2022 \u2013 June 2025',
    detail: '7.16/10',
  },
  {
    title: 'University of New Hampshire',
    organization: 'Project SMART \u2014 Biotechnology',
    period: 'July 2020',
  },
  {
    title: 'Anatolia College High School',
    organization: 'IB Diploma Programme',
    period: 'Sep 2019 \u2013 July 2022',
  },
];

function TimelineSection({ heading, entries }: { heading: string; entries: TimelineEntry[] }) {
  return (
    <div className="mb-8">
      <h3 className="text-lg md:text-xl text-[#8B0000] font-bold font-display mb-4 tracking-wide">
        {heading}
      </h3>

      <div className="relative pl-6 border-l-2 border-[#D4AF37]/40">
        {entries.map((entry, idx) => (
          <div key={idx} className="relative mb-6 last:mb-0">
            {/* Crimson dot on the timeline */}
            <div className="absolute -left-[25px] top-1 w-3 h-3 rounded-full bg-[#8B0000] border-2 border-[#D4AF37]" />

            <div className="ml-2">
              <div className="flex items-start gap-2">
                <span className="text-[#D4AF37] font-display font-black text-sm mt-0.5 select-none">
                  &#9769;
                </span>
                <div className="flex-1">
                  <p className="font-bold text-[#2C1A12] text-sm md:text-base leading-snug">
                    {entry.title}
                  </p>
                  <p className="text-[#D4AF37] text-xs md:text-sm font-semibold">
                    {entry.organization}
                  </p>
                  <p className="text-[#4A3A32] text-xs mt-0.5">
                    {entry.period}
                    {entry.detail && (
                      <span className="ml-2 text-[#8B0000] font-semibold">{entry.detail}</span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ChroniclePage() {
  return (
    <BookPage pageNumber={2}>
      {/* Title */}
      <h2 className="text-2xl md:text-3xl text-[#8B0000] font-display pb-3 mb-6 border-b border-[#D4AF37]/40">
        The Chronicle
      </h2>

      {/* Drop-cap intro */}
      <p className="text-[#2C1A12] leading-relaxed mb-8 text-sm md:text-base">
        <span className="text-4xl md:text-5xl float-left mr-3 mt-1 leading-none text-[#D4AF37] font-display font-black">
          A
        </span>
        record of the Archmaester&apos;s journey through the realms of knowledge and industry.
      </p>

      {/* Experience */}
      <TimelineSection heading="Professional Experience" entries={experience} />

      {/* Education */}
      <TimelineSection heading="Education" entries={education} />
    </BookPage>
  );
}
