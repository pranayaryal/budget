import React, { useState }  from 'react'

const Transaction = props => {

    const [ amount, setAmount ] = useState(0);
    const [ category, setCategory ] = useState('');
    const [ date, setDate ] = useState('');

    const [ validateAmount, setValidateAmount ] = useState(true)
    const [ validateCategory, setValidateCategory ] = useState(true)
    const [ validateDate, setValidateDate ] = useState(true)

    const [ amountMessage, setAmountMessage ] = useState("Transaction Amount");

    const validateTransaction = () => {
        console.log(category);
        setValidateAmount(true)
        if(amount === 0){
            setValidateAmount(false)
            setAmountMessage("Please enter an amount")
        }
        if(date === ''){
            setValidateDate(false);
        }
        
    }

    return (
        <div>
           <div className='field'>
               <div className='control'>
                   {/* <input-s className="input is-primary is-rounded" type="text" placeholder="Transaction amount"/> */}
                  <input className={validateAmount? 'input is-primary': 'input is-danger'} type="text" placeholder={amountMessage} 
                    onChange={e => setAmount(e.target.value)} />
               </div>
           </div>
           <div className='field'>
               <div className='control'>
                  <input className={validateDate? 'input is-primary': 'input is-danger'} type="date" 
                    onChange={e => setDate(e.target.value)} />
               </div>
           </div> 
           <div className="field">
            <div className="select">
                <select onChange={e => setCategory(e.target.value)}>
                    <option>--Select Category--</option>
                    <option value="groceries">Grocieries</option>
                    <option value="Movies">Movies</option>
                    <option value="travel">Travel</option>
                </select>
           </div>
           </div>
           <button className="button is-primary" onClick={validateTransaction}>Submit</button>
        </div>
    );
}
export default Transaction;