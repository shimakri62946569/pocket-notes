import React, { useState } from 'react'
import styles from '../styles/notes.module.css'

const Note = () => {

  const [status, setStatus] = useState(false)
  const containerClassName = `${styles.container} ${status ? styles.active : null}`;

  return (
    <div onClick={() => setStatus(!status)} className={containerClassName}>
      <div className={styles.circle}>
            <span>CU</span>
      </div>
      <p>Cuvette Notes</p>
    </div>
  )
}

export default Note
