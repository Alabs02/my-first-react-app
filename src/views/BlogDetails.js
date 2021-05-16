import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from '../hooks/useFetch'

const BlogDetails = () => {

    const { id } = useParams()
    const {data: blog, isPending, error } = useFetch(`http://127.0.0.1:8000/blogs/${id}`)


    return ( 
        <div className="BlogDetails">
            {isPending && <div className="loader">Loading...</div>}

            {error && <div className="alert">
                <span>{error}</span>
            </div>}

            {blog && <h2 className="BlogDetails__title"> {blog.title }</h2>}
            {blog && <p className="BlogDetails__info">Writen by { blog.author }</p>}
            {blog && <p className="BlogDetails__content">{ blog.content }</p>}
            {blog && <button onClick className="btn">{ `Delete` }</button>}
        </div>
     );
}
 
export default BlogDetails;