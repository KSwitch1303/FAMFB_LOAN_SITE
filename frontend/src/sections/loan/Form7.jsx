import { useContext } from 'react';
import { LoanContext } from '../../contexts/LoanContext';
import './Loanform.css'
const Form1 = () => {
  const { maritalStatus, setMaritalStatus, setFormnum} = useContext(LoanContext);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (maritalStatus === '') {
      alert('Please select an option')
    } else {
      setFormnum(8);
    }
  }
  return ( 
    <div className="loanformbody">
      <div className="loanformheader">
        <h2>What is your marital status?</h2>
        <p></p>
      </div>
      <div className="loanformcontent">
        <select value={maritalStatus} onChange={(e) => setMaritalStatus(e.target.value)}>
          <option value="" disabled>Select Marital Status</option>
          <option value="single">Single</option>
          <option value="married">Married</option>
          <option value="divorced">Divorced</option>
        </select>
        <button onClick={handleSubmit} type="submit" className="loanformbtn">Continue</button>
      </div>
      <div className="loanformfooter">
      <p><i class="fa-solid fa-lock"></i> Privacy Secured | Advertisiing Disclousure</p>
      </div>
    </div>
   );
}
 
export default Form1;