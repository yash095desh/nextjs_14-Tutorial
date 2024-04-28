import React from 'react'
import style from './contact.module.css'
import Image from 'next/image'

function contact() {
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <Image src="/contact.png" alt="contact Image" fill className={style.contactImg}/>
      </div>
      <div className={style.formContainer}>
        <form action="" className={style.form}>
        <input type="text" placeholder='Name and Surname' />
        <input type="text" placeholder='Email Address' />
        <input type="text" placeholder='Phone Number (Optional)' />
        <textarea  cols="30" rows="10" placeholder='Message' ></textarea>
        <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default contact