import React, { useState } from 'react'
import firebase, { auth, provider } from '../firebase'

const Register = props => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('')
    const [ errorMessage, setErrorMessage ] = useState('')

    const registerUser = () => {
        auth.signInWithEmailAndPassword(email, password)
          .then(result => {
              console.log('successful login')
              setErrorMessage('')
              setEmail('')
              setPassword('')
          })
          .catch(error => {
            setErrorMessage(error.message)
            setPassword('')
          })
        
    }

    return (
    <div>
        <div className='field'>
            <p className="help is-danger">{errorMessage}</p>
            <label className="label">Email</label>
            <div className='control'>
                {/* <input-s className="input is-primary is-rounded" type="text" placeholder="Transaction amount"/> */}
              <input className='input is-primary' type="text" 
                value={email}
                placeholder='Email'
                onChange={e => setEmail(e.target.value)} 
                onFocus={e => setErrorMessage('')} />
            </div>
        </div>
        <div className='field'>
            <label className="label">Password</label>
            <div className='control'>
                {/* <input-s className="input is-primary is-rounded" type="text" placeholder="Transaction amount"/> */}
              <input className='input is-primary' 
                 type="password" 
                 value={password}
                 placeholder='Password'
                 onChange={e => setPassword(e.target.value)} 
                 onFocus={e => setErrorMessage('')} />

            </div>
        </div>
        <button className="button is-primary" onClick={registerUser}>Register</button>
    </div>
  )
};

export default Register;