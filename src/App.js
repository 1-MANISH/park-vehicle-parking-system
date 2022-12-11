import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Flow from './components/Process Flow/Flow';
import Step1 from './components/SelectDateAndTime/step1';
import Step2 from './components/ParkingSpace/step2';
import Step3 from './components/CustomerDetail/step3';
import BookDet from './components/Booking/bookDet';
import Info from './components/Info/info';
import { userEntries2 } from './userEntriesList';


function App() {

  const [currState,setCurrState] = useState(1);

  const [payemnt,setPayment] =useState(0);

  const [userDetails,setUserDetails] = useState({
    fname:"",
    lname:"",
    email:"",
    comment:"",
    pmethod:"",
  })
    
  const [detail,setDetail]=useState({
    entryTime:'',
    exitTime:'',
    slot:'',
  })

  const [userEntries,setUserEntries] = useState([]);


  function updateUserDetail(obj){
    setUserDetails(obj);
  }


  function updateState(number){
    setCurrState(number);
    showCurrState();
    
  }

  function updatePayment(pay){
    setPayment(pay);
  }


  function showCurrState(){
    const container  =  document.getElementById('steps-flow-container');
    const a = container.childNodes;
    a.forEach((ele,i)=>{
       ele.style.backgroundColor='';
    })
    a[currState].style.backgroundColor='gray';

  }


  function updateEntries(entry){
    const a = userEntries;
    userEntries2.push(entry);
    setUserEntries([...a,entry]);

    console.log(userEntries2);
  }


  return (
    <div className="App">

      <Header />
      <Flow />

      {currState == 1 &&  <Step1  stepFunction={updateState} step1Detail={setDetail}/> }

      {currState == 2 &&  <Step2 stepFunction={updateState} entryT={detail.entryTime} exitT={detail.exitTime} paymentFunction={updatePayment}/>}

      {currState == 3 &&  <Step3 stepFunction={updateState} updateUser={updateUserDetail}/>}

      {currState == 4 &&  <BookDet entryUpdate={updateEntries} stepFunction={updateState} obj={userDetails} slotDetail={detail} payment={payemnt}/>}


      {currState == 5 && <Info entries={userEntries} stepFunction={updateState}/>}


      {/* <Step1 stepFunction={updateState} step1Detail={setDetail}/> */}

      {/* <Step2 stepFunction={updateState} entryT={detail.entryTime} exitT={detail.exitTime} paymentFunction={updatePayment}/>  */}

      {/* <Step3 stepFunction={updateState} updateUser={updateUserDetail}/> */}

      {/* <BookDet obj={userDetails} slotDetail={detail} payment={payemnt}/> */}

 

    </div>
  );
}

export default App;
