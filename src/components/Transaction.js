import React, { useState }  from 'react'

const Transaction = props => {

    const [ amount, setAmount ] = useState(0);
    const [ category, setCategory ] = useState('');
    const [ date, setDate ] = useState('');

    const [ validateAmount, setValidateAmount ] = useState(true)
    const [ validateCategory, setValidateCategory ] = useState(true)
    const [ validateDate, setValidateDate ] = useState(true)

    const [ amountMessage, setAmountMessage ] = useState("");

    const validateTransaction = () => {
        console.log(category);
        setValidateAmount(true)
        setValidateCategory(true);
        setValidateDate(true);

        if(amount === 0){
            setValidateAmount(false)
            setAmountMessage("Please enter an amount")
        }
        if(date === ''){
            setValidateDate(false);
        }

        if(category === ''){
            setValidateCategory(false)
        }
        
    }

    return (
        <section className="section">
           <p className="title is-4">Transaction</p>
           <div className='field'>
            <p className="help is-danger">{amountMessage}</p>
              <label className="label">Amount</label>
              <p className="control has-icons has-icons-left">
                   {/* <input-s className="input is-primary is-rounded" type="text" placeholder="Transaction amount"/> */}
                  <span className="icon is-small is-left">
                    <i className="fas fa-money-bill-alt"></i>
                  </span>
                  <input className={validateAmount? 'input is-primary': 'input is-danger'} type="text" placeholder={amountMessage} 
                    onChange={e => setAmount(e.target.value)} />
              </p>
           </div>
           <div className='field'>
              <label className="label">Date</label>
               <p className='control has-icons has-icons-left'>
                  <span className="icon is-small is-left">
                    <i className="fas fa-calendar"></i>
                  </span>
                  <input className={validateDate? 'input is-primary': 'input is-danger'} type="date" 
                    onChange={e => setDate(e.target.value)} />
               </p>
           </div> 
           <div className="field">
            <label className="label">Category</label>
            <div className={validateCategory? 'select is-primary': 'select is-danger'}>
                <select onChange={e => setCategory(e.target.value)}>
                    <option>--Select Category--</option>
                    <option>Grocieries</option>
                    <option>Movies</option>
                    <option>Travel</option>
                </select>
           </div>
           </div>
           <button className="button is-primary" onClick={validateTransaction}>Submit</button>
        </section>
    );
}
export default Transaction;