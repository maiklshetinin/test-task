import React from 'react'
import style from'./Ball.module.css'

export const Ball = ({ width, left, className, top }) => {
  return (
    <div
      className={`${style[className]} ${style.ball}`}
      style={{
        width: `${width}`,
        height: `${width}`,
        left: `${left}`,
        top: `${top}`
      }}>
    </div>
  )
}