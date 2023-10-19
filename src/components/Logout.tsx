import { Link } from "react-router-dom";

const Logout = () => {
    return (
        <Link to="/" className="nav-link" style={{"color":"white"}}>
        <button className="upload-button logout-button">Log Out</button>
        </Link>
    );
}

export default Logout;