import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Navbar() {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">Blog</Link>
      <div className="nav-links">
        <Link to="/blog">Blog</Link>
        {isAuthenticated ? (
          <>
            <Link to="/admin">Admin</Link>
            <button onClick={logout} className="logout-btn">Log Out</button>
          </>
        ) : (
          <Link to="/login">Log In</Link>
        )}
      </div>
    </nav>
  );
}
