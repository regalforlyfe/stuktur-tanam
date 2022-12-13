import React, { useState } from "react";
import UserRepository from "../../../repositories/UserRepository";
import EncryptDecrypt from "../../../services/encrypt-decrypt";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    let item = { email, password };
    const result = await UserRepository.getAuth(item);
    localStorage.setItem("user-info", EncryptDecrypt.enc(result.token));
    return (window.location = "/");
  };
  return (
    <div className="container bg-white p-12 rounded-3xl">
      <div className="text-4xl py-3">Login</div>
      <form>
        <input
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          className="mt-4 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          className="mt-4 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
        />
        <button
          onClick={handleLogin}
          className="text-stone-50 rounded w-40 py-1 mt-4 button"
          style={{ background: "#000" }}
        >
          {" "}
          Login{" "}
        </button>
      </form>
    </div>
  );
};

export default Login;
