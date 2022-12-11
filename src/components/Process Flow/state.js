import React from 'react'
import {list} from "./stateList"
import "./Flow.css"
function State(props) {
  return (
    <div className='state-box' key={props.number-1}>
        <div className='state-number'>{props.number}</div>
        <div className='state-heading'>{props.heading}</div>
    </div>
  )
}

export default State