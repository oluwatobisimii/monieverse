import React from 'react'

const Overlay = ({isOpen, onClose,  children}) => {
  return (
    <>
    {isOpen && (
        <div className="appOverlay h-screen w-screen fixed top-0 left-0 p-4 flex center z-20">
          {children}
        </div>
      )}
    </>
  )
}

export default Overlay