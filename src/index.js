import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import GetShipmentContextProvider from "./mutations/GetShipmentContext";
import UpdateShipmentContextProvider from "./mutations/UpdateShipmentContext";
import DeleteShipmentContextProvider from "./mutations/DeleteShipmentContext";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <DeleteShipmentContextProvider>
        <GetShipmentContextProvider>
          <UpdateShipmentContextProvider>
            <App />
          </UpdateShipmentContextProvider>
        </GetShipmentContextProvider>
      </DeleteShipmentContextProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
