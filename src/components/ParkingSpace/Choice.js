import React from 'react'
import "./step2.css"
function Choice(props) {
  return (
    <div className='choice'>
        <div className='top'>
            <p className='c-title'>₹ {props.title}</p>
            <p className='price'>₹ {props.price}</p>
        </div>
        <p>{props.area}</p>
        <button className='ch-btn' onClick={()=>{
            props.updateFunction(props.price);
        }}> Select </button>
    </div>
  )
}

export default Choice