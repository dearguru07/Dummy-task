// pages/blog.js
import React from "react";

const Blog = ({ posts }) => {
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

// This function runs on the server at request time
export async function getServerSideProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();

    return { props: { posts } };
}

export default Blog;
