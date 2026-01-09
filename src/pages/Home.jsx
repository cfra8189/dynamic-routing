import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="page">
      <h1>Welcome to the Blog</h1>
      <p>Check out our latest posts:</p>
      <Link to="/blog">View Blog</Link>
    </div>
  );
}
