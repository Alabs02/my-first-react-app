import { Link } from "react-router-dom";

const BlogList = ({blogs, handleDelete}) => {


    let trimData = (data, end) => {
        if (!data) {
            console.log(data)
        } else {
            return `${data.slice(0, parseInt(end))}...`
        }
    }

    return ( 
        <div className="BlogList">
            {blogs.map((blog) => (
                <div className="card" key={ blog.id }>
                    <Link to={`/blog/${blog.id}`} className="card__title">{ trimData(blog.title, 20) }</Link>
                    <div className="card__content">{ trimData(blog.content, 28) }</div>
                    <div className="card__info">Writen by: { blog.author }</div>
                    <button onClick={() => handleDelete(blog.id)} className="icon-btn"><i className="material-icons">highlight_off</i></button>
                </div>
           ))}
        </div>
    );
}
 
export default BlogList;