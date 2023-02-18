import React from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validate: values => {
      const errors = {};

      if (!values.firstName) {
        errors.firstName = 'First Name is required';
      }

      if (!values.lastName) {
        errors.lastName = 'Last Name is required';
      }

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
      axios.post('https://kulkarni-engineers.onrender.com/register', values)
        .then(function (response) {
          console.log(response);
          navigate("/login");
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  });

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="card shadow-lg border-0 rounded-lg mt-5">
            <div className="card-header"><h3 className="text-center font-weight-light my-4">Register</h3></div>
            <div className="card-body">
              <form onSubmit={formik.handleSubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className={`form-control ${formik.touched.firstName && formik.errors.firstName ? 'is-invalid' : ''}`}
                    id="firstName"
                    placeholder="Enter your first name"
                    {...formik.getFieldProps('firstName')}
                  />
                  <label htmlFor="firstName">First Name</label>
                  {formik.touched.firstName && formik.errors.firstName && <div className="invalid-feedback">{formik.errors.firstName}</div>}
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className={`form-control ${formik.touched.lastName && formik.errors.lastName ? 'is-invalid' : ''}`}
                    id="lastName"
                    placeholder="Enter your last name"
                    {...formik.getFieldProps('lastName')}
                  />
                  <label htmlFor="lastName">Last Name</label>
                  {formik.touched.lastName && formik.errors.lastName && <div className="invalid-feedback">{formik.errors.lastName}</div>}
                </div>

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
                  <a className="small" href="/login">Already Have Account?</a>
                  <button type="submit" className="btn btn-primary">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register