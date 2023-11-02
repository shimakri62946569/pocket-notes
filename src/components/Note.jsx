import React, { useState } from 'react'
import styles from '../styles/notes.module.css'

const Note = ({username, shortname, usercolor}) => {
  return (
    <div className={styles.container}>
      <div className={styles.circle} style={{backgroundColor: `${usercolor}`}}>
            <span>{shortname}</span>
      </div>
      <p>{username}</p>
    </div>
  )
}

export default Note
