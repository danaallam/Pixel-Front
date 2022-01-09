import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";

const CREATE_SHIPMENT = gql`
  mutation ($user_id: ID!, $waybill: Int!) {
    createShipment(user_id: $user_id, waybill: $waybill) {
      id
    }
  }
`;

const Create = () => {
  const [waybill, setWaybill] = useState("");
  const history = useHistory();
  const [createShipment] = useMutation(CREATE_SHIPMENT, {
    context: {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createShipment({
      variables: {
        user_id: Number(localStorage.getItem("user")),
        waybill: Number(waybill),
      },
    });
    setWaybill("");
    history.push("/");
  };

  return (
    <div className="create">
      <h2>Add a New Shipment</h2>
      <form onSubmit={handleSubmit}>
        <label>Waybill</label>
        <input
          type="text"
          required
          value={waybill}
          onChange={(e) => setWaybill(e.target.value)}
        />
        <button>send request</button>
      </form>
    </div>
  );
};

export default Create;
