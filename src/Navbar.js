import { Link } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";

const LOGOUT = gql`
  mutation {
    logout {
      message
    }
  }
`;

const Navbar = () => {
  const [logout ] = useMutation(LOGOUT);

  const logOff = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("user", "");
    logout();
  };

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
        <Link to="/login" onClick={logOff}>
          logout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
