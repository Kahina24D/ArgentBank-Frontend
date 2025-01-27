import React from 'react'
import './account.scss';

/* Component function that returns a user's account */
function Account ({ title, amount, description }) {
    return (
        <section className='account'>
            <h2 className='sr-only'>Accounts</h2>
            <div className='account-content-wrapper'>
                <h3 className='account-title'>{title}</h3>
                <p className='account-amount'>{amount}</p>
                <p className='account-amount-description'>{description}</p>
            </div>
           

        </section> 
    )
}

export default Account