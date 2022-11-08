import { FormikErrors, useFormik } from "formik";
import { BasicFormikForm } from "../interfaces/interfaces";

import "../styles/styles.css";

export const FormikBasicPage = () => {

    const validate = ({firstName, lastName, email}: BasicFormikForm)=> {
            const errors: FormikErrors<BasicFormikForm> ={}

            if(!firstName) errors.firstName = 'Required'
            else if( firstName.length >= 15) errors.firstName='Must be 15 character or less'

            if(!lastName) errors.lastName = 'Required'
            else if( lastName.length >= 20) errors.lastName='Must be 20 character or less'

            if (!email) errors.email = 'Required'
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) errors.email = 'Invalid email address';
    
            return errors
    }

    const {handleChange, handleSubmit, values, errors, touched, handleBlur} = useFormik({
        initialValues:{
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: formData =>{
            console.log(formData)
        },
        validate
    });

  return (
    <div>
      <h1> Formik</h1>

      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" value={values.firstName} onChange={handleChange} onBlur={handleBlur} />

        {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" value={values.lastName} onChange={handleChange} onBlur={handleBlur} />

        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}


        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />

        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit" >Submit</button>
      </form>
    </div>
  );
};
