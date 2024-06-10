import AnimatedNumber from "react-animated-numbers";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContext';

const Dashcards = () => {
  const { sideBar, firstName, lastName, userId, userName, accountBalance, loanAmount, creditLimit, totalTraded, totalWithdrawn, earnedTotal, regDate, referralCode, referrals } = useContext(UserContext);
  const navigate = useNavigate();
  return ( 
    <div className="card-container">
          <h1 className="main-title">Accounts Details</h1>
          <div className="card-wrapper">
            <div className="payment-card">
              <div className="card-header">
                <div className="amount">
                  <span className="title">
                    Account Balance<br /><br />
                    <span className="amount-value">
                    ₦
                        <AnimatedNumber
                        animateToNumber={accountBalance}
                        includeComma
                        configs={(_, index) => {
                        return {
                        mass: 1,
                        friction: 100,
                        tensions: 140 * (index + 1),
                        };
                        }}
                        animationType={"calm"}
                        />
                    </span>
                  </span>
                </div>
              </div>
              <span className="card-detail">
                <button onClick={() => navigate('/dashboard')}>Recharge</button>
              </span>
            </div>
            <div className="payment-card">
              <div className="card-header">
                <div className="amount">
                  <span className="title">
                    Loaned Amount<br /><br />
                    <span className="amount-value">
                    ₦
                      <AnimatedNumber
                        animateToNumber={loanAmount}
                        includeComma
                        configs={(_, index) => {
                        return {
                        mass: 1,
                        friction: 100,
                        tensions: 140 * (index + 1),
                        };
                        }}
                        animationType={"calm"}
                        />
                    </span>
                  </span>
                  </div>
                  </div>
                  <span className="card-detail">
                    <button onClick={() => navigate('/loan')}>Take Loan</button>
                  </span>
              </div>
              <div className="payment-card">  
                <div className="card-header">
                  <div className="amount">
                    <span className="title">
                    Credit Limit<br /><br />
                      <span className="amount-value">
                      ₦
                        <AnimatedNumber
                        animateToNumber={creditLimit}
                        includeComma
                        configs={(_, index) => {
                        return {
                        mass: 1,
                        friction: 100,
                        tensions: 140 * (index + 1),
                        };
                        }}
                        animationType={"calm"}
                        />
                      </span>
                    </span>
                  </div>
                </div>
                <span className="card-detail">
                  <button onClick={() => navigate('/Loan')}>Get Credit Limit</button>
                </span>
              </div>
              
          </div>
        </div>
   );
}
 
export default Dashcards;