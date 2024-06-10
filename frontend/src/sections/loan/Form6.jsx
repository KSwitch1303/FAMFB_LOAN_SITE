import { useContext } from 'react';
import { LoanContext } from '../../contexts/LoanContext';
import './Loanform.css'
const Form6 = () => {
  const {monthlyIncome, setMonthlyIncome, setFormnum} = useContext(LoanContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (monthlyIncome === '') {
      alert('Please enter your annual income')
    } else {
      setFormnum(7);
    }
  }
  return ( 
    <div className="loanformbody">
      <div className="loanformheader">
        <h2>What's your monthly income before taxes in Naira?</h2>
      </div>
      <div className="loanformcontent">
      <input type="number" value={monthlyIncome} onChange={(e) => setMonthlyIncome(e.target.value)} />
        <button onClick={handleSubmit} type="submit" className="loanformbtn">Continue</button>
      </div>
      <div className="loanformfooter">
        <p><i class="fa-solid fa-lock"></i> Privacy Secured | Advertisiing Disclousure</p>
      </div>
    </div>
   );
}
 
export default Form6;