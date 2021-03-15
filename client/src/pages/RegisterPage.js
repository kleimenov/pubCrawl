import React from "react"; 
import {Link} from 'react-router-dom'

export const RegisterPage = () => {
  return (
    <div>
      <h3>Hello and please Register</h3>
      <div>
        Don't have an account?
        <Link to="/reigster">Push me</Link>
      </div>
    </div>
  );
};
