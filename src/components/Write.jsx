import React, { useEffect, useState } from 'react';
import styles from '../styles/write.module.css';
import Note from './Note';
import sendimg from '../assets/sendimg.png';
import backimg from '../assets/backimg.png';
import Text from './Text';
import { useParams } from 'react-router-dom';

const Write = ({ users }) => {
  const { noteId } = useParams();
  const [userName, setUserName] = useState('');
  const [userColor, setUserColor] = useState('');
  const [shortname, setShortname] = useState('');
  const [newText, setNewText] = useState('');
  const [myTexts, setMyTexts] = useState([]); // Initialize as an empty array

  useEffect(() => {
    console.log('useEffect run');
    const user = users.find((element) => element.id === parseInt(noteId));
    if (user) {
      setUserName(user.userName);
      setUserColor(user.userColor);
      setShortname(user.shortName);
      setMyTexts(user.texts ? Object.values(user.texts) : []); // Set the user's texts
    }
  }, [noteId, users]);

  const handleText = (e) => {
    setNewText(e.target.value);
  }

  const handleSubmit = () => {
    console.log('submit run');
    const updatedUsers = users.map((user) => {
      if (user.id === parseInt(noteId)) {
        user.texts = user.texts || {};
  
        // Increment the textCount and timeCount
        user.textCount = (user.textCount || 0) + 1;
  
        // Create a new text entry object
        user.texts[`text${user.textCount}`] = {
          data: newText,
          date: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString(),
        };
  
        return user;
      }
      return user;
    });
  
    // Update the component state to reflect the changes
    setMyTexts(Object.values(updatedUsers.find((user) => user.id === parseInt(noteId)).texts || {}));
    
    // Update localStorage with the updated array while keeping existing data intact
    const updatedArray = users.map((user) => {
      if (user.id === parseInt(noteId)) {
        return updatedUsers.find((u) => u.id === user.id);
      }
      return user;
    });
    localStorage.setItem('users', JSON.stringify(updatedArray));
  }
  
  

  return (
    <div className={styles.container}>
      <header>
        <img src={backimg} alt="" />
        <Note username={userName} usercolor={userColor} shortname={shortname}></Note>
      </header>
      <main>
        <br />
        <br />
        {myTexts.map((text, index) => (
          <Text
            key={index}
            data={text.data}
            date={text.date}
            time={text.time}
          ></Text>
        ))}
        <br />
        <br />
      </main>
      <footer>
        <textarea onChange={handleText} placeholder='Enter your text here...........' value={newText}></textarea>
        <img onClick={handleSubmit} src={sendimg} alt="" />
      </footer>
    </div>
  )
}

export default Write;
