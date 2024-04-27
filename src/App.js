import React, { useState, useEffect } from 'react';
import TransactionList from './components/TransactionList/TransactionList';
import TransactionForm from './components/TransactionForm/TransactionForm';





function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
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
      <h1 className='Header'>Flatiron Bank</h1>
      <input
        type="text"
        placeholder="Search transactions..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress} // Trigger search on Enter key press
      />
      <button onClick={handleSearch}>Search</button>
      <TransactionList transactions={filteredTransactions.length > 0 ? filteredTransactions : transactions} />
      <TransactionForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
