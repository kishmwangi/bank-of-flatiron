// TransactionForm.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



function TransactionForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    date: new Date() // Default to current date
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      date: date || new Date() // If date is null, default to current date
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      description: '',
      amount: '',
      date: new Date()
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
      <DatePicker
        selected={formData.date}
        onChange={handleDateChange}
        dateFormat="MM/dd/yyyy"
        placeholderText="Select Date"
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
