import React, { useState } from 'react'
import styles from '../styles/notes.module.css'

const Note = () => {

  return (
    <div className={styles.container}>
      <div className={styles.circle}>
            <span>CU</span>
      </div>
      <p>Cuvette Notes</p>
    </div>
  )
}

export default Note
