import React from 'react';

export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
      <span className="text-white text-xs font-bold uppercase tracking-widest">Scroll for more</span>
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="white" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
      </svg>
    </div>
  );
}
