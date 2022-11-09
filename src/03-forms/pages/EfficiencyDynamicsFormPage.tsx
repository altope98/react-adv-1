import formData from "../data/custom-form.json";
import { Formik, Form } from "formik";
import { Select, TextInput } from "../components";
import * as Yup from "yup";

const generateInitialValues = () => {
  const initialValues: { [key: string]: any } = {};
  for (const input of formData) {
    initialValues[input.name] = input.value;
  }
  return initialValues;
};

const generateValidations = () => {
  const requiredFields: { [key: string]: any } = {};

  for (const input of formData) {
    if (!input.validations || input.validations.length === 0) continue;

    let schema = Yup.string();

    for (const rule of input.validations) {
      if (rule.type === "required") {
        schema = schema.required(rule.errorText);
      }

      if (rule.type === "minLength") {
        schema = schema.min(
          (rule as any).value || 2,
          "Must be more than " + (rule as any).value || 2 + " characters"
        );
      }

      if (rule.type === "email") {
        schema= schema.email(rule.errorText)
      }
    }
    requiredFields[input.name] = schema;
  }

  return Yup.object({ ...requiredFields });
};

export const EfficiencyDynamicsFormsPage = () => {
  return (
    <div>
      <h1>Efficiency Dynamics Form</h1>
      <Formik
        initialValues={generateInitialValues()}
        validationSchema={generateValidations()}
        onSubmit={(values) => console.log(values)}
      >
        {(formik) => (
          <Form noValidate>
            {formData.map(({ type, name, placeholder, label, options }) => {
              if (type === "input" || type === "password" || type === "email") {
                return (
                  <TextInput
                    key={name}
                    type={type as any}
                    name={name}
                    placeholder={placeholder}
                    label={label}
                  />
                );
              } else if (type === "select") {
                return (
                  <Select key={name} name={name} label={label}>
                    <option value="">Select something</option>
                    {options?.map(({ value, id }) => {
                      return (
                        <option key={value} value={id}>
                          {value}
                        </option>
                      );
                    })}
                  </Select>
                );
              }

              throw new Error("Type '" + type + "' not supported");
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
