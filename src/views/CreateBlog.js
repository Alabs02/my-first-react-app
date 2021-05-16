import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const CreateBlog = () => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [content, setContent] = useState('')
    const [isPending, setIsPending] = useState(false)
    const histroy = new useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        
        let blog = { title, content, author }

        setIsPending(true)

        fetch('http://localhost:8000/blogs', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(blog),
        })
        .then(response => {
            if (!response.ok) throw Error('An error occured')
            return response.json()
        })
        .then(response => {
            console.log(response)
            console.log('new blog added')
            setIsPending(false)
            histroy.push('/')
        })
        .catch(error => {
            console.error(error.message)
            setIsPending(false)
        })
    }

    return ( 
        <div className="CreateBlog">
            <h2>Add a new blog</h2>

            <form onSubmit={handleSubmit} className="form">
                <div className="form__group">
                    <label htmlFor="title" className="form__label">Title</label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} id="title" type="text" className="form__input" required />
                </div>

                <div className="form__group">
                    <label htmlFor="author" className="form__label">Author</label>
                    <input value={author} onChange={(e) => setAuthor(e.target.value)} id="author" type="text" className="form__input" required />
                </div>

                <div className="form__group">
                    <label htmlFor="content" className="form__label">Content</label>
                    <textarea value={content} onChange={(e) => setContent(e.target.value)} id="content" type="text" rows="5" cols="50" className="form__input" required />
                </div>
                {!isPending && <button type="submit" className="btn">create blog</button>}
                {isPending && <button className="btn">loding</button>}
            </form>
        </div>
     );
}
 
export default CreateBlog;