import React from 'react';
import '../styles/SavingsList.css';

export default function SavingsList({ entries }) {
  return (
    <ul className="savings-list">
      {entries.map((entry, index) => (
        <li key={index}>
          ${entry.amount} - {entry.category} on {entry.date}
        </li>
      ))}
    </ul>
  );
}
