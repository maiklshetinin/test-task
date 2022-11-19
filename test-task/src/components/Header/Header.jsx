import React from 'react'
import style from './Header.module.css'
import { SvgSelector } from '../SvgSelector/SvgSelector';
import { Navigation } from '../Navigation/Navigation';

export const Header = () => {
  return (
    <header className={style.header} >
      <div className={style.logo_container}>
        <SvgSelector id='logo' />
        <div className={style.logo_description}>
          крупный интегратор CRM в Росcии и ещё 8 странах
        </div>
      </div>
      <Navigation />
      <span className={style.phone_number}>+7 555 555-55-55</span>
      <div className={style.messegers_container}>
        <SvgSelector id='telegramm' />
        <SvgSelector id='viber' />
        <SvgSelector id='watsapp' />
      </div>
    </header>
  )
}