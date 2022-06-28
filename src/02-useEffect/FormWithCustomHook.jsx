import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm";



export const FormWithCustomHook = () => {

  const { formState, handleInputChange, username, email, password, onResetForm } = useForm({
    username: "",
    email: "",
    password: "",
  });

  // const { username, email, password } = formState;
 

  return (
    <>
        <h1>Formulario con custom Hook</h1>

        <hr />

        <input
          type="text"
          className="form-control" 
          placeholder="Username"
          name="username"
          value={username}
          onChange={handleInputChange}
        />    
        <input
          type="email"
          className="form-control mt-2" 
          placeholder="jonatan@google.com"
          name="email"
          value={email}
          onChange={handleInputChange}
        />

        <input
          type="password"
          className="form-control mt-2" 
          placeholder="Contraseña"
          name="password"
          value={password}
          onChange={handleInputChange}
        />    

        <button onClick={ onResetForm } className="btn btn-primary mt-2">Borrar</button>

    </>
  );
};
