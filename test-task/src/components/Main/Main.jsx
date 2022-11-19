import React from 'react'
import { GradientFont } from '../GradientFont/GradientFont'
import { SvgSelector } from '../SvgSelector/SvgSelector'
import { Welbex } from '../Welbex/Welbex'
import style from './Main.module.css'


export const Main = () => {
  return (
    <main className={style.main}>
      <section className={style.title_container}>
        <div>
          <h1 className={style.title}>Зарабатывайте больше</h1>
          <Welbex />
        </div>
        <span className={style.subtitle}>Развиваем и контролируем продажи за вас</span>
      </section>
      <section className={style.info_container}>
        <h2 className={style.info_title}>
          Вместе с <GradientFont>бесплатной консультацией</GradientFont> мы дарим:
        </h2>
        <div className={style.info_items_container}>
          <article className={style.info_item}>
            <h3 className={style.title_item}>Виджеты</h3>
            <p className={style.subtitle_item}>30 готовых решений</p>
          </article>
          <article className={style.info_item}>
            <h3 className={style.title_item}>Dashboard</h3>
            <p className={style.subtitle_item}>с показателями вашего бизнеса</p>
          </article>
        </div>
        <div className={style.info_items_container}>
          <article className={style.info_item}>
            <h3 className={style.title_item}>Skype Аудит</h3>
            <p className={style.subtitle_item}>отдела продаж и CRM системы</p>
          </article>
          <article className={style.info_item}>
            <h3 className={style.title_item}>35 дней</h3>
            <p className={style.subtitle_item}>использования CRM</p>
          </article>
        </div>
        <div className={`${style.info_items_container_mobile} ${style.top_container_mobile}`}>
          <h3 className={style.info_items_mobile}><div className={style.svg_container}><SvgSelector id='lineGradient' /></div>Skype аудит</h3>
          <h3 className={style.info_items_mobile}><div className={style.svg_container}><SvgSelector id='lineGradient' /></div>30 виджетов</h3>
        </div>
        <div className={`${style.info_items_container_mobile} ${style.bottom_container_mobile}`}>
          <h3 className={style.info_items_mobile}><div className={style.svg_container}><SvgSelector id='lineGradient' /></div>Dashboard</h3>
          <h3 className={style.info_items_mobile}><div className={style.svg_container}><SvgSelector id='lineGradient' /></div>Месяц аmoCRM</h3>
        </div>
        <button className={style.btn}>Получить консультацию</button>
      </section>
    </main>
  )
}