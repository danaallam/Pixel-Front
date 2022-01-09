import { Link } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";
import { useContext, useEffect } from "react";
import { GetShipmentContext } from "./mutations/GetShipmentContext";

const LOGOUT = gql`
  mutation {
    logout {
      message
    }
  }
`;

const Navbar = () => {
  const [logout] = useMutation(LOGOUT, {
    context: {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  });

  const {
    state: { show },
    actions: { setShow },
  } = useContext(GetShipmentContext);

  const logOff = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("user", "");
    logout();
    setShow(1);
  };

  useEffect(() => {}, [show]);

  if (show == 1 || (show == 0 && localStorage.getItem("token") == "")) {
    return <></>;
  }

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
