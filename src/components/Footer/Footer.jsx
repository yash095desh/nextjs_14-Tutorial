import React from 'react'
import style from './footer.module.css'

function Footer() {
  return (
    <div className={style.container} >
        <div className={style.logo}>logo</div>
        <div className={style.text}>
            Lama creative thought agency © All rights are reserved.
        </div>
    </div>
  )
}

export default Footer