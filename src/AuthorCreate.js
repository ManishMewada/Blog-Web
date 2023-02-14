import { useState } from "react";
import { useHistory } from "react-router-dom";

const AuthorCreate = () => {
    const [authorName, setAuthorName] = useState('');
    const [authorEmail, setAuthorEmail] = useState('');
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { authorName, authorEmail }

        fetch('http://localhost:5000/authors', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(() => {
            console.log('new author added')
            history.push('/authors');
        })
    }
    return (<div className="author-create">
        <h2>Add New Author</h2>
        <form onSubmit={handleSubmit}>
            <label>Author Name: </label>
            <input type="text" name="authorName" value={authorName} onChange={(e) => { setAuthorName(e.target.value) }} required/>
            <label>Author Email: </label>
            <input type="email" name="authorEmail" value={authorEmail} onChange={(e) => { setAuthorEmail(e.target.value) }} required/>
            <button type="submit">Add Author</button>
        </form>

    </div>);
}

export default AuthorCreate;