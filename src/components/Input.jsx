import React, { useRef } from 'react'

const Input = ({ label, input_type, name, value, handler }) => {
  const inputRef = useRef(null);

  const changeType = e => {
    if(inputRef.current.type == 'password') {
      inputRef.current.type = 'text'
    } else {
      inputRef.current.type = 'password'
    }
  }

  return (
    <div className="relative w-full border-2 border-slate-200 rounded-xl bg-[var(--grey2)] px-4 pt-6 pb-1">
      <label htmlFor="" className='text-[var(--grey)] absolute top-2 text-sm'>{ label }</label>
      <input 
        type={`${input_type}`} 
        className='w-full bg-transparent py-2 focus:border-none focus:outline-none' 
        name={name}
        value={value}
        onChange={handler}
        ref={inputRef}
      />
      {
        input_type == 'password' && <i className='ri-eye-line absolute right-4 bottom-4 text-[var(--grey)] cursor-pointer' onClick={changeType}></i>
      }
    </div>
  )
}

export default Input
