import React, { createContext, useState } from "react";
import { useMutation, gql } from "@apollo/client";

export const DeleteShipmentContext = createContext();

const UPDATE_SHIPMENT = gql`
  mutation ($id: ID!) {
    deleteShipment(id: $id) {
      id
    }
  }
`;

const DeleteShipmentContextProvider = (props) => {
  const [deleteShipment, { data, loading, error }] = useMutation(
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
    state: { data, loading, error },
    actions: { deleteShipment },
  };

  return (
    <DeleteShipmentContext.Provider value={context}>
      {props.children}
    </DeleteShipmentContext.Provider>
  );
};

export default DeleteShipmentContextProvider;
