import { FaTv } from 'react-icons/fa';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <h1><FaTv /> Rick and Morty API</h1>
    </header>
  );
}

export default Header;