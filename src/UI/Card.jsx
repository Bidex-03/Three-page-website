import React from 'react'

const Card = (props) => {
  return (
    <div className={`bg-Alabaster rounded-[10px] shadow-2xl ${props.className}`}>{props.children}</div>
  )
}

export default Card