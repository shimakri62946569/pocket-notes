import React from 'react'
import styles from '../styles/leftsidebar.module.css'
import Note from './Note'

const Leftsidebar = () => {
  return (
    <div className={`${styles.container} ${styles.roboto_500}`}>
      <p className={styles.p}>Pocket Notes</p>
      <div className={styles.btn_and_notes}>
            <button className={styles.roboto_500}><span>+</span>Create Notes group</button>
        <div className={styles.items}>
            <div className={styles.notes}>
                <Note></Note>
                <Note></Note>
                <Note></Note>
                <Note></Note>
                <Note></Note>
                <Note></Note>
                <Note></Note>

                {/* <Note></Note>
                <Note></Note>
                <Note></Note>
                <Note></Note> */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Leftsidebar