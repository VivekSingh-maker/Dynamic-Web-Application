import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Posts() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => setPosts(data))
        .catch((error) => console.error('Error fetching posts:', error));
    }
  }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem('isAuthenticated');
//     navigate('/');
//   };

  return (
    <div className="posts-container">
      {/* <button onClick={handleLogout} className="logout-button">Logout</button> */}
      <h1>All Posts</h1>
      <div className="posts-grid">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <h2>{post.title}</h2>
            <p>{post.body.substring(0, 100)}...</p>
            <a href={`/posts/${post.id}`}>Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
