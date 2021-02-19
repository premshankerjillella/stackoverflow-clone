import React from 'react';
import './loginForm.css';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import {useContext} from 'react';
import UserContext from '../../../UserContext'
import loginUtil from '../../../utils/login';
const LoginForm = () => {
    let history = useHistory();
    const {user, setUser} = useContext(UserContext);
    return(
    <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values, { setSubmitting }) => {
                const user = await loginUtil(values.email, values.password);
                localStorage.setItem("user", user);
                setUser(user);
                history.push("/questions");
        }}
        // here goes the validation
        validationSchema={Yup.object().shape({
            email: Yup.string()
                .email()
                .required("Required"),

            password: Yup.string()
                .required("No password provided")
                .min(8, "Password is too short")
                .matches(/(?=.*[0-9])/, "Password should contain a number")
        })}
    >
        {props => {
            const {
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit
            } = props;
            return (
                <div className="card">
                    <form autoComplete="off" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email">
                                Email
                        </label>
                            <input type="text" value={values.email} name="email" onChange={handleChange} onBlur={handleBlur}
                                className={errors.email && touched.email && "error"}
                            />
                            {errors.email && touched.email && (
                                <div className="input-feedback">
                                    {errors.email}
                                </div>
                            )}
                        </div>
                        <div>
                            <label htmlFor="password">
                                Password
                        </label>
                            <small>Forgot password?</small>
                            <input type="password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                            {errors.password && touched.password && (
                                <div className="input-feedback">
                                    {errors.password}
                                </div>
                            )}
                        </div>
                        <div>

                            {/* <Link to="/questions"> */}
                            <button type="submit" disabled={isSubmitting} className="formbtn">Log in</button>
                            {/* </Link> */}
                        </div>
                    </form>
                </div>
            )
        }}
    </Formik>
    )
}

export default LoginForm;