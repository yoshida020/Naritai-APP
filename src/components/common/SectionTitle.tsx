import React from 'react';

type SectionTitleProps = {
  enTitle: string;
  jaTitle: string;
  className?: string;
  titleColor?: string;
  enColor?: string;
  enClassName?: string;
  jaClassName?: string;
}

export const SectionTitle = ({
  enTitle,
  jaTitle,
  className = '',
  titleColor = 'text-[#2C3E50]',
  enColor = 'text-[#517CA2]/30',
  enClassName = '',
  jaClassName = ''
}: SectionTitleProps) => {
  return (
    <div className={`relative grid place-items-center h-32 sm:h-40 ${className}`}>
      <div 
        className="col-start-1 row-start-1 w-full text-center pointer-events-none z-0 px-4"
        aria-hidden="true"
      >
        <span
          className={`inline-block font-bold uppercase tracking-widest ${enColor} ${enClassName}`}
          style={{
            fontSize: 'clamp(3.5rem, 13vw, 8rem)',
            fontFamily: 'Futura, "Century Gothic", sans-serif',
            whiteSpace: 'nowrap',
            lineHeight: 1,
            width: '100%',
            letterSpacing: '-0.02em',
          }}
        >
          {enTitle}
        </span>
      </div>

      <h2
        className={`col-start-1 row-start-1 relative z-10 text-xl sm:text-3xl md:text-4xl font-bold ${titleColor} tracking-wider translate-y-1 sm:translate-y-2 md:translate-y-3 ${jaClassName}`}
        style={{ fontFamily: 'Catchy Mager, serif', lineHeight: 1 }}
      >
        {jaTitle}
      </h2>
    </div>
  );
};
