import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import "./Login.css";

// Validation schema
const schema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(5, "Password must be at least 5 characters")
    .required("Password is required"),
  userType: Yup.string().required("User type is required"),
});

const Login = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      // Debug logs (optional)
      console.log("Form Data Sent:", data);

      const response = await axios.post("http://localhost:4000/api/auth/login", data);

      const { success, role } = response.data;

      // Clear previous errors
      setErrorMessage("");

      // Clear old localStorage
      localStorage.clear();

      // Role-based routing
      if (success && role === "admin") {
        localStorage.setItem("isAdmin", "true");
        navigate("/admin");
      } else if (success && role === "doctor") {
        localStorage.setItem("isDoctor", "true");
        navigate("/doctor");
      } else if (success && role === "patient") {
        localStorage.setItem("isPatient", "true");
        navigate("/patient");
      } else {
        throw new Error("Invalid credentials or user type");
      }
    } catch (error) {
      // Fallback: Show meaningful error
      console.error("Login Error:", error);
      setErrorMessage(error.response?.data?.message || "Invalid login attempt.");
      localStorage.clear();
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>

        <form onSubmit={handleSubmit(onSubmit)}>

          {/* User Type */}
          <div className="input-group">
            <label>User Type</label>
            <Controller
              name="userType"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <select {...field}>
                  <option value="">Select User Type</option>
                  <option value="patient">Patient</option>
                  <option value="doctor">Doctor</option>
                  <option value="admin">Admin</option>
                </select>
              )}
            />
            {errors.userType && <p className="error">{errors.userType.message}</p>}
          </div>

          {/* Email */}
          <div className="input-group">
            <label>Email Address</label>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input type="email" placeholder="example@domain.com" {...field} />
              )}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div className="input-group">
            <label>Password</label>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input type="password" placeholder="Enter password" {...field} />
              )}
            />
            {errors.password && <p className="error">{errors.password.message}</p>}
          </div>

          {/* Error Message */}
          {errorMessage && <p className="error">{errorMessage}</p>}

          {/* Submit Button */}
          <button type="submit" className="login-btn">Login</button>

          {/* Redirect to Signup */}
          <p className="signup-redirect">
            Don't have an account? <Link to="/signup">Sign up here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
