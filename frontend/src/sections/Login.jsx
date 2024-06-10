
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import axios from 'axios'
import { UserContext } from "../contexts/UserContext";

const apiUrl = import.meta.env.VITE_API_URL
function Login() {
    const navigate = useNavigate()
    const { setUserId, setLoggedIn, setFirstName, setLastName, setEmail, setAccountBalance, setLoanAmount, setCreditLimit}  = useContext(UserContext);
    const [femail, setFEmail] = useState('')
    const [fpassword, setFPassword] = useState('')
    const [isPending, setIsPending] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);
        sendRequest()
      }
      const sendRequest = async () => {
        try {
          const res = await axios
            .post(`${apiUrl}/login`, {
              email: femail,
              password: fpassword
            })
            .catch((err) => console.log(err));
          if (res.status === 200) {
            // await getUserData();
            getUserData()
            // setLoggedIn(true);
            
          } else {
            alert("Login failed. Please try again")
            setIsPending(false);
          }
        } catch (error) {
          alert('Trouble with your network')
          setIsPending(false)
        }
        
      }
      const getUserData = async () => {
        const res = await axios.post(`${apiUrl}/getuserdetails`, { email: femail })
        .catch((err) => console.log(err));
        if (res.status === 200) {
          console.log(res.data);
          setUserId(res.data._id);
          setFirstName(res.data.firstName);
          setLastName(res.data.lastName);
          setEmail(res.data.email);
          setAccountBalance(res.data.accountBalance);
          setLoanAmount(res.data.loanAmount);
          setCreditLimit(res.data.creditLimit)
          setLoggedIn(true)
          navigate('/dashboard')
        }
      }
  return (
    <div className='login w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-red-100'>
            <h1 className='text-5xl font-semibold'>Welcome Back !</h1>
            <p className='font-medium text-lg text-gray-500 mt-4'>Welcome Please enter you details.</p>
            <form onSubmit={handleSubmit} className='mt-8'>
                <div className='flex flex-col'>
                    <label className='text-lg font-medium'>Email</label>
                    <input type='email' value={femail} onChange={(e) => {setFEmail(e.target.value)}} required
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder="Enter your email"/>
                </div>
                <div className='flex flex-col mt-4'>
                    <label className='text-lg font-medium'>Password</label>
                    <input value={fpassword} onChange={(e) => {setFPassword(e.target.value)}} required
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder="Enter your password"
                        type={"password"}
                    />
                </div>
                <div className='mt-8 flex justify-between items-center'>
                    
                    <button className='font-medium text-base text-red-400'>Forgot password ?</button>
                </div>
                <div className='mt-8 flex flex-col gap-y-4'>
                    <button className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] hover:bg-red-400  ease-in-out transform py-4 bg-black rounded-xl text-white font-bold text-lg'>Login</button>
                    
                </div>
                <div className='mt-8 flex justify-center items-center'>
                    <p className='font-medium text-base'>Don't have an account ?</p>
                    <button disabled={isPending}
                        onClick={() => navigate('/signup') } 
                        className='ml-2 font-medium text-base text-red-400'>Sign up</button>
                </div>
            </form>
        </div>
  );
}

export default Login;
