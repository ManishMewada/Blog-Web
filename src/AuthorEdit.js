import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const AuthorEdit = () => {
    const { id } = useParams();
    const { data } = useFetch('http://localhost:5000/authors/' + id)
    const [authorData, setAuthorData] = useState(data);
    const history = useHistory();
    // console.log(authorData);
    useEffect(() => {
        setAuthorData(data)
    }, [data]);

    const handleUpdate = (e) => {
        e.preventDefault();
        const authorName = e.target.authorName.value;
        const authorEmail = e.target.authorEmail.value;
        const data = { authorName, authorEmail }

        fetch('http://localhost:5000/authors/' + id, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then((res) => {return res.json()})
            .then(data => {
                setAuthorData(data);
                history.push('/authors')
            }).catch(err => {
                console.log(err);
            })
    }
    return (<div className="author-edit">
        <h2>Edit Author Details</h2>
        {data && <form onSubmit={handleUpdate} defaultValue={authorData}>
            <label>Author Name: </label>
            <input type="text" name="authorName" defaultValue={data.authorName} required />
            <label>Author Email: </label>
            <input type="email" name="authorEmail" defaultValue={data.authorEmail} required />
            <button type="submit">Update Author</button>
        </form>}
    </div>);
}

export default AuthorEdit;