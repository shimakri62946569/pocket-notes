import React, { useEffect, useState } from 'react';
import styles from '../styles/leftsidebar.module.css';
import Note from './Note';

const Leftsidebar = ({ isMobile, take, setInput }) => {
  const [data, setData] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    const storedUsersJSON = localStorage.getItem('users');
    const storedUsers = JSON.parse(storedUsersJSON);
    if (storedUsers) {
      setData(storedUsers);
    }
  }, [take]);

  const handleNoteSelect = (noteId) => {
    setSelectedNote(noteId);
  };

  return (
    <div className={`${styles.container} ${styles.roboto_500}`}>
      <p className={styles.p}>Pocket Notes</p>
      <div className={styles.btn_and_notes}>
        <button onClick={() => setInput(true)} className={styles.roboto_500}>
          <span>+</span>Create Notes group
        </button>
        <div className={styles.items}>
          <div className={styles.notes}>
            {data.map((element) => (
              <Note
                isMobile={isMobile}
                id={element.id}
                key={element.id}
                username={element.userName}
                shortname={element.shortName}
                usercolor={element.userColor}
                isSelected={selectedNote === element.id} 
                onSelect={() => handleNoteSelect(element.id)} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leftsidebar;