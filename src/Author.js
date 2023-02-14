import useFetch from "./useFetch"
import AuthorList from "./AuthorList";

const Author = () => {
    const {data , isLoading, error} = useFetch('http://localhost:5000/authors');
    console.log(data);

    return (
        <div className="author">
            {error && <div>{error}</div>}
            {isLoading ? <div>{"Loading..."}</div> : <AuthorList authors={data} title={"All Authors!"} />}
        </div>
    );
}

export default Author;