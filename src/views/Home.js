import { useEffect, useState } from "react";
import BlogList from "../components/BlogList";
import useFetch from "../hooks/useFetch";

const Home = () => {

    const { data: blogs, isPending, error } = useFetch('http://127.0.0.1:8000/blogs')

    const handleDelete = (id) => {
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: "DELETE"
        }).then(response => console.log('Deleted', response))
        .catch(error => console.error(error.message))
    }

    return ( 
        <div className="Home">
            {error && <div className="alert">
                <span>{error}</span>
            </div>}
            {isPending && <div className="loader">Loading...</div>}
            {blogs && <h2 className="Home__heading">Blog Post</h2>}
            {blogs && <BlogList blogs={ blogs } handleDelete={handleDelete} /> }
        </div>
    );
}

export default Home;