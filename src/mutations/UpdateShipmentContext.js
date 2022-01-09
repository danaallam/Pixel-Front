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
        Headers: {
          authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiMTA2ZjZmZGFiOGRmYmRhZmMwYTUxM2M5NzRhM2RiZjkzMWNkMWM1OGZhNDM0MWQyMjcxMmM3NzFhOWQ4YzE0YTZlYmU5ZTAxMGZkYTY3MWEiLCJpYXQiOjE2NDE2MDgzNzcuMzgzNzYzLCJuYmYiOjE2NDE2MDgzNzcuMzgzNzY2LCJleHAiOjE2NzMxNDQzNzcuMzcwMTU1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.LO3alZLInyCiD-MD7nsKwcTM9kmIG_Z-WloBmmhGMTePMKpe2CfQGkcIOUAGqaN0QFD0AqFgNmH7mAd_rztyOoJ4gncQXc_jkilICjzX4exOIk-oFJU2SvNMfdwXREBAvngxVLNL0sobOa82bw94zIdnrUcKYxhzh9SDCpFUgYUCG-7Je30ePzsVYCnjdYInUNkA_bvPpPI9IcmLBHiy3TX75JNwB7Xr4Z5elIJojW7KePNKck_lc_MaXLpv9qvQ0K4CYsTQ77jAeV9yA0kOjyPWj7bn0GGt4jIacQ5P3l-bx3gySXOyCj2npH1i3m-tjDSUQE75tGfpASi9SjvmhaaQ-hOlXVE6C7ZLnKr49r-JXtbaNSiVnAfOZRH6QK1OXDutCm_Z8SmN1bjQuyGCuy4L-BK6jAMTzQstltrobuyq9afglOoWE8jWaXBg_QUeFBtucbVN3tLl0aSMBvtZrrOINzZp1LpqKTIYtfvg37EQaQLjmkTNTKbG5hFy-1OvpZCQKbvEhxncInwjmKtWdVWavjjjUU_P2HYDZBovatPscV1TJOhESaajRJKbW5BMeCSs_O-axoaFzIvoJ0tqlhslOkDeleLosRiGfGiXGQXIWv_749yUcsgpU2QZGRKDQSmcN55eBUPOm8RO8eWzU9FCH_EAVnQefcXS2OPDJck`,
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
