import React, { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { UpdateShipmentContext } from "./mutations/UpdateShipmentContext";

const Update = () => {
  const location = useLocation();
  const history = useHistory();

  const {
    state: { data, loading, called, waybill },
    actions: { updateShipment, setUserId, setWaybill, setId },
  } = useContext(UpdateShipmentContext);

  const update = (e) => {
    e.preventDefault();
    updateShipment({
      variables: {
        id: location.state.id,
        user_id: Number(localStorage.getItem("user")),
        waybill: Number(waybill),
      },
    });
    setWaybill("");
    history.push("/");
  };

  return (
    <div className="create">
      <h2>Update Shipment</h2>
      <p>{location.state.waybill}</p>
      <form>
        <label>Waybill</label>
        <input
          type="text"
          required
          value={waybill}
          onChange={(e) => setWaybill(e.target.value)}
        />
        <button onClick={update}>update</button>
      </form>
    </div>
  );
};

export default Update;
