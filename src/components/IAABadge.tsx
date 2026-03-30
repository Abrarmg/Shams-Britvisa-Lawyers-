import React from 'react';

interface IAABadgeProps {
  className?: string;
  labelPosition?: 'top' | 'bottom';
}

export const IAABadge: React.FC<IAABadgeProps> = ({ className = '', labelPosition = 'bottom' }) => {
  return (
    <div className={`flex flex-col items-center justify-center gap-2 ${className}`}>
      {labelPosition === 'top' && (
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-zinc-500">
          IAA Regulated
        </span>
      )}
      
      <div className="w-full max-w-[125px] aspect-[125/190] relative overflow-hidden">
        <iframe 
          id="myFrame" 
          src="https://cdn2.yoshki.com/badgeframe?10" 
          title="IAA Digital Badge"
          style={{
            overflow: 'hidden',
            border: '0px',
            margin: '0px',
            padding: '0px',
            backgroundColor: 'transparent',
            top: '0px',
            left: '0px',
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}
          referrerPolicy="no-referrer"
        />
      </div>

      {labelPosition === 'bottom' && (
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-zinc-500">
          IAA Regulated
        </span>
      )}
    </div>
  );
};
