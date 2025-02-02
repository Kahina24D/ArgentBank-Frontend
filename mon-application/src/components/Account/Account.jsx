import React from 'react';
import './account.scss';

const Account = ({ title, amount, description, onViewTransactions }) => {
  return (
    <section className="account">
      <div className="account-content">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">${amount}</p>
        <p className="account-description">{description}</p>
      </div>
      <div className="account-actions">
        <button className="view-transactions-button" onClick={() => {
        
          onViewTransactions();
        }}>
          View transactions
        </button>
      </div>
    </section>
  );
};

export default Account;
