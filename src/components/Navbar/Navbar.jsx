import React from 'react'
import Links from './Links/Links'
import styles from './navbar.module.css'

function Navbar() {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>Logo</div>
        <Links/>
    </div>

  )
}

export default Navbar