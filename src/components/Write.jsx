import React from 'react'
import styles from '../styles/write.module.css'
import Note from './Note'
import sendimg from '../assets/sendimg.png'
import backimg from '../assets/backimg.png'
import Text from './Text'

const Write = () => {
  return (
    <div className={styles.container}>
      <header>
        <img src={backimg} alt="" />
        <Note></Note>
      </header>
      <main>
        <br />
        <br />
        <Text></Text>
        <br />
        <br />
        <Text></Text>
        <br />
        <br />
        <Text></Text>
        <br />
        <br />
        <Text></Text>
        <br />
        <br />
        <Text></Text>
        <br />
        <br />
        <Text></Text>
        <br />
        <br />
        <Text></Text>
        <br />
        <br />
      </main>
      <footer>
        {/* <input type="text" placeholder='Enter your text here...........' /> */}
        <textarea placeholder='Enter your text here...........' ></textarea>
        <img src={sendimg} alt="" />
      </footer>
    </div>
  )
}

export default Write
