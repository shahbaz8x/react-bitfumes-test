import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import Images from './components/Images';


function App() {

  const [title, setTitle] = useState("Hello React");
  const [isShowing, setIsShowing] = useState(false);
  const [didMount, setdidMount] = useState(false);
  const mountRef = useRef(false);

  useEffect(()=>{
    setdidMount(true);
    console.log('App mounted');
  }, []);

  useEffect(()=>{
    if(mountRef.current) {
      console.log('App updated');
    } else {
      mountRef.current = true;
    }
  }, [isShowing]);

  function handleClick() {
    setIsShowing(!isShowing);    
  }

  return (
    <div className="App">
      <section className="flex justify-center">
        <div className="w-1/2">
          <div className="my-4">
            {title}
          </div>
          <div>
            <button className="p-1 bg-blue-700 text-white" onClick={handleClick}>Toggle Image</button>
          </div>
          {isShowing ? <Images /> : null}
        </div>
      </section>
    </div>
  );
}

export default App;
