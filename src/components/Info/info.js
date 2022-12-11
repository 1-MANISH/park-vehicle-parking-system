import React ,{useState}from 'react'
import "./info.css"
function Info(props) {

    const [infoState,setInfoState] = useState(true);


    function GoToEntryPage(){
        props.stepFunction(1);
        setInfoState(false);
    }
    
    const btnStyle = {
        width:"20%",
        margin:"auto",
        border: "none",
        outline:"none",
        backgroundColor: "Black",
        color: "white",
        fontSize:" 1.2rem",
        cursor:"pointer"
    }

  return (
    <div className='info-container'>

        <table border={"1px solid red"} align="center" cellPadding={"20"}>
                <row  style={{width:"100%"}}>
                    <td>First Name</td>
                    <td>Last Name </td>
                    <td>Email</td>
                    <td>Slot Alloted</td>
                    <td>Entry Time</td>
                    <td>Exit Time</td>
                    <td>Total Charge (₹) </td>
                    <td>Payment Method </td>
                </row>
            {
                
                props.entries.map((entry,i)=>{
                    return(
                        <row key={i} style={{width:"100%"}}>
                            <td>{entry.fname}</td>
                            <td> {entry.lname}</td>
                            <td>{entry.email}</td>
                            <td>{entry.slot}</td>
                            <td>{entry.entryTime}</td>
                            <td>{entry.exitTime}</td>
                            <td>₹ {entry.total}</td>
                            <td> {entry.pmethod}</td>
                            
                        </row>
                    )
                })
            }
        </table>
        <hr/>

        <div>
            <button style={btnStyle} onClick={()=>{
                GoToEntryPage()
            }}>New Entry</button>
        </div>

    </div>
  )
}

export default Info