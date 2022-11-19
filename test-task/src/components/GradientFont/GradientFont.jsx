import React from 'react'
import style from './GradientFont.module.css'
export const GradientFont = ({ children }) => {

  return (
    <span className={style.text}>{ children}</span>
  )

}
