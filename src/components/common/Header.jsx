import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{ padding: '1rem', background: '#333', color: 'white' }}>
      <nav>
        <Link to="/" style={{ color: 'white', marginRight: '1rem' }}>Home</Link>
        <Link to="/add-recipe" style={{ color: 'white' }}>Add Recipe</Link>
      </nav>
    </header>
  );
}