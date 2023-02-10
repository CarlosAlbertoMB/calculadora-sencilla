import React from 'react'

export const Boton = ({nombreOperacion, claseOperacion, metodoOperacion}) => {
  return (
    <button 
    className={claseOperacion} 
    onClick={metodoOperacion}>{nombreOperacion}</button>
  )
}
