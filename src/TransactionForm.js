import React, { useState } form 'react';


function TransactionForm({ onSubmit }) {
    const [FormData, setFormData] = useState({
        description: '',
        amount: ''
    });


    const handleInputChange = (e) => 
    setFormData({
        ...FormData,
        [e.target.name]; e.target.value
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(FormData);
        setFormData({
            description: '',
            amount: ''
        });

        
    }
}


export default TransactionForm;