import React, { createContext, useState } from "react";
import { useMutation, gql } from "@apollo/client";

export const UpdateShipmentContext = createContext();

const UPDATE_SHIPMENT = gql`
  mutation ($id: ID!, $user_id: ID!, $waybill: Int!) {
    updateShipment(id: $id, user_id: $user_id, waybill: $waybill) {
      id
    }
  }
`;

const UpdateShipmentContextProvider = (props) => {
  const [id, setId] = useState("");
  const [userId, setUserId] = useState("");
  const [waybill, setWaybill] = useState("");

  const [updateShipment, { data, loading, error }] = useMutation(
    UPDATE_SHIPMENT,
    {
      context: {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      },
    }
  );

  const context = {
    state: { data, loading, error, waybill },
    actions: {
      updateShipment,
      setUserId,
      setWaybill,
      setId,
    },
  };

  return (
    <UpdateShipmentContext.Provider value={context}>
      {props.children}
    </UpdateShipmentContext.Provider>
  );
};

export default UpdateShipmentContextProvider;
