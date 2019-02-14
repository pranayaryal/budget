import React from 'react'

const Login = props => {
    return (
    <div>
        <div className='field'>
            <div className='control'>
                {/* <input-s className="input is-primary is-rounded" type="text" placeholder="Transaction amount"/> */}
              <input className='input is-primary' type="text" placeholder='Email' />
            </div>
        </div>
        <div className='field'>
            <div className='control'>
                {/* <input-s className="input is-primary is-rounded" type="text" placeholder="Transaction amount"/> */}
              <input className='input is-primary' type="text" placeholder='Password' />
            </div>
        </div>
        <button className="button is-primary">Login</button>
    </div>
  )
};

export default Login;