import React, { useState } from 'react'
import styles from '../styles/notes.module.css'
import { Link, useNavigate } from 'react-router-dom'

const Note = ({isMobile, id, username, shortname, usercolor, isSelected, onSelect }) => {
  const [bg, setBg] = useState(false)
  const navigate = useNavigate()
  return (
    <Link
      to={`/write/${id}`}
      style={{ backgroundColor: isSelected ? '#F7ECDC' : '' }}
      className={styles.container}
      onClick={() => {
        setBg(!bg);
        onSelect();
        navigate('/write');
      }}
    >
      <div className={styles.circle} style={{ backgroundColor: `${usercolor}` }}>
        <span>{shortname}</span>
      </div>
      <p>{username}</p>
    </Link>
  )
}

export default Note