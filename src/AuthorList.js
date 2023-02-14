import { Link } from "react-router-dom";

const AuthorList = ({ authors, title }) => {
    return (<div className="author-list">
        <h1>{title}</h1>
        {authors.map((data) => (
            <div className="author-preview" key={data?.id}>
                <Link to={`authors/${data?.id}`}>
                <h2>Author Name : {data?.authorName}</h2>
                {/* <p>Author Email : {data?.authorEmail}</p> */}
                </Link>
            </div>
        ))}
    </div>);
}

export default AuthorList;