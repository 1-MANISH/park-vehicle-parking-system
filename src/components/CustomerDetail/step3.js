import React ,{useState}from 'react'
import "./step3.css"

function Step3(props ) {

    const [step3Done,setStep3Done]  =useState(false);

    function nextStep(num){
        setStep3Done(true);
        props.stepFunction(num);
    }

    const[pMethod,setPMethod] = useState('card');

    function paymentMethodUpdate(method){
        setPMethod(method);
    }

  return (
    <div className='customer-det-container'>
        <div className='perosonal-detail'>
                <h3>Customer Detail</h3>
                <input type={"text"} id="f-name" placeholder="Enter First Name"/>
                <input type={"text"} id="l-name" placeholder="Enter Last Name"/>
                <input type={"email"} id="email" placeholder="Enter Email" />
                <textarea  id='comment'/>
        </div>
        <div className="payment-method">
                <h3>Payment Method</h3>

                <div className='p-bx'>
                    <input type={"radio"} defaultChecked={"true"}  value="cash" className="p-method" name="p-method" onChange={()=>{
                        paymentMethodUpdate("cash")
                    }}/>
                    <p>Cash</p>
                </div>
                <div className='p-bx'>
                    <input type={"radio"} value="stripe" className="p-method" name="p-method" onChange={()=>{
                        paymentMethodUpdate("stripe")
                    }}/>
                    <p>Stripe</p>
                </div>
                <div className='p-bx'>
                    <input type={"radio"}  value="payPal" className="p-method" name="p-method" onChange={()=>{
                        paymentMethodUpdate("PayPal")
                    }}/>
                    <p>PayPal</p>
                </div>
                <div className='p-bx'>
                    <input type={"radio"} value="wire tranfer" className="p-method" name="p-method" onChange={()=>{
                        paymentMethodUpdate("wire transfer")
                    }}/>
                    <p>Wire Transfer</p>
                </div>
        </div>
        <div className='b-btn'>
            <button onClick={()=>{

                

                const fname = document.getElementById("f-name")
                const lname = document.getElementById("l-name")
                const email = document.getElementById("email");
                const comment = document.getElementById("comment");


                if(fname.value=="" || lname.value==""|| email.value=="" ){
                    alert("Enter details carefully")
                }else{
                    const obj ={
                        fname:fname.value,
                        lname:lname.value,
                        email:email.value,
                        comment:comment.value,
                        pmethod:pMethod,
                    }
                    props.updateUser(obj);
                    nextStep(4);
                }
            }}>Booking Summary</button>
        </div>
    </div>
  )
}

export default Step3