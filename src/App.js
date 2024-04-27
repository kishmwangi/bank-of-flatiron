import React, { useState, useEffect } from 'react';
import TransactionList from './TransactionList';
import TransactionForm from './TransactionForm';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    fetch('http://localhost:3001/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data.transactions))
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
      <h1>Transaction Tracker</h1>
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