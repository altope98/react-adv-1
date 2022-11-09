import { Form, Formik } from "formik";
import * as Yup from "yup"
import { TextInput } from "../components";
import "../styles/styles.css";

export const RegisterFormikPage = () => {

  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          pass1:"",
          pass2: ""
        }}
        onSubmit={(formData) => {
          console.log(formData);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .min(2, "Must be 2 characters or more")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .min(2, "Must be 2 characters or more")
            .required("Required"),
          email: Yup.string().email("Wrong email format").required("Required"),
          pass1: Yup.string().min(6, "Must be 6 characters or more" ).required("Required"),
          pass2: Yup.string().oneOf([Yup.ref("pass1")], 'Passwords doesnt match').min(6, "Must be 6 characters or more" ).required("Required"),
        })}
      >
        {({handleReset}) => (
          <Form>

            <TextInput label="First Name" name="firstName" placeholder="Name" />
            <TextInput label="Last Name" name="lastName" placeholder="LastName" />
            <TextInput label="Email" name="email" placeholder="Email" type="email" />
            <TextInput label="Password" name="pass1" placeholder="Password" type="password" />
            <TextInput label="Repeat Password" name="pass2" placeholder="Repeat Password" type="password" />


            <button type="submit">Submit</button>

            <button type="button" onClick={handleReset}>Reset</button>

          </Form>
        )}
      </Formik> 
    </div>
  );
};
