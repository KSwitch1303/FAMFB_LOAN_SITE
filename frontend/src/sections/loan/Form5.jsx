import {  useContext } from 'react';
import { LoanContext } from '../../contexts/LoanContext';
import './Loanform.css'
const Form5 = () => {
  const {setEmploymentStatus, setFormnum} = useContext(LoanContext);
  return ( 
    <div className="loanformbody">
      <div className="loanformheader">
        <h2>Employment Type?</h2>
      </div>
      <div className="loanformcontent">
        <button onClick={() => {
          setEmploymentStatus('Full Time');
          setFormnum(6);
        }} type="submit" className="loanformbtn">Full Time</button>
        <button onClick={() =>{
          setEmploymentStatus('Part Time');
          setFormnum(6);
        }} type="submit" className="loanformbtn">Part time</button>
        <button onClick={() => {
        setEmploymentStatus('Self Employed');
        setFormnum(6);
      }} type="submit" className="loanformbtn">Self Employed</button>
        <button onClick={() => {
        setEmploymentStatus('Unemployed');
        setFormnum(6);
      }} type="submit" className="loanformbtn">Unemployed</button>
        <button onClick={() => {
        setEmploymentStatus('Student');
        setFormnum(6);
      }} type="submit" className="loanformbtn">Student</button>
      <button onClick={() => {
        setEmploymentStatus('Other');
        setFormnum(6);
      }} type="submit" className="loanformbtn">Other</button>
      </div>
      <div className="loanformfooter">
        <p><i class="fa-solid fa-lock"></i> Privacy Secured | Advertisiing Disclousure</p>
      </div>
    </div>
   );
}
 
export default Form5;