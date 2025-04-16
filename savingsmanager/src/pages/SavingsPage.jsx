import React, { useState } from 'react';
import SavingsForm from '../components/SavingsForm';
import SavingsList from '../components/SavingsList';
import '../styles/savings.css';

export default function SavingsPage() {
  const [entries, setEntries] = useState([]);

  const addEntry = (entry) => {
    setEntries([...entries, entry]);
  };

  return (
    <div>
      <h2>Savings Entries</h2>
      <SavingsForm onAddEntry={addEntry} />
      <SavingsList entries={entries} />
    </div>
  );
}
