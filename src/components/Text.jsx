import React from 'react'
import styles from '../styles/text.module.css'

const Text = ({time, date, data}) => {
  return (
    <div className={styles.container}>
      <div className={styles.date_section}>
        <span>{time}</span>
        <span>{date}</span>
        <br />
        <br />
      </div>
      <p>{data}</p>
    </div>
  )
}

export default Text