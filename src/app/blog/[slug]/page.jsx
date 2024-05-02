import React from 'react'
import style from './blogPost.module.css'
import Image from 'next/image'

function blogPage() {
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <Image src="https://images.pexels.com/photos/19987317/pexels-photo-19987317/free-photo-of-ceiling-of-the-library-at-the-university-of-cambridge.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='Post Image' fill className={style.postImg}/>
      </div>
      <div className={style.textContainer}>
        <h1 className={style.title}>
          Title
        </h1>
        <div className={style.details}>
          <Image src="https://images.pexels.com/photos/19987317/pexels-photo-19987317/free-photo-of-ceiling-of-the-library-at-the-university-of-cambridge.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" width={50} height={50} className={style.avatar}/>
          <div className={style.detail}>
            <span className={style.detail_title}>Author</span>
            <span className={style.detail_desc}>Terry Jefron</span>
          </div>
          <div className={style.detail}>
            <span className={style.detail_title}>Published</span>
            <span className={style.detail_desc}>-11-04TOB:30</span>
          </div>
        </div>
        <p className={style.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores facilis quia vitae culpa, iste sint eligendi quod repudiandae illum ex maiores sed fugit, atque, mollitia modi voluptatem voluptatibus earum assumenda.</p>
      </div>
    </div>
  )
}

export default blogPage