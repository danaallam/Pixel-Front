import React, { useContext, useEffect } from "react";
import { GetShipmentContext } from "./mutations/GetShipmentContext";
import { useHistory } from "react-router-dom";
import { DeleteShipmentContext } from "./mutations/DeleteShipmentContext";

const Shipments = () => {
  const history = useHistory();

  const {
    state: { data, loading, called, ref },
    actions: { getShipments, setRef },
  } = useContext(GetShipmentContext);

  const {
    actions: { deleteShipment },
  } = useContext(DeleteShipmentContext);

  useEffect(() => {
    getShipments();
    console.log(data);
  }, [called, ref]);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <div className="shipment shipmentTitle">
        <p className="title">Waybill</p>
      </div>
      {data &&
        data.user.shipments.map((shipment, key) => (
          <div key={key} className="shipment">
            <p>{key + 1}</p>
            <p>{shipment.waybill}</p>
            <div className="btns">
              <button
                onClick={() =>
                  history.push({
                    pathname: `/update/${shipment.id}`,
                    state: { id: shipment.id, waybill: shipment.waybill },
                  })
                }
              >
                update
              </button>
              <button
                onClick={() => {
                  deleteShipment({
                    variables: {
                      id: shipment.id,
                    },
                  });
                  setRef((prev) => prev + 1);
                }}
              >
                delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shipments;
