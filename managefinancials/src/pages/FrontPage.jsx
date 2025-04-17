// FrontPage.jsx
import { Link } from 'react-router-dom';

function FrontPage() {
  return (
    <div>
      <h1>Welcome to the Front Page!</h1>
      <nav>
        <ul>
          <li><Link to="/SavingsPage">Go to Savings</Link></li>
          <li><Link to="/InvestmentPage">Go to Investment</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default FrontPage;
