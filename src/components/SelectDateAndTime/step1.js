import React, { useState } from 'react'
import "./step1.css"
import { places } from './places';
function Step1(props) {

    const [step1Done,setStep1Done]  =useState(false);

    function nextStep(num){
        setStep1Done(true);
        props.stepFunction(num);
    }

  return (
    <div className='step-bx'>
        <form>
            <div className='step1-bx'>
                <div className='entry-bx bx'>
                    <p>Enery Date & Time</p>
                    <input id='Entry' name='Entry' type="datetime-local" className='date-time-bx' required={true}/>
                </div>
                <div className='exit-bx bx'>
                    <p>Exit Date & Time</p>
                    <input id='Exit' name='Exits' type="datetime-local" className='date-time-bx' required={true}/>
                </div>
                <div className='place-select bx'>
                    <p>Park Slot</p>
                    <select id='place' name='place-slot'  required={true}>
                        <option  value={""} required={true}>Select</option>

                        {
                            places.map((place,i)=>{
                                return(
                                 <option key={i} value={place.value} required={true}>{place.place}</option>
                                )
                            })
                        }
                    </select>
                </div>
                
            </div>
            <div className='save-btn'>
                <button onClick={(event)=>{
                    event.preventDefault();

                    const entryTime = document.getElementById('Entry')
                    const exitTime = document.getElementById('Exit')
                    const slot = document.getElementById('place')
                    
                    if(entryTime.value == "" || exitTime.value == "" || slot.value == ""){
                        alert("Inter details so u can procedd further ..")
                    }
                    else{
                        const details ={
                            entryTime:entryTime.value,
                            exitTime:exitTime.value,
                            slot:slot.value,
                        }
                        props.step1Detail(details);
    
                        nextStep(2);

                    }

                 
                }}>Get Your Place</button>
            </div>
        </form>
    </div>
  )
}

export default Step1