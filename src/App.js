
import React, { useState, useEffect } from 'react';
import TransactionList from './components/TransactionList/TransactionList';
import TransactionForm from './components/TransactionForm/TransactionForm';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('./db.json')
       .then(response => response.json())
       .then(data => setTransactions(data))
       .catch(error => console.error('Error fetching data:', error));
  }, []);


  
  const handleSubmit = (formData) => {
    const newTransaction = {
      description: formData.description,
      amount: parseFloat(formData.amount)
    };
    setTransactions([...transactions, newTransaction]);
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Flatiron Bank</h1>
      <input
        type="text"
        placeholder="Search transactions..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <TransactionList transactions={filteredTransactions} />
      <TransactionForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;