import { useParams, useHistory, Link } from "react-router-dom";
import useFetch from "./useFetch";

const AuthorDetails = () => {

    const { id } = useParams();
    const { data, isLoading, error } = useFetch('http://localhost:5000/authors/' + id);
    const history = useHistory();
    const handleDelete = () => {
        fetch('http://localhost:5000/authors/' + id, {
            method: "DELETE"
        }).then(() => {
            history.push('/authors')
        })
    }

    return (<div className="author-details">
        {isLoading && <div>{"Loading..."}</div>}
            {error && <div>{error}</div>}
            {data && <Link to={`/authorEdit/${data.id}`}><article>
                <h2>Author Name : {data.authorName}</h2>
                <p>Author Email : {data.authorEmail}</p>
                <button onClick={handleDelete}>Delete Author</button>
            </article>
            </Link>}
    </div >);
}

export default AuthorDetails;