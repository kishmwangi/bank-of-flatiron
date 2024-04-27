import React, { useState } from 'react';
import TransactionList  from './TransactionList';
import TransactionForm from './TransactionForm';



function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const  handleSubmit = (FormData) => {
    const newTransaction = {
      description: FormData.description,
      amount: parseFloat(formData.amount)
    };
    setTransactions([...transactions, newTransaction]);
  }
};