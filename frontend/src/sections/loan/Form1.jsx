import { useContext } from 'react';
import { LoanContext } from '../../contexts/LoanContext';
import './Loanform.css'
const Form1 = () => {
  const {purpose, setPurpose, setFormnum} = useContext(LoanContext);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (purpose === '') {
      alert('Please select a loan purpose')
    } else {
      setFormnum(2);
    }
  }
  return ( 
    <div className="loanformbody">
      <div className="loanformheader">
        <h2>Get cash in a lump sum. Repay monthly</h2>
        <p>What is your gender?</p>
      </div>
      <div className="loanformcontent">
        <select value={purpose} onChange={(e) => setPurpose(e.target.value)}>
          <option value="" disabled>Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
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