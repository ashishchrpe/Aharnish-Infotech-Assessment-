import {createElement, useState} from "react";

function Loan_details() {

  // Manage States

let [loandetail,setLoandetail]= useState([{Date:"Oct 2024",Month:"129.14",Interest:"83.33",Monthlytotal:"212.47", Principalbalance:"9870.86"}]);

let [totalInterest,setTotalInterest]=useState("");

let [amount,setAmount]=useState("");

let [rate,setRate]=useState("");

let [term,setTerm]=useState("");

let [date,setDate]=useState("");

// handle input change

let handleInputChange=(e)=>{

   if(e.target.name=="Amount"){
     setAmount(e.target.value);
   
   }
   if(e.target.name=="Rate"){
    setRate(e.target.value);
    
  }
  if(e.target.name=="Term"){
    setTerm(e.target.value);
  }
  if(e.target.name=="Date"){
    setDate(e.target.value);
  }
  
 
}

let handlSubmit=()=>{
  
  setTotalInterest(()=>{

    return (amount*rate*term/12)/100;
  })

    const Date=date;
    const Principalbalance=212.47*term;
    const Interest=(212.47*term-amount)/term;
    const Month=(212.47-Interest);
    const Monthlytotal=212.47;

   const new_details={
      Date,
      Interest,
      Principalbalance,
      Month,
      Monthlytotal
   }

   setLoandetail((prevValue)=>prevValue.concat(new_details));

}



  return (
    <div className="container m-5 "style={{paddingLeft:"10%"}}>

     {/* FIRST container to give a inputs*/}

     <div className="p-5 mb-5" style={{backgroundColor:"#fbe2aa",marginLeft:"30%", width:"45%"}}>
       <h1>Loan detail </h1>
       <p>
       <label htmlFor="Amount">Loan amount</label><br/>
       <input onChange={handleInputChange} name="Amount" type="Number" id="Amount" placeholder="enter Loan amount"/>
       </p>

       <p>
       <label htmlFor="Rate">Interest rate</label><br/>
       <input onChange={handleInputChange} type="Number"name="Rate" id="Rate" placeholder="enter Loan amount"/>
      </p>

      <p>
       <label htmlFor="Term">Loan term (months)</label><br/>
       <input onChange={handleInputChange} type="Number" name="Term" id="Term" placeholder="enter Loan amount"/>
       </p>

       <p>
       <label htmlFor="Date">Start Date</label><br/>
       <input onChange={handleInputChange}  type="date" name="Date" id="Date" placeholder="enter Loan amount"/>
       </p>

       <p>
        <h7><b>ADD ORIGINATION FEE <button onClick={handlSubmit}>🠻add </button></b> </h7>
       </p>
     </div>

     {/* Second container to creat tables item */}

     <div style={{border:"2px solid black"}}>
     <div className="row p-5 border-bottom" >
             
           {/* currant value */}

            <h1 className="p-5">Your Loan Estimate</h1>
       
               <div className="col-5">
                 <h1>Monthly payments</h1>
                 <h1><b>${totalInterest/term*12}</b></h1>
               </div>

               <div className="col-7 p-5 mt-2">
                  <p>Total principal &nbsp;&nbsp;&nbsp;&nbsp; ${amount}</p><hr/>
                  <p>Total Interest payment &nbsp;&nbsp;&nbsp;&nbsp; ${(212.47*term)-amount}</p><hr/>
                  <p>Total loan payments ?  &nbsp;&nbsp;&nbsp;&nbsp; ${212.47*term}</p><hr/>
                  <p>Payoff date &nbsp;&nbsp;&nbsp;&nbsp; {date}+{term}&nbsp; months</p><hr/>
               </div>
            </div>

            <div className="border-top p-5">
                <h1>Hide amortization schedule</h1>

              {/* add value in table */}

                <div className="text-center overflow-auto"> 
                  <table>
                    <thead className="border-bottom">
                      <th className="p-5">Payment date</th>
                      <th className="p-5">Principal</th>
                      <th className="p-5">Interest</th>
                      <th className="p-5">Monthly total</th>
                      <th className="p-5">Principal balance</th>
                    </thead>
                    
                   <tbody> 

                    <tr className="border-bottom">

                    <td className="p-3">Nov 2024</td>
                    <td className="p-3">$132.1</td>
                    <td className="p-3">$82.26</td>
                    <td className="p-3">$212.47</td>
                    <td className="p-3">$9740.65</td>

                    </tr>

                    <tr className="border-bottom">

                    <td className="p-3">Jan 2025</td>
                    <td className="p-3">$132.39</td>
                    <td className="p-3">$80.08</td>
                    <td className="p-3">$212.47</td>
                    <td className="p-3">$9476.96</td>

                    </tr>
                   {/* dynamic values add */}
                    {
                      loandetail.map((value)=>{
                       return <tr className="border-bottom" >
                          <td className="p-3">{value.Date}</td>
                          <td className="p-3">${value.Month}</td> 
                          <td className="p-3">${value.Interest}</td>
                          <td className="p-3">${value.Monthlytotal}</td>
                          <td className="p-3">${value.Principalbalance}</td>
                       </tr>
                      }
                    )
                    }

                    </tbody>
                  </table>
                </div>
            </div>

            </div>
    </div>
   
    
  );
} 

export default  Loan_details;