import { useState, useEffect } from "react";
import BlogList from "../components/BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'This is a blog', content: 'Lorem...', author: 'Alabs', 'id': 1 },
        { title: 'Welcome Party', content: 'Lorem...', author: 'Usman', 'id': 2 },
        { title: 'Web top list', content: 'Lorem...', author: 'Snow', 'id': 3 },
        { title: 'Web top list', content: 'Lorem...', author: 'Snow', 'id': 4 },
    ])

    const handleDelete = (id) => {
        const filteredBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(filteredBlogs)
    } 

    useEffect(() => {
        console.log('before mount')
    }, [])

    return ( 
        <div className="Home">
            <h2 className="Home__heading">Blog Post</h2>
            <BlogList blogs={ blogs } handleDelete={handleDelete} />
        </div>
    );
}

export default Home;