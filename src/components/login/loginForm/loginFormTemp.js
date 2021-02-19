import React from 'react';
import './loginForm.css';
import { Formik, Field, Form } from 'formik';
function LoginFormTemp() {
    return (
        <div>
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(data, {setSubmitting}) => {
                    setSubmitting(true);
                    //make an async call
                    console.log(data);
                    setSubmitting(false);
                }}>
                {({ values, isSubmitting}) => (
                    <Form>
                        <div>
                            <Field name="email" type="email" placeholder="email"/>
                        </div>
                        <div>
                            <Field name="password" type="password" placeholder="password"/>
                        </div>
                        <div>
                            <button disabled={isSubmitting} type="submit">submit</button>
                        </div>
                        <pre>
                            {JSON.stringify(values, null, 2)}
                        </pre>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default LoginFormTemp;