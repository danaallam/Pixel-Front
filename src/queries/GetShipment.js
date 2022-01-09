import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_SHIPMENT = gql`
  query ($id: ID!) {
    shipment(id: $id) {
      waybill
    }
  }
`;

const GetShipment = (id) => {
  const { error, data, loading } = useQuery(GET_SHIPMENT, {
    variables: {
      id,
    },
    context: {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  });

  return {
    data,
    error,
    loading,
  };
};

export default GetShipment;
