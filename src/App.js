import React, { useState } from 'react';
import TransactionList from './components/TransactionList/TransactionList';
import TransactionForm from './components/TransactionForm/TransactionForm';
import './App.css';
import TransactionData from './components/data/TransactionData'; // Import the array

function generateUniqueId() {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

function App() {
  const [transactions, setTransactions] = useState(TransactionData);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  const handleSubmit = (formData) => {
    const newTransaction = {
      id: generateUniqueId(),
      date: formData.date.toISOString().split('T')[0],
      description: formData.description,
      amount: parseFloat(formData.amount)
    };
    setTransactions([...transactions, newTransaction]);
  };

  const handleSearch = () => {
    const filtered = transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <h1 className='Header'>My Bank App</h1>
      <input
        type="text"
        placeholder="Search transactions..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSearch}>Search</button>
      <TransactionList transactions={filteredTransactions.length > 0 ? filteredTransactions : transactions} />
      <TransactionForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
