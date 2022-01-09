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

  const [getShipments, { error, data, loading, called }] = useLazyQuery(
    GET_SHIPMENTS,
    {
      variables: {
        id: 1,
      },
    }
  );

  const context = {
    state: { data, loading, error, called, ref },
    actions: {
      getShipments,
      setId,
      setRef,
    },
  };

  return (
    <GetShipmentContext.Provider value={context}>
      {props.children}
    </GetShipmentContext.Provider>
  );
};

export default GetShipmentContextProvider;
