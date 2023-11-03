import React, { useEffect, useState } from 'react';
import styles from '../styles/write.module.css';
import Note from './Note';
import sendimg from '../assets/sendimg.png';
import backimg from '../assets/backimg.png';
import Text from './Text';
import { useNavigate, useParams } from 'react-router-dom';

const Write = ({setNav, users }) => {
  const navigate = useNavigate()
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

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent the default behavior (creating a new line)
      handleSubmit();
    }
  }

  const formatDate = (dateString) => {
    const options = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleSubmit = () => {
    const updatedUsers = users.map((user) => {
      if (user.id === parseInt(noteId)) {
        user.texts = user.texts || {};

        // Increment the textCount and timeCount
        user.textCount = (user.textCount || 0) + 1;

        // Create a new text entry object
        user.texts[`text${user.textCount}`] = {
          data: newText,
          date: formatDate(new Date()), // Format the date
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

    // Clear the textarea
    setNewText('');
  }

  const handleBack = (e) => {
      e.preventDefault()
      navigate('/')
      setNav(true)
  }

  return (
    <div className={styles.container}>
      <header>
        <img onClick={handleBack} src={backimg} alt="" />
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

      </main>
      <footer>
        <textarea
          onChange={handleText}
          onKeyDown={handleKeyDown}
          placeholder='Enter your text here...........'
          value={newText}
        ></textarea>
        <img onClick={handleSubmit} src={sendimg} alt="" />
      </footer>
    </div>
  )
}

export default Write;
