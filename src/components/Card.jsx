import React from 'react'

const Card = ({ className, children, ...props }) => {
  function cn(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div
      className={cn(
        "relative p-4 rounded-lg border border-slate-200 backdrop-blur-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
