import React, { createContext, useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";

export const GetShipmentContext = createContext();

const GET_SHIPMENTS = gql`
  query ($id: ID!) {
    user(id: $id) {
      shipments {
        id
        waybill
      }
    }
  }
`;

const GetShipmentContextProvider = (props) => {
  const [id, setId] = useState("");
  const [ref, setRef] = useState(0);
  const [show, setShow] = useState(0);

  const [getShipments, { error, data, loading, called }] = useLazyQuery(
    GET_SHIPMENTS,
    {
      variables: {
        id: Number(localStorage.getItem("user")),
      },
      context: {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      },
    }
  );

  const context = {
    state: { data, loading, error, called, ref, show },
    actions: {
      getShipments,
      setId,
      setRef,
      setShow,
    },
  };

  return (
    <GetShipmentContext.Provider value={context}>
      {props.children}
    </GetShipmentContext.Provider>
  );
};

export default GetShipmentContextProvider;
