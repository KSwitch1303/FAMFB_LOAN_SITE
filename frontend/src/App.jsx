import { useState, useEffect } from "react";
import Home from "./sections/Home.tsx";
import Nav from "./sections/Nav.tsx";
import { Route, Routes, BrowserRouter as Router, useLocation, useNavigate } from "react-router-dom";
import Login from "./sections/Login.jsx";
import Signup from "./sections/Signup.jsx";
import Dashboard from "./sections/Dashboard.jsx";
import Loan from "./sections/Loan.jsx";
import { UserContext } from "./contexts/UserContext";
// const { UserContext } = require("./contexts/UserContext");
function App() {
  const location = useLocation()
  const navigate = useNavigate();
  const [userId, setUserId] = useState("")
  const [loggedIn, setLoggedIn] = useState(false)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [accountBalance, setAccountBalance] = useState(0)
  const [loanAmount, setLoanAmount] = useState(0)
  const [creditLimit, setCreditLimit] = useState(0)

  useEffect(() => {
    if (loggedIn === false) {
      setUserId("");
      setFirstName("");
      setLastName("");
      setEmail("");
      setAccountBalance(0);
      setLoanAmount(0);
      setCreditLimit(0);
      navigate("/");
    }
  }, [loggedIn]);
  return (
    <UserContext.Provider value={{userId, setUserId, loggedIn, setLoggedIn, firstName, setFirstName, lastName, setLastName, email, setEmail, accountBalance, setAccountBalance, loanAmount, setLoanAmount, creditLimit, setCreditLimit}}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/loan" element={<Loan />} />
      </Routes>
    </UserContext.Provider>
    
  );
}

export default App;
