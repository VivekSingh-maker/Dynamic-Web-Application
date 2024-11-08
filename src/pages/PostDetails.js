import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PostDetails() {
  const { postID } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.error('Error fetching post:', error));
  }, [postID]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="post-details-container">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <a href="/posts">Back to Posts</a>
    </div>
  );
}

export default PostDetails;
