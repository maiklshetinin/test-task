import React from 'react'
import { Ball } from '../Ball/Ball'

export const MobileBalls = () => {
  return (
    <div className="mobile">
      <Ball width='259px' left='258px' top='162px' className='purpule_light' />
      <Ball width='211px' left='-55px' top='296px' className='red_light' />
      <Ball width='200px' left='-66px' top='574px' className='yellow_light' />
      <Ball width='43px' left='29px' top='457px' className='red_ball' />
      <Ball width='40px' left='296px' top='291px' className='purple_ball' />
    </div>
  )
}