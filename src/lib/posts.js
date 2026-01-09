export const posts = [
  {
    id: 1,
    slug: 'my-first-post',
    title: 'My First Post',
    content: 'This is the content of my first blog post. It covers the basics of getting started.'
  },
  {
    id: 2,
    slug: 'learning-react',
    title: 'Learning React',
    content: 'React is a JavaScript library for building user interfaces with reusable components.'
  },
  {
    id: 3,
    slug: 'understanding-routing',
    title: 'Understanding Routing',
    content: 'Dynamic routing allows us to create single-page applications with multiple views based on the URL.'
  },
  {
    id: 4,
    slug: 'context-api-tutorial',
    title: 'Context API Tutorial',
    content: 'The Context API is a powerful way to manage state globally without prop drilling.'
  }
];

export function getPostBySlug(slug) {
  return posts.find(post => post.slug === slug);
}
