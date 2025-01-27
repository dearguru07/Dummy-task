import React, { useEffect, useState } from "react";

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Fetch data on the client side
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => setPosts(data));
    }, []);

    return (
        <div>
            <h1>Blog Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Blog;
