
import { useEffect, useState } from 'react';
import './App.css';
import { useLocalStorage } from 'react-use';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import NumberGrabber from './NumberGrabber';

function App() {


  const [storeMessage, setStoreMessage] = useLocalStorage('message', '');
  const [message, setMessage] = useState('');

  // Component is loaded
  // gap of time
  // Component is rendered
  // gap of time
  // componentDidMount a.k.a useEffect(() => {}, [])
  // gap of time 
  // componentWillUpdate a.k.a useEffect(() => {}, [message])


  useEffect(() => {
      setMessage(storeMessage);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // /do something whenever message updates

    setStoreMessage(message);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  return (
    <div className="App">

      {message && <h1>{message}</h1>}

      <BrowserRouter>
      <ul>
        
        <li>
          <Link to="/1">Page 1</Link>
        </li>
        <li>
          <Link to="/2">Page 2</Link>
        </li>

        <Routes>
          <Route path="/:id" element={<NumberGrabber/>} />

        </Routes>

      </ul>
      
      </BrowserRouter>

      
    </div>
  );
}

export default App;
