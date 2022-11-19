import React from 'react'
import { SvgSelector } from '../SvgSelector/SvgSelector'
import style from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <section className={`${style.footer_section} ${style.aboutCompany}`}>
        <h4 className={style.section_title}>О компании</h4>
        <span className={style.section_subtitle}>Партнёрская программа</span>
        <span className={style.section_subtitle}>Вакансии</span>
      </section>
      <div className={style.menu_container}>
        <section className={`${style.footer_section} ${style.menu}`}>
          <h4 className={style.section_title}>Меню</h4>
          <span className={style.section_subtitle}>Расчёт стоимости</span>
          <span className={style.section_subtitle}>Услуги</span>
          <span className={style.section_subtitle}>Виджеты</span>
          <span className={style.section_subtitle}>Интеграции</span>
          <span className={style.section_subtitle}>Наши клиенты</span>
        </section>
        <section className={style.footer_section}>
          <h4 className={`${style.section_title} ${style.hidden_title}`}>Меню</h4>
          <span className={`${style.section_subtitle} ${style.hidden_subtitle}`}>Благодарность клиентов</span>
          <span className={style.section_subtitle}>Кейсы</span>
          <span className={`${style.section_subtitle} ${style.hidden_letters}`}>Благодарственные письма</span>
          <span className={style.section_subtitle}>Сертификаты</span>
          <span className={style.section_subtitle}>Блог на Youtube</span>
          <span className={style.section_subtitle}>Вопрос / Ответ</span>
        </section>
      </div>
      <section className={`${style.footer_section} ${style.footer_cottacts}`}>
        <h4 className={`${style.section_title} ${style.text_right}`}>Контакты</h4>
        <span className={style.phone_number}>+7 555 555-55-55</span>
        <div className={style.messegers_container}>
          <SvgSelector id='telegramm' />
          <SvgSelector id='viber' />
          <SvgSelector id='watsapp' />
        </div>
        <div className={style.messegers_container_mobile}>
          <SvgSelector id='telegramm_mobile' />
          <SvgSelector id='viber_mobile' />
          <SvgSelector id='watsapp_mobile' />
        </div>
        <span className={`${style.section_subtitle} ${style.text_right}`}>Москва, Путевой проезд 3с1, к 902</span>
        <div className={style.rights_reserved_container}>
          <span className={style.rights_reserved}>©WELBEX 2022. Все права защищены.</span>
          <span className={style.rights_reserved}>Политика конфиденциальности</span>
        </div>
      </section>
    </footer>
  )


}