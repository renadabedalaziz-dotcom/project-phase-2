import {Link} from "react-router-dom";
function Navbar(){
return(
    
    <nav style={{ padding: "20px", background: "#808080", color:"#fff",fontSize:"20px"}} className="navbar navbar-expand-lg navbar-dark sticky-top">
    <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span></button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <div className="navbar-nav">
            <Link to="/" style={{ marginRight: "20px", color: "#fff",textDecoration:"none",fontFamily:"Times New Roman"}}>
            Home</Link>
            <Link to="/contact"  style={{ marginRight: "20px", color: "#fff",textDecoration:"none",fontFamily:"Times New Roman"}}>
            Contact</Link>
            <Link to="/about"  style={{ marginRight: "20px", color: "#fff",textDecoration:"none",fontFamily:"Times New Roman"}}>
            About</Link>
            <Link to="/cart"  style={{ marginRight: "20px", color: "#fff",textDecoration:"none",fontFamily:"Times New Roman"}}>
            Cart🛒</Link>
        </div>       
    </div>
    </div>
    </nav>
    



);
}
export default Navbar;
