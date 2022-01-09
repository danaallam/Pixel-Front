import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const LOGIN = gql`
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
        email: email
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
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
      <h2>Register</h2>
      <form onSubmit={signIn}>
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
        <button>login</button>
      </form>
    </div>
  );
};

export default Register;
