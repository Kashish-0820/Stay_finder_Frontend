import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      alert("Please fill all fields");
      return;
    }
    if (password.length < 6) {
      alert("Password should be minimum 6 characters");
      return;
    }
    try {
      const res = await axios.post("http://localhost:8080/api/auth/register", {
        username,
        email,
        password,
      });
      alert("Registered Successfully");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      alert("Registration failed");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password (min 6 char)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
