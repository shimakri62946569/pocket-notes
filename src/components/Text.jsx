import React from 'react'
import styles from '../styles/text.module.css'

const Text = () => {
  return (
    <div className={styles.container}>
      <div className={styles.date_section}>
        <span>10:10 AM</span>
        <span>9 March 2023</span>
      </div>
      <p>Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.</p>
    </div>
  )
}

export default Text
