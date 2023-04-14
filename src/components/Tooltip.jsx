import React from "react";

const Tooltip = ({ text, supportingText, position, className }) => {
  return (
    <div className={className}>
    
    <div className={`px-3 ${supportingText ? "py-3" : "py-2"} bg-gray-600 rounded-lg relative font-inter`}>
      <p className="text-xs font-medium text-gray-0 whitespace-nowrap">{text}</p>
      <div className="h-1"/>
      {supportingText && <p className="text-xs text-gray-0 w-[296px]">{supportingText}</p>}

      {/* Bottom Left */}
      {position==='bottom-left' && <div className="w-3 h-3 bg-gray-600 rotate-45 absolute rounded-[1px] -bottom-[5px]"/>}
      {/* Bottom Center */}
      {position==='bottom-center' && <div className="w-3 h-3 bg-gray-600 rotate-45 absolute rounded-[1px] -bottom-[5px] left-1/2 -translate-x-1/2"/>}
      
      {/* Bottom Right */}
      {position==='bottom-right' && <div className="w-3 h-3 bg-gray-600 rotate-45 absolute rounded-[1px] -bottom-[5px] right-3"/>}

      {/* top Left */}
       {position==='top-left' &&<div className="w-3 h-3 bg-gray-600 rotate-45 absolute rounded-[1px] -top-[5px]"/>}
      {/* top Center */}
      {position==='top-center' &&<div className="w-3 h-3 bg-gray-600 rotate-45 absolute rounded-[1px] -top-[5px] left-1/2 -translate-x-1/2"/>}
      {/* top Right */}
      {position==='top-right' &&<div className="w-3 h-3 bg-gray-600 rotate-45 absolute rounded-[1px] -top-[5px] right-3"/>}

      {/* Right */}
      {position==='right' &&<div className="w-3 h-3 bg-gray-600 rotate-45 absolute rounded-[1px] -right-[5px] top-1/2 -translate-y-1/2"/>}

      {/* Right */}
      {position==='left' &&<div className="w-3 h-3 bg-gray-600 rotate-45 absolute rounded-[1px] -left-[5px] top-1/2 -translate-y-1/2"/>}
      

    </div>
    </div>
  );
};

export default Tooltip;
