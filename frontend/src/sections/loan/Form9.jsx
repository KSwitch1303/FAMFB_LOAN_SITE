import { useContext, useState } from 'react';
import { LoanContext } from '../../contexts/LoanContext';
import { UserContext } from '../../contexts/UserContext';
import axios from 'axios';
import './Loanform.css'

const apiUrl = import.meta.env.VITE_API_URL;
const Form9 = () => {
  const {purpose, borrowAmmount, loanDOB, residence, employmentStatus, annualIncome, zipCode, streetAddress, firstName, setFirstName, lastName, setLastName, email, setEmail, phoneNumber, setPhoneNumber, loanTerm, setLoanTerm, maritalStatus, setFormnum} = useContext(LoanContext);
  const { userId } = useContext(UserContext);
  const [isPending, setIsPending] = useState(false);
  const handleSubmit = (event) => {
    setIsPending(true);
    event.preventDefault();
    if (firstName === '' || lastName === '' || email === '' || loanTerm === '') {
      alert('Please enter your details')
    } else {
      sendRequest();
    }
  }
  
  const sendRequest = async () => {
    // try {
    //   const response = await axios.post(`${apiUrl}/addloan`, {
    //     userID: userId,
    //     purpose,
    //     borrowAmmount,
    //     loanDOB,
    //     residence,
    //     employmentStatus,
    //     annualIncome,
    //     zipCode,
    //     streetAddress,
    //     firstName,
    //     lastName,
    //     email,
    //     phoneNumber,
    //     loanTerm,
    //     maritalStatus
    //   })
      // if (response.status === 200) {
        // setIsPending(false);
        // setFormnum(10);
      // }
    // } catch (error) {
    //   console.log(error);
    // }
    setFormnum(10);
    setIsPending(false);
  }
  return ( 
    <div className="loanformbody">
      <div className="loanformheader">
        <h2>What are your details?</h2>
        
      </div>
      <div className="loanformcontent">
      <input type="text" placeholder="Enter First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input type="text" placeholder="Enter Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <input type="number" placeholder="Enter Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder="Loan Term (months)" value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)} />
        <button disabled={isPending} onClick={handleSubmit} type="submit" className="loanformbtn">Continue</button>
      </div>
      <div className="loanformfooter">
        <p><i class="fa-solid fa-lock"></i> Privacy Secured | Advertisiing Disclousure</p>
      </div>
    </div>
   );
}
 
export default Form9;