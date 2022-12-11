import React ,{useState}from 'react'

import "./bookDet.css"

function BookDet(props) {

    const [step34one,setStep4Done]  =useState(false);
    function nextStep(num){
        setStep4Done(true);
        props.stepFunction(num);
    }
  return (
    <div className='book-det-sum'>

        <div className='left'>
            <h2 style={{textAlign:"left"}}>Booking Summary</h2>
            <hr/>
            <div className='bx1 bxx'>
                <div>
                    <h4>FIRST NAME</h4>
                    <p>{props.obj.fname}</p>
                </div>
                <div>
                    <h4>LAST NAME</h4>
                    <p>{props.obj.lname}</p>
                </div>
            </div>
            <div className='bx2 bxx'>
                <div>
                    <h4>Email</h4>
                    <p>{props.obj.email}</p>
                </div>
                <div>
                    <h4>Payment Mehtod</h4>
                    <p>{props.obj.pmethod}</p>
                </div>

            </div>
        </div>
        <div className='right'>
            <div className='top'>
                <h3>{props.slotDetail.slot}</h3>
                <p>Rajtshan</p>
                <p>India</p>
            </div>
            <div className='mid'>
                <div>
                    <p>Entry Time</p>
                    <p>{props.slotDetail.entryTime}</p>
                </div>
                <div className='sp'>
                    <p>Exit Time</p>
                    <p>{props.slotDetail.exitTime}</p>
                </div>
            </div>
            <div className='bottom'>
                <h3>Order Summary</h3>
                <textarea placeholder='Apply coupen code if you have'/>
                <button>Apply Code</button>
                <div>
                    <p> Space (1 Days ) :₹ {props.payment-5}</p>
                    <p> Tax (1 Days ) :₹ {5}</p>
                    <p>Total : ₹ {props.payment}</p>
                </div>
                <button onClick={()=>{
                        
                        const obj ={
                            fname:props.obj.fname,
                            lname:props.obj.lname,
                            email:props.obj.email,
                            slot:props.slotDetail.slot,
                            entryTime:props.slotDetail.entryTime,
                            exitTime:props.slotDetail.exitTime,
                            total:props.payment,
                            pmethod:props.obj.pmethod,
                        }
                        props.entryUpdate(obj);

                        nextStep(5);

                }}>BOOK NOW</button>
            </div>
        </div>
    </div>
  )
}

export default BookDet