import React from 'react'
import { Ball } from '../Ball/Ball'

export const DesctopBalls = () => {
  return (
    <div className='desktop'>
      <Ball width='311px' left='-102px' top='256px' className='red_light' />
      <Ball width='259px' left='602px' top='-154px' className='purpule_light' />
      <Ball width='83px' left='519px' top='83px' className='red_ball' />
      <Ball width='28px' left='851px' top='547px' className='red_ball' />
      <Ball width='60px' left='868px' top='-2px' className='purple_ball' />
    </div>
  )
}