import React from 'react'
import style from './Navigation.module.css'

export const Navigation = () => {
  return (
    <nav className={style.nav}>
      <ul className={style.list_items}>
        <li>Услуги</li>
        <li>Виджеты</li>
        <li>Интеграции</li>
        <li>Кейсы</li>
        <li>Сертификаты</li>
      </ul>
    </nav>
  )
}