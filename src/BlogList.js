import { Link } from 'react-router-dom';

const BlogList = ({ blogs, title }) => {
    // console.log(blogs);

    return (
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map((data) => (
                <div className="blog-preview" key={data?.id}>
                    {/* {blog?.id}
                    {blog?.author}
                    {blog?.title} */}
                    <Link to={`blogs/${data?.id}`}>
                        <h2>{data?.title}</h2>
                        <p>Written By {data?.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogList;