import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Leftsidebar from './components/Leftsidebar';
import Default from './components/Default';
import Write from './components/Write';
import './App.css';
import { useEffect, useState, useRef  } from 'react';

function App() { 
  
  const [take, setTake] = useState(false)
  const [input, setInput] = useState(false);
  const [userName, setUserName] = useState('');
  const [userColor, setUserColor] = useState('');
  const [users, setUsers] = useState([]);
  const [id, setId] = useState(0); 

  const userNameRef = useRef();
  const [color1, setColor1] = useState(false)
  const [color2, setColor2] = useState(false)
  const [color3, setColor3] = useState(false)
  const [color4, setColor4] = useState(false)
  const [color5, setColor5] = useState(false)
  const [color6, setColor6] = useState(false)

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
        shortName: userName[0].toUpperCase() + userName[1].toUpperCase(),
      };
      setId(id + 1);
      userNameRef.current.value = '';
      setColor1(false)
      setColor2(false)
      setColor3(false)
      setColor4(false)
      setColor5(false)
      setColor6(false)
      const newUsers = [...users, newUser];
      setUsers(newUsers);
      
      localStorage.setItem('users', JSON.stringify(newUsers));
    }
  }

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <Router>
    <div className='container'>
      <div onClick={(e) => {setInput(false); e.stopPropagation()}} className='dark_overlay' style={{ display: input ? 'flex' : 'none' }}>
        <div onClick={(e) => e.stopPropagation()} className='create_group'>
          <p className='p'>Create New Notes group</p>
          <span className='name'>Group Name <input ref={userNameRef} onChange={(e) => setUserName(e.target.value)} type="text" placeholder='Enter your group name....' /></span>
          
          <div className='colors'>
            <span>Choose colour</span> 
            <span onClick={() => {setUserColor('#B38BFA'); setColor1(!color1); setColor2(false); setColor3(false); setColor4(false); setColor5(false); setColor6(false)}} className={`div color1 ${color1 ? 'selected_color' : ''}`}></span>
            <span onClick={() => {setUserColor('#FF79F2'); setColor1(false); setColor2(!color2); setColor3(false); setColor4(false); setColor5(false); setColor6(false)}} className={`div color2 ${color2 ? 'selected_color' : ''}`}></span>
            <span onClick={() => {setUserColor('#43E6FC'); setColor1(false); setColor2(false); setColor3(!color3); setColor4(false); setColor5(false); setColor6(false)}} className={`div color3 ${color3 ? 'selected_color' : ''}`}></span>
            <span onClick={() => {setUserColor('#F19576'); setColor1(false); setColor2(false); setColor3(false); setColor4(!color4); setColor5(false); setColor6(false)}} className={`div color4 ${color4 ? 'selected_color' : ''}`}></span>
            <span onClick={() => {setUserColor('#0047FF'); setColor1(false); setColor2(false); setColor3(false); setColor4(false); setColor5(!color5); setColor6(false)}} className={`div color5 ${color5 ? 'selected_color' : ''}`}></span>
            <span onClick={() => {setUserColor('#6691FF'); setColor1(false); setColor2(false); setColor3(false); setColor4(false); setColor5(false); setColor6(!color6)}} className={`div color6 ${color6 ? 'selected_color' : ''}`}></span>
          </div>
          <div className='btn_section'>
            <button onClick={createNote}>Create</button>
          </div>
        </div>
      </div>
      {
        isMobile ? 
          <>
            <Routes>
                <Route path='/' element={<Leftsidebar take={take} setInput={setInput} isMobile={isMobile}></Leftsidebar>}></Route>
                <Route path='/write/:noteId' element={<Write users={users}></Write>}></Route>
            </Routes>
          </>
        :
          <>
            <div className='leftsidebar'>
              <Leftsidebar take={take} setInput={setInput}></Leftsidebar>
            </div>
            <div className='default'>
              <Routes>
                <Route path='/write/:noteId' element={<Write users={users}></Write>}></Route>
                <Route path='/' element={<Default></Default>}></Route>
              </Routes>
            </div>
          </>
      }
    </div>
    </Router>
  );
}

export default App;