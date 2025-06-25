import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import "./Login.css";

// Yup validation schema
const schema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(5, "Password must be at least 5 characters").required("Password is required"),
  userType: Yup.string().required("User type is required"),
});
const Login = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMassage] = useState();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const { email, password, userType } = data;
    // Mock credentials for demonstration
    if (userType === "admin" && email === "admin@example.com" && password === "12345") {
      setErrorMassage("");
      localStorage.setItem("isAdmin", "true");
      localStorage.removeItem("isPatient");
      localStorage.removeItem("isDoctor");
      navigate("/admin");
    } else if (userType === "patient" && email === "patient@example.com" && password === "12345") {
      setErrorMassage("");
      localStorage.setItem("isPatient", "true");
      localStorage.removeItem("isAdmin");
      localStorage.removeItem("isDoctor");
      navigate("/patient");
    } else if (userType === "doctor" && email === "doctor@example.com" && password === "12345") {
      setErrorMassage("");
      localStorage.setItem("isDoctor", "true");
      localStorage.removeItem("isAdmin");
      localStorage.removeItem("isPatient");
      navigate("/doctor");
    } else {
      setErrorMassage("Invalid username, password, or user type");
      localStorage.removeItem("isAdmin");
      localStorage.removeItem("isPatient");
      localStorage.removeItem("isDoctor");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src="images/company_logo.jpg" alt="Company Logo" height="50px" width="100px" />
        <h2>
          MediCare Portal
          <br />
          Hospital Management System
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
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
          <div className="input-group">
            <label>Email Address</label>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input type="email" placeholder="example@1234.com" {...field} />
              )}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

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
          {errorMessage && <p className="error">{errorMessage}</p>}
          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
