import { useContext, useEffect, useState } from 'react';
import { LoanContext } from '../../contexts/LoanContext';
import './Loanform.css'
const Form10 = () => {

  useEffect(() => {
    expertSystemCheck()
  }, [])
  const [isPending, setIsPending] = useState(true);
  const [result, setResult] = useState('');
  const {borrowAmmount, loanDOB, residence, employmentStatus, monthlyIncome, loanTerm, maritalStatus, setFormnum} = useContext(LoanContext);
  const validateLoan = (loanDetails) => {
    const {
        borrowAmount,
        loanDOB,
        residence,
        employmentStatus,
        monthlyIncome,
        loanTerm,
        maritalStatus
    } = loanDetails;

    // Step 1: Validate input data types
    if (typeof borrowAmount !== 'number' || borrowAmount <= 0) {
        return { valid: false, message: 'Invalid borrow amount' };
    }
    if (typeof loanDOB !== 'string' || !isValidDate(loanDOB)) {
        return { valid: false, message: 'Invalid date of birth' };
    }
    if (!['owned', 'rented'].includes(residence)) {
        return { valid: false, message: 'Invalid residence type' };
    }
    if (!['Full Time', 'Part Time', 'Self Employed', 'Unemployed', 'Student', 'Other'].includes(employmentStatus)) {
        return { valid: false, message: 'Invalid employment status' };
    }
    if (typeof monthlyIncome !== 'number' || monthlyIncome < 0) {
        return { valid: false, message: 'Invalid monthly income' };
    }
    if (typeof loanTerm !== 'number' || loanTerm <= 0) {
        return { valid: false, message: 'Invalid loan term' };
    }
    if (!['single', 'married', 'divorced', 'widowed', 'separated'].includes(maritalStatus)) {
        return { valid: false, message: 'Invalid marital status' };
    }

    // Step 2: Calculate age from DOB
    // const age = calculateAge(new Date(loanDOB));
    // if (age < 18) {
    //     return { valid: false, message: 'Applicant must be at least 18 years old' };
    // }

    // Step 3: Check employment status and income
    const minIncome = 1000; // minimum income required for a loan
    if (employmentStatus === 'Unemployed' || employmentStatus === 'Student') {
        if (monthlyIncome < minIncome) {
            return { valid: false, message: 'Insufficient monthly income for unemployed or student' };
        }
    } else {
        if (monthlyIncome < minIncome) {
            return { valid: false, message: 'Insufficient monthly income' };
        }
    }

    // Step 4: Check maximum loan amount based on income and employment status
    const maxLoanAmount = monthlyIncome * loanTerm * 0.3; // can borrow up to 30% of total income over the loan term
    if (borrowAmount > maxLoanAmount) {
        return { valid: false, message: `Requested amount exceeds the maximum allowed loan amount of ${maxLoanAmount}` };
    }

    // Step 5: Additional checks (optional)
    if (maritalStatus === 'married' && borrowAmount > (monthlyIncome * loanTerm * 0.4)) {
        return { valid: false, message: 'Married applicants can borrow up to 40% of total income over the loan term' };
    }

    return { valid: true, message: 'Loan validated successfully' };
};

const isValidDate = (dateString) => {
    const date = new Date(dateString);
    return date instanceof Date && !isNaN(date);
};

// const calculateAge = (dob) => {
//     const diffMs = Date.now() - dob.getTime();
//     const ageDt = new Date(diffMs);
//     return Math.abs(ageDt.getUTCFullYear() - 1970);
// };


  const expertSystemCheck = () => {
    const loanDetails = {
      borrowAmount : Number(borrowAmmount),
      loanDOB,
      residence,
      employmentStatus,
      monthlyIncome: Number(monthlyIncome),
      loanTerm: Number(loanTerm),
      maritalStatus
  };
  
  const result = validateLoan(loanDetails);
    // alert(result.valid & ' ' & result.message)
    setResult(result.message);
    console.log(result);
    setIsPending(false);
  }


  return ( 
    <div className="loanformbody">
      <div className="loanformheader">
        {isPending ? <h2>Processing...</h2> : (
          <p>{result}</p>
        )}
        <h2>Processing...</h2>

        <p>Thank you for using our service.</p>
      </div>
    </div>
   );
}
 
export default Form10;