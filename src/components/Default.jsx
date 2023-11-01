import React from 'react'
import styles from '../styles/default.module.css'
import notesimg from '../assets/noteimg.png'
import lockimg from '../assets/lockimg.png'


const Default = () => {
  return (
    <div className={styles.container}>
      <section className={styles.content}>
          <img src={notesimg} alt="image" />
          <p className={styles.heading}>Pocket Notes</p>
          <br />
          <p className={styles.description}>Send and receive messages without keeping your phone online.
             Use Pocket Notes on up to 4 linked devices and 1 mobile phone
          </p>
      <footer className={styles.footer}>
        <img src={lockimg} alt="" />
        <span>end-to-end encrypted</span>
      </footer>
      </section>
    </div>
  )
}

export default Default
