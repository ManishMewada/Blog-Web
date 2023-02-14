import { useParams, useHistory, Link } from 'react-router-dom';
import useFetch from './useFetch';


const BlogDetail = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="blog-details" key={id}>
            {isLoading && <div>{"Loading..."}</div>}
            {error && <div>{error}</div>}
            {data && <Link to={`/edit/${data.id}`}>
                <article>
                    <h2>{data.title}</h2>
                    <p><strong>Written By {data.author}</strong></p>
                    <div>{data.body}</div>
                    <button onClick={handleDelete}>Delete Blog</button>
                </article>
            </Link>}
        </div >
    );
}

export default BlogDetail;