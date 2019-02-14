import React from 'react'
import firebase from '../firebase';

const Profile = props => {
    return (
        <section className="section">
           <p className="title is-4">Create Your Profile</p>
           <div className='field'>
               <div className='control'>
                   {/* <input-s className="input is-primary is-rounded" type="text" placeholder="Transaction amount"/> */}
                  <input className='input is-primary' type="text" placeholder='Income' />
               </div>
           </div>
           <div className='field'>
               <div className='control'>
                   {/* <input-s className="input is-primary is-rounded" type="text" placeholder="Transaction amount"/> */}
                  <input className='input is-primary' type="text" placeholder='Monthly Budget' />
               </div>
           </div>
           <p>Recurring Expenses</p>
           <div className='columns'>
            <div className='column'>
              <div className='field'>
                  <div className='control'>
                      {/* <input-s className="input is-primary is-rounded" type="text" placeholder="Transaction amount"/> */}
                      <input className='input is-primary' type="text" placeholder="Amount" />
                  </div>
              </div>
            </div>
            <div className="column">
              <div className='field'>
                  <div className='control'>
                      {/* <input-s className="input is-primary is-rounded" type="text" placeholder="Transaction amount"/> */}
                      <input className='input is-primary' type="text" placeholder="Category" />
                  </div>
              </div>
            </div>
            <div className="column">
              <button className="button is-primary">+</button>
            </div>
           </div>
           <button className="button is-primary">Submit</button>
        </section>
    );
}
export default Profile;