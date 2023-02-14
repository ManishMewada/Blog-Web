import useFetch from "./useFetch";
import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

const Edit = () => {
    const { id } = useParams();
    const { data } = useFetch('http://localhost:8000/blogs/' + id);
    const [blogData, setBlogData] = useState(data);
    const history = useHistory();
    console.log(blogData);

    useEffect(() => {
        setBlogData(data);
    }, [data])

    const handleUpdate = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const body = e.target.body.value;
        const author = e.target.author.value;

        const data = { title, body, author };
        console.log(data);
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        }).then((res) => res.json())
            .then(data => {
                setBlogData(data);
                history.push('/')
            })
            .catch(err => {
                console.log(err)
            }
            )
    }
    return (
        <div className="edit">
            <h2>Edit Blog</h2>
            {data && <form onSubmit={handleUpdate} defaultValue={data}>
                <label>Blog title : </label>
                <input type="text" name="title" defaultValue={data.title} required />
                <label>Blog body : </label>
                <textarea name="body" defaultValue={data.body} required ></textarea>
                <label>Blog author : </label>
                <select name="author" defaultValue={data.author}>
                    <option value="Mario">Mario</option>
                    <option value="Harry">Harry</option>
                    <option value="Yoshi">Yoshi</option>
                </select>
                <button type="submit">Update Blog</button>
            </form>}
        </div>
    );
}

export default Edit;
