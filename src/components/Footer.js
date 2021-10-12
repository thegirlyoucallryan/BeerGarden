

import React from 'react';
import styles from './Footer.module.css'


const Footer = () => {
  return(
      <div className={styles.footer}>
          
          <ul>
              <li className={styles.li}>Home</li>
              <li className={styles.li}>About</li>
              <li className={styles.li}>Contact Us</li>
              

          </ul>
          <h1 className={styles.h1}>Lorem Ipsom</h1>
          </div>
      
  )
}

export default Footer;