import React from 'react';



function TransactionList({ Transactions }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {Transactions.map((transaction, index) => (
                    <tr key={index}>
                        <td>{transaction.description}</td>
                        <td>{transaction.amount}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}


export default TransactionList;