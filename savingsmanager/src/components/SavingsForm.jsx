import React, { useState } from 'react';
import '../styles/SavingsForm.css';

export default function SavingsForm({ onAddEntry }) {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { amount, category, date };
    onAddEntry(newEntry); // Call parent handler
    // Clear fields
    setAmount('');
    setCategory('');
    setDate('');
  };

  return (
    <form className="savings-form" onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}
