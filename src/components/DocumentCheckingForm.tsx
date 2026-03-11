import React, { useEffect } from 'react';

export const DocumentCheckingForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    
    script.onerror = () => {
      console.error("Failed to load the form embed script.");
    };

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full bg-white rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-zinc-100 relative">
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/dlXwFqFWGo5RvbZKuYRM"
        style={{ width: '100%', height: '1589px', border: 'none', borderRadius: '3px' }}
        id="inline-dlXwFqFWGo5RvbZKuYRM" 
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Document Checking Form"
        data-height="1589"
        data-layout-iframe-id="inline-dlXwFqFWGo5RvbZKuYRM"
        data-form-id="dlXwFqFWGo5RvbZKuYRM"
        title="Document Checking Form"
      />
    </div>
  );
};
