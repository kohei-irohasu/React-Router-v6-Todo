// import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

export async function loader() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    return { posts};
}

function PostIndex() {
    // const [posts, setPosts] = useState([]);
    const { posts } = useLoaderData();


    // useEffect(() => {
    //     const fetchPosts = async() => {
    //         const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    //         const data = await res.json();
    //         setPosts(data);
    //     }
    //     fetchPosts();
    // }, []);

    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>
                    <Link to={`${post.id}`}>
                        {post.id}:{post.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default PostIndex;