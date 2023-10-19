import React from "react";

import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const RegisterScreen = () => {
  const {
    email,
    password,
    name,
    profilePic,
    setEmail,
    setPassword,
    setName,
    setProfilePic,
    register,
  } = useAuth();

  return (
    <div>
      <div className="login">
        <form>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name (required for registering)"
            type="text"
          />

          <input
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
            placeholder="Profile picture URL (optional)"
            type="text"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
          />
          <button type="submit" onClick={register}>
            Sign In
          </button>
        </form>

        <p>
          <Link to="/login">Iniciar sesion</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterScreen;
