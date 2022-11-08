import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";
import { RegisterData } from "../interfaces/interfaces";
import "../styles/styles.css";

export const RegisterPage = () => {
  const { formData, onChange, resetForm, isValidEmail, name, email, pass1, pass2  } = useForm({
    name: "",
    email: "",
    pass1: "",
    pass2: "",
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(formData);
  };

  return (
    <div>
      <h1>Register Page</h1>

      <form noValidate onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className={`${name.trim().length <= 0 && 'has-error'}`}
          value={name}
          onChange={onChange}
        />
        {name.trim().length <= 0 && <span>Este campo es obligatorio</span>}


        <input
          type="email"
          placeholder="Email"
          name="email"
          className={`${!isValidEmail(email) && 'has-error'}`}
          value={email}
          onChange={onChange}
        />
        {!isValidEmail(email) && <span>Este campo es obligatorio</span>}


        <input
          type="password"
          placeholder="Password"
          name="pass1"
          value={pass1}
          onChange={onChange}
        />
        {pass1.trim().length <= 0 && <span>Este campo es obligatorio</span>}
        {pass1.trim().length < 6 && pass1.trim().length > 0 && <span>La contraseña tiene que ser mayor de 6 caracteres</span>}

        <input
          type="password"
          placeholder="Repeat Password"
          name="pass2"
          value={pass2}
          onChange={onChange}
        />
        {pass2.trim().length <= 0 && <span>Este campo es obligatorio</span>}
        {pass1.trim().length > 0 && pass1!==pass2 && <span>Las crontraseñas no son iguales</span>}

        <button type="submit">Create</button>

        <button onClick={resetForm}>Reset</button>
      </form>
    </div>
  );
};
