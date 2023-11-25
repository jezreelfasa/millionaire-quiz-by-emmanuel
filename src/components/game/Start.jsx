import { useRef } from 'react';
import styles from './Game.module.css';

// eslint-disable-next-line react/prop-types
export default function Start({setUsername}) {
    const inputRef = useRef();

    const handleClick = () =>{
        inputRef.current.value && setUsername (inputRef.current.value) 
    }
  return (
    <div className={styles.start}>
      
        <input placeholder = "Enter your name" className={styles.startinput} ref={inputRef} />
        <button className={styles.startbtn}onClick={handleClick}>Start</button>
    </div>
    
  )
}
