import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Faster</h1>
      <div className="links">
        <Link to="/">My shipments</Link>
        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          Create Shipment
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
