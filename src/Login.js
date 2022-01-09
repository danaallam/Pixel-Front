import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const LOGIN = gql`
  mutation ($username: String!, $password: String!) {
    login(input: { username: $username, password: $password }) {
      access_token
    }
  }
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, { data, loading, error }] = useMutation(LOGIN);
  if (loading) {
    console.log(data);
  }

  const signIn = (e) => {
    e.preventDefault();
    console.log(email);
    login({ input: { email, password } });
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
        <button>login</button>
      </form>
    </div>
  );
};

export default Login;
