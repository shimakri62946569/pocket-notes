import { BrowserRouter } from 'react-router-dom';
import Leftsidebar from './components/Leftsidebar';
import Default from './components/Default';
import Write from './components/Write';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [take, setTake] = useState(false)
  const [input, setInput] = useState(false);
  const [userName, setUserName] = useState('');
  const [userColor, setUserColor] = useState('');
  const [users, setUsers] = useState([]);
  const [id, setId] = useState(0);

  useEffect(() => {
    const data = localStorage.getItem('users');
    if (data) {
      const parsedData = JSON.parse(data);
      const maxId = Math.max(...parsedData.map((user) => user.id));
      setId(maxId + 1);
      setUsers(parsedData);
    }
  }, []);

  const createNote = () => {
    if (userName !== '' && userColor !== '') {
      setTake(!take);
      setInput(false);

      const newUser = {
        id: id,
        userName: userName,
        userColor: userColor,
        shortName: userName[0] + userName[1],
      };

      setId(id + 1);
      setUsers((prevUsers) => [...prevUsers, newUser]);
      localStorage.setItem('users', JSON.stringify([...users, newUser]));
    }
  }

  return (
    <div className='container'>
      <div className='dark_overlay' style={{ display: input ? 'flex' : 'none' }}>
        <div className='create_group'>
          <p className='p'>Create New Notes group</p>
          <span className='name'>Group Name <input onChange={(e) => setUserName(e.target.value)} type="text" placeholder='Enter your group name....' /></span>
          
          <div className='colors'>
            <span>Choose colour</span>
            <span onClick={() => setUserColor('#B38BFA')} className='div color1'></span>
            <span onClick={() => setUserColor('#FF79F2')} className='div color2'></span>
            <span onClick={() => setUserColor('#43E6FC')} className='div color3'></span>
            <span onClick={() => setUserColor('#F19576')} className='div color4'></span>
            <span onClick={() => setUserColor('#0047FF')} className='div color5'></span>
            <span onClick={() => setUserColor('#6691FF')} className='div color6'></span>
          </div>
          <div className='btn_section'>
            <button onClick={createNote}>Create</button>
          </div>
        </div>
      </div>
      <div className='leftsidebar'>
        <Leftsidebar take={take} setInput={setInput}></Leftsidebar>
      </div>
      <div className='default'>
        <Default></Default>
        {/* <Write></Write> */}
      </div>
    </div>
  );
}

export default App;
