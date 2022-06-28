import { useEffect, useState } from "react"
import { Message } from "./Message";



export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: "XyonaX",
    email: "ezequiel@gmail.com"
  });

  const {username, email} = formState;

  const handleInputChange = ({target}) => {
    const {name, value} = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };


  useEffect( () => {
    // console.log('useEffect se llamo');
  },[]);
  useEffect( () => {
    // console.log('formState Changed!');
  },[formState]);
  useEffect( () => {
    // console.log('email Changed!');
  },[email]);

  


  return (
    <>
        <h1>Formulario Simple</h1>

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
      
        {
          (username === "XyonaX2") && <Message />
        }

    </>
  );
};
