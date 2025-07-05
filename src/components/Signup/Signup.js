import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom'; // ✅ Corrected import
import './Signup.css';
import { signupUser } from '../../api/authService';

// ✅ Validation schema
const schema = Yup.object().shape({
  name: Yup.string().required('Full name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(5, 'Password must be at least 5 characters'),
  confirmPassword: Yup.string()
    .required('Please confirm your password')
    .oneOf([Yup.ref('password')], 'Passwords do not match'),
});

const Signup = () => {
  const [submitError, setSubmitError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate(); // ✅ Initialize navigate

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const payload = {
        name: data.name,
        email: data.email,
        password: data.password,
      };

      const response = await signupUser(payload);

      if (response.status === 200 || response.status === 201) {
        setSubmitted(true);
        setSubmitError('');
        reset();

        // ✅ Redirect to login page
        navigate('/login');
      }
    } catch (error) {
      if (error.response?.status === 401) {
        setSubmitError('Unauthorized. Please check your input.');
      } else {
        setSubmitError('An error occurred. Please try again later.');
      }
      setSubmitted(false);
    }
  };

  return (
    <section className="signup-section">
      <div className="signup-card">
        <h2 className="signup-title">Create Your Account</h2>

        <form className="signup-form" onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
          {/* Full Name */}
          <div className="signup-form-group">
            <label>Full Name<span>*</span></label>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  type="text"
                  {...field}
                  placeholder="Enter your full name"
                  className={errors.name ? 'error' : ''}
                />
              )}
            />
            {errors.name && <div className="form-error">{errors.name.message}</div>}
          </div>

          {/* Email */}
          <div className="signup-form-group">
            <label>Email<span>*</span></label>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  type="email"
                  {...field}
                  placeholder="Enter your email"
                  className={errors.email ? 'error' : ''}
                />
              )}
            />
            {errors.email && <div className="form-error">{errors.email.message}</div>}
          </div>

          {/* Password */}
          <div className="signup-form-group">
            <label>Password<span>*</span></label>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  type="password"
                  {...field}
                  placeholder="Create a password"
                  className={errors.password ? 'error' : ''}
                />
              )}
            />
            {errors.password && <div className="form-error">{errors.password.message}</div>}
          </div>

          {/* Confirm Password */}
          <div className="signup-form-group">
            <label>Confirm Password<span>*</span></label>
            <Controller
              name="confirmPassword"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  type="password"
                  {...field}
                  placeholder="Re-enter password"
                  className={errors.confirmPassword ? 'error' : ''}
                />
              )}
            />
            {errors.confirmPassword && <div className="form-error">{errors.confirmPassword.message}</div>}
          </div>

          {/* Submit Button */}
          <button className="signup-btn" type="submit">Sign Up</button>

          {/* Submission Messages */}
          {submitted && <div className="form-success">Account created successfully!</div>}
          {submitError && <div className="form-error">{submitError}</div>}
        </form>

        <div className="signup-login-link">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </section>
  );
};

export default Signup;
