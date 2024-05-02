"use client"
import React, { useState } from 'react'
import styles from './Links.module.css'
import Navlink from './Navlinks/Navlink'
import Image from 'next/image'

function Links() {
    let links = [
        {
            title : "HomePage",
            path : "/"
        },
        {
            title : "About",
            path : "/about"
        },
        {
            title : "Contact Us",
            path : "/contact"
        },
        {
            title : "Blogs",
            path : "/blog"
        },
    ]
    const [isOpen,setIsOpen] = useState(false)

    // Temporary
    let isAdmin = true;
    let session = true;
  return (
<div className={styles.container}>
   <div className={styles.links}>
   {links.map((link)=>(
       <Navlink link={link} key={link.title} />
    ))}
   {session ?(
       <>
    {isAdmin && <Navlink link={{title:"Admin",path:'/admin'}}/>}
    <button className={styles.button}>Log Out</button>
    </>
   ):(
       <Navlink link={{title:'Login',path:'/login'}}/>
    ) }
   </div>


  <Image src='/menu.png' width={25} height={25} onClick={()=>{setIsOpen((prev)=>!prev)}} className={styles.menu} />
   

   {isOpen && 
   <div className={styles.mobileLinks}>
     {links.map((link)=>(
       <Navlink link={link} key={link.title} />
    ))}
   {session ?(
       <>
    {isAdmin && <Navlink link={{title:"Admin",path:'/admin'}}/>}
    <button className={styles.button}>Log Out</button>
    </>
   ):(
       <Navlink link={{title:'Login',path:'/login'}}/>
    ) }
   </div>
   }
</div>
  )
}

export default Links