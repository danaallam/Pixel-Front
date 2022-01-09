import React from "react";
import GetShipment from "./Queries/GetShipment";

const Shipment = () => {
  const { data, loading } = GetShipment(1);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <p>{data.shipment.waybill}</p>
    </div>
  );
};

export default Shipment;
