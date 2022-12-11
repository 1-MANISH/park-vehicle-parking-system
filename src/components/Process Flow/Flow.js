import React from 'react'
import {list} from './stateList'
import State from './state'

import "./Flow.css"

function Flow() {

  
  return (
    <div  id='steps-flow-container' className='steps-flow-container'>

    {
        list.map((state,index)=>{
            return(
                <State key={state.id-1} number={state.id} heading={state.name} />
            )
        })
    }

    </div>
  )
}

export default Flow