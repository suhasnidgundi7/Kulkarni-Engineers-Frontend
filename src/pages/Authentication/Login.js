import React, { useContext } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router';

const Login = () => {
    const { handleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate: values => {
            const errors = {};
            if (!values.email) {
                errors.email = 'Email is required';
            } else if (!/\S+@\S+\.\S+/.test(values.email)) {
                errors.email = 'Email is invalid';
            }
            if (!values.password) {
                errors.password = 'Password is required';
            } else if (values.password.length < 6) {
                errors.password = 'Password must be at least 6 characters';
            }
            return errors;
        },
        onSubmit: values => {
            axios.post('https://kulkarni-engineers.onrender.com/login', values)
                .then(response => {
                    console.log(response.data);
                    handleLogin(response.data.loginId, response.data.userType);
                    navigate('/');
                })
                .catch(error => {
                    console.error(error);
                });
        },
    });

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8">
                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                        <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
                        <div className="card-body">
                            <form onSubmit={formik.handleSubmit}>
                                <div className="form-floating mb-3">
                                    <input
                                        type="email"
                                        className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                                        id="email"
                                        placeholder="name@example.com"
                                        {...formik.getFieldProps('email')}
                                    />
                                    <label htmlFor="email">Email address</label>
                                    {formik.touched.email && formik.errors.email && <div className="invalid-feedback">{formik.errors.email}</div>}
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="password"
                                        className={`form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
                                        id="password"
                                        placeholder="Password"
                                        {...formik.getFieldProps('password')}
                                    />
                                    <label htmlFor="password">Password</label>
                                    {formik.touched.password && formik.errors.password && <div className="invalid-feedback">{formik.errors.password}</div>}
                                </div>
                                <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                    <a className="small" href="/forgot-password">Forgot Password?</a>
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
