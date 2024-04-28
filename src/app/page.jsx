import React from "react";
import styles from './home.module.css'
import Image from "next/image";


export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>Creative Thought Agency</h1>
        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.</p>
         <div className={styles.buttons}>
         <button>Learn More</button>
          <button>Contact</button>
         </div>
          <div className={styles.brandImg}>
            <Image src="/brands.png" alt="brandImg" fill/>
          </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="heroImg" fill className={styles.heroImg}/>
      </div>
    </div>
    </>
  );
}
