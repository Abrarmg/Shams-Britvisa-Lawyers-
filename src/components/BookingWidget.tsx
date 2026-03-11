import React, { useEffect } from 'react';

interface BookingWidgetProps {
  src?: string;
  id?: string;
}

export const BookingWidget = ({ 
  src = "https://api.leadconnectorhq.com/widget/booking/ejeBFhqWhG5QIqP3QMqz",
  id = "ejeBFhqWhG5QIqP3QMqz_1772903795792"
}: BookingWidgetProps) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    
    script.onerror = () => {
      console.error("Failed to load the booking widget script.");
    };

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [src]); // Re-run if src changes to ensure script is handled if needed (though script is generic)

  return (
    <div className="w-full bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-zinc-100/50 relative group">
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/5 via-transparent to-brand-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      <iframe 
        src={src} 
        style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '650px' }} 
        scrolling="no" 
        id={id}
        className="relative z-10"
      />
    </div>
  );
};
