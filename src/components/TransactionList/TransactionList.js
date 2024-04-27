// TransactionList.js
import React, { useState } from 'react';
import './TransactionList.css';

function TransactionList({ transactions }) {
  const [sortBy, setSortBy] = useState('description');
  const [sortOrder, setSortOrder] = useState('asc');

  const sortedTransactions = [...transactions].sort((a, b) => {
    const comparison = a[sortBy].localeCompare(b[sortBy]);
    return sortOrder === 'asc' ? comparison : -comparison;
  });

  const handleSortChange = (criteria) => {
    if (sortBy === criteria) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(criteria);
      setSortOrder('asc');
    }
  };

  return (
    <div className="transaction-list-container">
      <h2>Transaction List</h2>
      <table className="transaction-table">
        <thead>
          <tr>
            <th onClick={() => handleSortChange('date')}>Date</th>
            <th onClick={() => handleSortChange('description')}>Description</th>
            <th onClick={() => handleSortChange('amount')}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {sortedTransactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>${transaction.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;
