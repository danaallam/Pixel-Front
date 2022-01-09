import React, { useContext, useEffect, useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { GetShipmentContext } from "./mutations/GetShipmentContext";

const LOGIN = gql`
  mutation ($username: String!, $password: String!) {
    login(input: { username: $username, password: $password }) {
      access_token
      user {
        id
      }
    }
  }
`;

const Login = () => {
  const {
    actions: { setShow },
  } = useContext(GetShipmentContext);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, { data, loading, error }] = useMutation(LOGIN);

  useEffect(() => {
    console.log(loading);
    console.log(data);
    if (data) {
      localStorage.setItem("token", data.login.access_token);
      localStorage.setItem("user", data.login.user.id);
      history.push("/");
      setShow(0);
    }
  }, [loading]);

  const signIn = (e) => {
    e.preventDefault();
    login({ variables: { username: email, password } });
  };

  return (
    <div className="create">
      <h2>Login</h2>
      <form onSubmit={signIn}>
        <label>Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">login</button>
      </form>
      <div className="reg">
        <p>
          Don't have an account?{" "}
          <span onClick={() => history.push("/register")}>Register</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
