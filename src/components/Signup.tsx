import axios from "axios";
import * as React from "react";

import { NavigateFunction, useNavigate } from "react-router-dom";

const POST_URL = "https://test-db.samuelnittala.repl.co/users";

export default function Signup() {
  const [name, setName] = React.useState<String>("");
  const [password, setPassword] = React.useState<String>("");
  const [email, setEmail] = React.useState<String>("");

  const navigate: NavigateFunction = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user_data = { email: email, name: name, password: password };
    axios
      .post(POST_URL, user_data)
      .then((res) => navigate("/signup-success"))
      .catch((err) => navigate("/error"));
  };

  return (
    <div className="container">
      <br />
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br /> <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          <br />
          <br />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
