// import { useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');
    return (
        <div className="home">
            { error && <div>{ error }</div> } 
            {(isLoading) ? <div>{"Loading..."}</div> : <BlogList blogs={blogs} title={"All Blogs!"} />}
            {/* {blogs && } */}
        </div>
    );
}

export default Home;