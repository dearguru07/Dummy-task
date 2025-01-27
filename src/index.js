import Data from './data';
import React, { useEffect, useState } from "react";
import ReactDOM from "react"

const Blog = ({ initialPosts }) => {
    const [dynamicPosts, setDynamicPosts] = useState([]);

    useEffect(() => {
        // Fetch additional data on the client side
        fetch("https://jsonplaceholder.typicode.com/posts?_start=5&_limit=5")
            .then((response) => response.json())
            .then((data) => setDynamicPosts(data));
    }, []);

    return (
        <div>
            <h1>Blog Posts</h1>
            <h2>Server-Side Rendered Posts:</h2>
            <ul>
                {initialPosts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
            <h2>Client-Side Rendered Posts:</h2>
            <ul>
                {dynamicPosts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export async function getServerSideProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    const initialPosts = await res.json();

    return { props: { initialPosts } };
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Data />);

