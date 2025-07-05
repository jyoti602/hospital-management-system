import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import { loginUser } from '../../api/authService';

// ✅ Validation Schema
const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const LoginPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log('Login Data:', data);

    try {
      const response = await loginUser(data);
      if (response.status === 200 || response.status === 201) {
      }
    } catch (error) {
    }
  
  };

  return (
    <section className="login-section">
      <div className="login-card">
        <h2 className="login-title">Login to Your Account</h2>
        <form className="login-form" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <div className="login-form-group">
            <label>Email<span>*</span></label>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  type="email"
                  placeholder="example@domain.com"
                  className={errors.email ? 'error' : ''}
                  {...field}
                />
              )}
            />
            {errors.email && <div className="form-error">{errors.email.message}</div>}
          </div>

          <div className="login-form-group">
            <label>Password<span>*</span></label>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  type="password"
                  placeholder="Enter your password"
                  className={errors.password ? 'error' : ''}
                  {...field}
                />
              )}
            />
            {errors.password && <div className="form-error">{errors.password.message}</div>}
          </div>

          <button className="login-btn" type="submit">Login</button>

          {isSubmitSuccessful && (
            <div className="form-success">Login successful!</div>
          )}
        </form>

        <div className="login-signup-link">
          Don't have an account? <Link to="/signup">Create Account</Link>
        </div>
        <div className="login-forgot-link">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
