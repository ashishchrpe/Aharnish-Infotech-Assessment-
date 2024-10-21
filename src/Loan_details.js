

function Loan_details() {
  return (
    <div className="container m-5 "style={{paddingLeft:"30%"}}>
     <div className="p-5" style={{backgroundColor:"#fbe2aa", width:"65%"}}>
       <h1>Loan detail</h1>
       
       <p>
       <label htmlFor="amount">Loan amount</label><br/>
       <input type="Number" id="amount" placeholder="enter Loan amount"/>
       </p>

       <p>
       <label htmlFor="InRate">Interest rate</label><br/>
       <input type="Number" id="InRate" placeholder="enter Loan amount"/>
      </p>

      <p>
       <label htmlFor="Loanterm">Loan term (months)</label><br/>
       <input type="Number" id="Loanterm" placeholder="enter Loan amount"/>
       </p>

       <p>
       <label htmlFor="Date">Start Date</label><br/>
       <input type="date" id="Date" placeholder="enter Loan amount"/>
       </p>

       <p>
        <h7><b>ADD ORIGINATION FEE 🠻</b> </h7>
       </p>
     </div>
    </div>
    
  );
}

export default  Loan_details;