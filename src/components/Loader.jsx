import React from 'react'

const Loader = () => {
  return (
    <div className='fixed z-50 h-screen w-screen bg-black/70 flex justify-center items-center'>
      <div className="w-[80px] aspect-square bg-white rounded-xl flex justify-center items-center">
        <i className="ri-loader-3-line text-[var(--accent)] text-3xl animate-spin"></i>
      </div>
    </div>
  )
}

export default Loader
