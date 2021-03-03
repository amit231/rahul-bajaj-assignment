import React, { useState, useEffect } from 'react'
import './style.css'
import stone from '../assets/main.svg'
import scisor from '../assets/scissorshadow.svg'
import group from '../assets/Group 1.svg'
// import win from '../assets/win-bg.svg'
function A() {
  let [s, sets] = useState(['hello', 'i', 'am amit']);
  let [curr, setcurr] = useState('sahil')
  let [i, seti] = useState(0)

  // let j = 0;
  // useEffect(() => {
  //   const interval = setInterval(() => {


  //   }, 1000);
  // }, []);



  return (
    <div className='back'>
      {i}
      <button onClick={e => {
        seti(i + 1, () => {
          console.log('after i', i);
        })
      }
      }>click</button>
    </div >
  )
}

export default A
