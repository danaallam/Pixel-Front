import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useHistory } from "react-router-dom";

const REGITER = gql`
  mutation (
    $name: String!
    $email: String!
    $address: String!
    $phone: String!
    $password: String!
  ) {
    register(
      input: {
        name: $name
        email: $email
        address: $address
        phone: $phone
        password: $password
      }
    ) {
      status
    }
  }
`;

const Register = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [register] = useMutation(REGITER);

  const signUp = (e) => {
    e.preventDefault();
    register({ variables: { email, password, name, address, phone } });
    setTimeout(() => {
      history.push("/login");
    }, 1500);
  };

  return (
    <div className="create">
      <h2>Register</h2>
      <form onSubmit={signUp}>
        <label>Name</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <label>Address</label>
        <input
          type="text"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <label>Phone</label>
        <input
          type="text"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">register</button>
      </form>
    </div>
  );
};

export default Register;
