import { useFormik } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";

export const FormikYupPage = () => {


  const { handleSubmit, errors, touched, getFieldProps } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
      },
      onSubmit: (formData) => {
        console.log(formData);
      },
      validationSchema: Yup.object({
        firstName: Yup.string().max(15, 'Must be 15 characters or less'). required('Required'),
        lastName: Yup.string().max(20, 'Must be 20 characters or less'). required('Required'),
        email: Yup.string().email('Wrong email format').required('Required')
      })
    });

  return (
    <div>
      <h1> Formik</h1>

      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          {...getFieldProps('firstName')}
        />

        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          {...getFieldProps('lastName')}
        />

        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          {...getFieldProps('email')}
        />

        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
