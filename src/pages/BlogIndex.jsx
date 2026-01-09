import { Link } from 'react-router-dom';
import { posts } from '../lib/posts';

export default function BlogIndex() {
  return (
    <div className="page">
      <h1>Blog</h1>
      <ul className="post-list">
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
