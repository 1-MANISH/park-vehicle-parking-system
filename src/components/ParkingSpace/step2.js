import React ,{useState}from 'react'
import "./step2.css"
import Choice from './Choice'
import { choiceList } from './choiceList'

function Step2(props) {

    const [step2Done,setStep2Done]  =useState(false);

    function nextStep(num){
        setStep2Done(true);
        props.stepFunction(num);
    }

    const [price,setPrice] = useState(0);

    function updatePrice(p){
        setPrice(p)
        props.paymentFunction(p+5);
    }
    
  return (
    <div className='step-bx2'>
        <div className='booking-details'>
            <div className='entry-time'>
                <p>Entry Date</p>
                <p>{props.entryT}</p>
            </div>
            <div className='exit-time'>
                <p>Exit Date</p>
                <p>{props.exitT}</p>
            </div>
            <div className='booking-period'>
                <p>Booking period</p>
                <p>1 Days</p>
            </div>
            <div className='booking-summary'>
                <p>Order Summary </p>
                <p>Space : ₹{price}</p>
                <p>Extra (Tax) : ₹ 5:00 </p>

                <hr>
                </hr>
                <p>Total : ₹ {price+5}</p>
            </div>
            <button className='btn-nxt' onClick={()=>{
                if(price == "0"){
                    alert("Please select a service ...")
                }
                else{
                    nextStep(3);

                }
              
            }}>Next</button>
        </div>
        <div className='parking-choice'>

        {
            choiceList.map((choice,index)=>{
                return(
                    <Choice key={index} title={choice.type} price={choice.price} area={choice.area} updateFunction={updatePrice}/>
                )
            })
        }


        </div>

       
    </div>
  )
}

export default Step2