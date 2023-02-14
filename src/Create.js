import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { title, body }
        setIsLoading(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(() => {
            console.log('new blog added')
            setIsLoading(false);
            history.push('/')
        })
    }
    return (
        <div className="create">
            <h2>Add New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title : </label>
                <input type="text" required value={title} onChange={(e) => { setTitle(e.target.value) }} />
                <label>Blog body : </label>
                <textarea required value={body} onChange={(e) => { setBody(e.target.value) }}></textarea>
                <label>Blog author : </label>
                <select value={authorName} onChange={(e) => { setAuthorName(e.target.value) }}>
                    <option value="Mario">Mario</option>
                    <option value="Harry">Harry</option>
                    <option value="Yoshi">Yoshi</option>
                </select>
                {!isLoading && <button>Add Blog</button>}
                {isLoading && <button>Adding Blog......</button>}
            </form>
        </div>
    );
}

export default Create;