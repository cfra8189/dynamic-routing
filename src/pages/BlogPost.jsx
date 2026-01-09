import { useParams, Link } from 'react-router-dom';
import { getPostBySlug } from '../lib/posts';

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="page">
        <h1>Post not found</h1>
        <p>The post you're looking for doesn't exist.</p>
        <Link to="/blog">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="page">
      <Link to="/blog">← Back to Blog</Link>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
