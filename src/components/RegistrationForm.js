import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { registration } from '../validation/registration'
import Axios from 'axios'
function RegistrationForm() {
    let hosting = 'http://localhost:3001'
    const handleSend = async (fields) => {
        console.log(fields);
        try {
            await Axios.post(`${hosting}/send`, { fields })
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="signInUserForm">
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phoneNumber: ''
                }}
                validationSchema={registration}
                onSubmit={(fields) => {
                    handleSend(fields);
                }}
            >
                <Form className='form'>
                    <div className='inputElement'>
                        <Field className='input' name='name' type='text' placeholder='Nick names' />
                        <ErrorMessage className="input--bad" component='div' name="name" />
                    </div>
                    <div className='inputElement'>
                        <Field className='input' name='email' type='email' placeholder='Email' />
                        <ErrorMessage className="input--bad" component='div' name="email" />
                    </div>
                    <div className='inputElement'>
                        <Field className='input' name='phoneNumber' type='text' placeholder='Phone Number' />
                        <ErrorMessage className="input--bad" component='div' name="phoneNumber" />
                    </div>
                    <div className="signInUser--actions">
                        <button className='CTA CTA--SEND' type='submit'>SEND</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default RegistrationForm;
