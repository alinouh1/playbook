import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import logoDark from "../assets/logo-dark.png";
import "./Login.css";

const CORRECT_PASSWORD = "growth1234@";

export default function Login({ onLogin }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [shaking, setShaking] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 500));
    setLoading(false);

    if (password === CORRECT_PASSWORD) {
      setError("");
      onLogin();
    } else {
      setError("Incorrect password. Please try again.");
      setShaking(true);
      setTimeout(() => setShaking(false), 600);
      setPassword("");
    }
  };

  return (
    <div className="login-root">
      {/* Grid overlay */}
      <div className="login-grid" />

      {/* Ambient blobs */}
      <div className="login-blob login-blob-1" />
      <div className="login-blob login-blob-2" />

      <div className={`login-card ${shaking ? "shake" : ""}`}>


        {/* Logo */}
        <div className="login-logo-wrap">
          <img src={logoDark} alt="Growth Station" className="login-logo" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="login-form">
          <label className="login-label">Password</label>

          <div className="login-input-wrap">
            <input
              type={showPass ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="login-input"
              autoComplete="current-password"
              autoFocus
            />
            <button
              type="button"
              className="login-eye"
              onClick={() => setShowPass((v) => !v)}
              tabIndex={-1}
            >
              {showPass ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
          </div>

          {error && <p className="login-error">⚠ {error}</p>}

          <button type="submit" className="login-btn" disabled={loading || !password}>
            {loading ? <span className="login-spinner" /> : "Access Playbook →"}
          </button>
        </form>

      </div>
    </div>
  );
}
