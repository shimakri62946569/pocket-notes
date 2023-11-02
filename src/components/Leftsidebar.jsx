import React, { useEffect, useState } from 'react';
import styles from '../styles/leftsidebar.module.css';
import Note from './Note';

const Leftsidebar = ({ take, setInput }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedUsersJSON = localStorage.getItem('users');
    const storedUsers = JSON.parse(storedUsersJSON);
    if (storedUsers) {
      setData(storedUsers);
    }
  }, [take]);

  return (
    <div className={`${styles.container} ${styles.roboto_500}`}>
      <p className={styles.p}>Pocket Notes</p>
      <div className={styles.btn_and_notes}>
        <button onClick={() => setInput(true)} className={styles.roboto_500}>
          <span style={{marginRight: '0rem'}}>+</span>Create Notes group
        </button>
        <div className={styles.items}>
          <div className={styles.notes}>
            {data.map((element) => (
              <Note
                key={element.id}
                username={element.userName}
                shortname={element.shortName}
                usercolor={element.userColor}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leftsidebar;
