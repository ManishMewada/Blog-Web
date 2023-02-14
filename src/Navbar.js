import {Link} from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Blobstation Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
                {/* <Link to="/blogs/:id/edit">Edit Blog</Link> */}
            </div>
        </nav>
    );
}
 
export default Navbar;