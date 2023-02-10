import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>404 Not Found</h1>
            <p><strong>Sorry! This page cannot be found...</strong></p>
            <Link to='/'>Go to home page</Link>
        </div>
     );
}
 
export default NotFound;
