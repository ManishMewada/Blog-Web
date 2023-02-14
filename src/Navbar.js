import {Link} from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Blobstation Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to='/authors'>Author</Link>
                <Link to="/create">New Blog</Link>
                <Link to='/authorcreate'>Add Author</Link>
                {/* <Link to="/blogs/:id/edit">Edit Blog</Link> */}
            </div>
        </nav>
    );
}
 
export default Navbar;