import axios from "axios";
import * as React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

var GET_URL = "https://test-db.samuelnittala.repl.co/users";

export default function Signin() {
  const [name, setName] = React.useState<String>("");
  const [password, setPassword] = React.useState<String>("");

  let navigate: NavigateFunction = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const resData = await axios.get(GET_URL, {
      params: {
        name: name
      }
    });
    try {
      let name = resData["data"][0]["name"];
      let givenPassword = resData["data"][0]["password"];
      if (password === givenPassword) {
        navigate("/success");
      }
    } catch (err) {
      navigate("/error");
    }
  };

  return (
    <div className="container">
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <label> Name: </label>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <br />
        <label> Password: </label>
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
