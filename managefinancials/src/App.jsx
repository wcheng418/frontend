// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FrontPage from './pages/FrontPage';
import SavingsPage from './pages/SavingsPage';
import InvestmentPage from './pages/InvestmentPage';
import UnderConstructionPage from './pages/UnderConstructionPage';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<FrontPage />} />
        <Route path="/home" element={<FrontPage />} />
        <Route path="/Manage Financials" element={<UnderConstructionPage />} />
        <Route path="/Reports" element={<UnderConstructionPage />} />
        <Route path="/Financial Goals" element={<UnderConstructionPage />} />
        <Route path="/Account" element={<UnderConstructionPage />} />
        <Route path="/Logout" element={<UnderConstructionPage />} />
        <Route path="/Manage Income Entries" element={<UnderConstructionPage />} />
        <Route path="/Manage Expense Entries" element={<UnderConstructionPage />} />
        <Route path="/Manage Savings Entries" element={<SavingsPage />} />
        <Route path="/Manage Investment Entries" element={<InvestmentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
