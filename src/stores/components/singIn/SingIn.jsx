import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from './superbase';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async () => {
    if (!email || !password) {
      alert('fill the all');
      return;
    }

    // 🔑 Supabase login (sign in)
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert('Login Failed: ' + error.message);
      return;
    }

    alert('Login Successful!');
    navigate('/'); 
  };

  return (
    <div className="sigin">
      <h1>Sign In</h1>

      <div className="input-group">
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="button-group">
        <button onClick={handleSignIn}>Sign In</button>
      </div>
    </div>
  );
};

export default SignIn;
