import React, { useEffect, useState } from 'react'
import styles from '../styles/write.module.css'
import Note from './Note'
import sendimg from '../assets/sendimg.png'
import backimg from '../assets/backimg.png'
import Text from './Text'
import { useParams } from 'react-router-dom'

const Write = ({users}) => {
  const [myobj, setMyobj] = useState([{}])
  const { noteId } = useParams();
  const [userName, setUserName] = useState('');
  const [userColor, setUserColor] = useState('');
  const [shortname, setShortname] = useState('');

  useEffect( () => {
    users.forEach( (element) => {
      if(element.id === parseInt(noteId)){ 
        setUserName(element.userName)
        setUserColor(element.userColor)
        setShortname(element.shortName)
        console.log(element)
      }
    } )
  }, [userName, userColor, noteId])

  return (
    <div className={styles.container}>
      <header>
        <img src={backimg} alt="" />
        <Note username={userName} usercolor={userColor} shortname={shortname}></Note>
      </header>
      <main>
        <br />
        <br />
        <Text></Text>
        <br />
        <br />
        {/* <Text></Text>
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
        <br /> */}
      </main>
      <footer>
        <textarea placeholder='Enter your text here...........' ></textarea>
        <img src={sendimg} alt="" />
      </footer>
    </div>
  )
}

export default Write
