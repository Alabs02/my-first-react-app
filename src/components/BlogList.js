const BlogList = ({blogs, handleDelete}) => {

    return ( 
        <div className="BlogList">
            {blogs.map((blog) => (
               <div className="card" key={ blog.id }>
                   <div className="card__title">{ blog.title }</div>
                   <div className="card__content">{ blog.content }</div>
                   <div className="card__info">Writen by: { blog.author }</div>
                   <button onClick={() => handleDelete(blog.id)} className="icon-btn"><i className="material-icons">highlight_off</i></button>
               </div>
           ))}
        </div>
    );
}
 
export default BlogList;