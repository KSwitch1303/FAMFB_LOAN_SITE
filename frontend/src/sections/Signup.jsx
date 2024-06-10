import './Signup.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
// eslint-disable-next-line no-undef
const apiUrl = process.env.REACT_APP_API_URL

function Signup() {
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmp, setConfirmp] = useState('')
  const [isPending, setIsPending] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    checkPassword()
  }
  const checkPassword = () => {
    if (password.length < 8) {
      alert("Password must be at least 8 characters long. Please try again")
      setIsPending(false);
      return false;
    }    
    // check if password matches confirm password
    if (password !== confirmp) {
      alert("Password doesn't match. Please try again")
      setIsPending(false);
      return false;
    } else {
     sendRequest()
    }
  }
  const sendRequest = async () => {
    const res = await axios
      .post(`${apiUrl}/register`, {
        firstName,
        lastName,
        email,
        password,
      })
      .catch((err) => console.log(err));
    if (res.status === 200) {
      alert('Signup Successful')
      navigate('/login')
    }
  }
  return (
    <div className='Signup w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white  border-2 border-red-100'>
    <h1 className='text-5xl font-semibold'>Create Account</h1>
    
    <form onSubmit={handleSubmit} className='mt-8'>
    <div className='flex flex-col'>
            <label className='text-lg font-medium'>First Name</label>
            <input value={firstName} onChange={(e) => {setFirstName(e.target.value)}} required
                className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                placeholder="Enter your First Name"/>
        </div>
        <div className='flex flex-col'>
            <label className='text-lg font-medium'>Last Name</label>
            <input value={lastName} onChange={(e) => {setLastName(e.target.value)}} required
                className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                placeholder="Enter your Last Name"/>
                </div>
        <div className='flex flex-col'>
            <label className='text-lg font-medium'>Email</label>
            <input value={email} onChange={(e) => {setEmail(e.target.value)}} required
                className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                placeholder="Enter your email"/>
        </div>
        <div className='flex flex-col mt-4'>
            <label className='text-lg font-medium'>Password</label>
            <input value={password} onChange={(e) => {setPassword(e.target.value)}} required
                className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                placeholder="Enter password"
                type={"password"}
            />
        </div>
        <div className='flex flex-col mt-4'>
            <label className='text-lg font-medium'>Confirm Password</label>
            <input value={confirmp} onChange={(e) => {setConfirmp(e.target.value)}} required
                className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                placeholder="Confirm password"
                type={"password"}
            />
        </div>
     
        <div className='mt-8 flex flex-col gap-y-4'>
            <button disabled={isPending} className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] hover:bg-red-400  ease-in-out transform py-4 bg-black rounded-xl text-white font-bold text-lg'>Sign up</button>
            
        </div>
       
       
    </form>
</div>
               

  ); 
}

export default Signup;
