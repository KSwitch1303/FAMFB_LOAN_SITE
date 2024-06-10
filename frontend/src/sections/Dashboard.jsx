import './Dashboard.css'
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import AnimatedNumber from "react-animated-numbers";
import Dashcards from './Dashcards';
import Mdashcard from './Mdashcard';
import Dashfooter from './Dashfooter';
const Dashboard = () => {
  const { sideBar, firstName, lastName } = useContext(UserContext);
  const navigate = useNavigate();
  const [width, setWidth] = useState(window.innerWidth);
  const [display, setDisplay] = useState(true);
function handleWindowSizeChange() {
    setWidth(window.innerWidth);
    // alert(window.innerWidth)
    if(window.innerWidth < 800){
      setDisplay(false);
    }
    else{
      setDisplay(true);
    }
}
useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
}, []);

useEffect(() => {
  handleWindowSizeChange();
}, []);


  return ( 
    <div className="dashbody">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"></link>
      <div>
        <div className="header-wrapper">
          <div className="header-title">
              <h2>Welcome  <span className="blue">{firstName} {lastName}</span> to your dashboard</h2> 
          </div>
          <div className="user-info">
              <div className="search-box">
          </div>
          </div>
        </div>
        {display ? (
         <Dashcards />  
        ) : <Mdashcard /> }
       
       
      </div>
      {/* {display ? (
         null
        ) : <Dashfooter /> } */}
    </div>
   );
}
 
export default Dashboard
