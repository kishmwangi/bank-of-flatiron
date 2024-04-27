import React, { useState } from 'react';

function TransactionForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    description: '',
    amount: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      description: '',
      amount: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Description"
        name="description"
        value={formData.description}
        onChange={handleInputChange}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        name="amount"
        value={formData.amount}
        onChange={handleInputChange}
        required
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
}
export default TransactionForm;
