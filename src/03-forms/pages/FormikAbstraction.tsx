import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";

import { TextInput, Select, CheckBox  } from "../components";




export const FormikAbstraction = () => {
  return (
    <div>
      <h1> Formik Abstraction</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: ""
        }}
        onSubmit={(formData) => {
          console.log(formData);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string().email("Wrong email format").required("Required"),
          terms: Yup.boolean().oneOf([true], "Must be accepted"),
          jobType: Yup.string().required("Required").notOneOf(['it'], "This option is not allowed")
        })}
      >
        {(formik) => (
          <Form>

            <TextInput label="First Name" name="firstName" placeholder="Alvaro" />
            <TextInput label="Last Name" name="lastName" placeholder="Torrente" />
            <TextInput label="Email" name="email" placeholder="aaa@gmail.com" type="email" />

            <Select label="Job Type" name="jobType" as="select" >
                  <option value="">Pick something</option>
                  <option value="developer">Developer</option>
                  <option value="designer">Designer</option>
                  <option value="it">It</option>
            </Select>
         
            <CheckBox label="Terms and Conditions" name="terms" />

            <button type="submit">Submit</button>

          </Form>
        )}
      </Formik>
    </div>
  );
};
