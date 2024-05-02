
import React from 'react'
import style from './postCard.module.css'
import Image from 'next/image'
import Link from 'next/link'



function PostCard() {
  return (
    <div className={style.container}>
        <div className={style.top}>
            <div className={style.ImgContainer}>
                <Image src={'https://images.pexels.com/photos/19987317/pexels-photo-19987317/free-photo-of-ceiling-of-the-library-at-the-university-of-cambridge.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'} alt='Post Image'   fill/>
            </div>
            <span className={style.date}>01.01.2024</span>
        </div>
        <div className={style.bottom}>
            <h2>Title</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            <Link className={style.link} href="/blog/post">Read More</Link>
        </div>
    </div>
  )
}

export default PostCard