import React, { useState } from 'react';
import { auth } from '../firebase';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      console.log("User registered:", userCredential.user);
      // Handle successful registration (e.g., redirect to login)
    } catch (error) {
      console.error("Error registering: ", error);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;