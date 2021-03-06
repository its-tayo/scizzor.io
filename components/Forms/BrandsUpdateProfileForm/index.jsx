import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { object, string } from 'yup';

import InputField from '../formElements/InputField';

const BrandsUpdateProfileForm = ({ onSubmit }) => {
  const validationSchema = object().shape({
    firstName: string().required(),
    lastName: string().required(),
    email: string()
      .email()
      .required(),
    phoneNumber: string()
      .matches(/^[0-9]{9,11}$/, 'invalid phone number format')
      .required(),
  });

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, actions) => {
        await onSubmit(values);
        actions.setSubmitting(false);
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className="pt-8 md:max-w-md">
          <InputField
            errors={errors}
            name="firstName"
            touched={touched}
            label="First Name"
          />

          <InputField
            errors={errors}
            name="lastName"
            touched={touched}
            label="Last Name"
          />

          <InputField
            name="email"
            errors={errors}
            touched={touched}
            label="Email Address"
            icon={
              <svg
                className="h-4 w-4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.063 8a3.063 3.063 0 11-6.126 0 3.063 3.063 0 016.125 0z"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.063 8v1.313a1.75 1.75 0 103.5 0V8a6.562 6.562 0 10-2.626 5.25"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />

          <InputField
            errors={errors}
            touched={touched}
            name="phoneNumber"
            label="Phone Number"
            icon={
              <svg
                className="h-4 w-4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.053 5.812l.844.844a2.34 2.34 0 003.31 0l1.24-1.24a1.17 1.17 0 000-1.655L4.035 1.347a1.172 1.172 0 00-1.765.115c-2.527 3.434-.997 7.052 2.11 10.159 3.108 3.107 6.725 4.638 10.16 2.11a1.172 1.172 0 00.114-1.765L12.24 9.552a1.17 1.17 0 00-1.655 0l-1.241 1.242a2.34 2.34 0 000 3.31l.853.853"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-sm w-full mt-1 focus:outline-none focus:shadow-outline md:w-auto"
          >
            Update Profile
          </button>
        </Form>
      )}
    </Formik>
  );
};

BrandsUpdateProfileForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default BrandsUpdateProfileForm;
