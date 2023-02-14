// import { useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data, isLoading, error } = useFetch('http://localhost:8000/blogs');
    console.log(data);
    // useEffect(() => {
    //     console.log('data updated');
    // }, [blogs]);
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading ? <div>{"Loading..."}</div> : <BlogList blogs={data} title={"All Blogs!"} />}
            
        </div>
    );
}

export default Home;