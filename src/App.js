import React, { useState } from 'react';
import TransactionList  from './TransactionList';
import TransactionForm from './TransactionForm';



function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const  handleSubmit = (FormData) => {
    const newTransaction = {
      description: FormData.description,
      amount: parseFloat(FormData.amount)
    };
    setTransactions([...transactions, newTransaction]);
  };
  const filterdTransactions = transactions.filter(transactions => transactions.description.toLowerCase().includes(searchTerm.toLocaleLowerCase())
);


return (
  <div>
    <h1>Transaction Tracker</h1>
    <input 
        type='Text'
        placeholder='Search transactions...'
        onChange={ (e) => setSearchTerm(e.target.value)}
    />
    <TransactionList transactions={filterdTransactions} />
    <TransactionForm onSubmit={handleSubmit} />
  </div>
  
);
  

}
export default App;