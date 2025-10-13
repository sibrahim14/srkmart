import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from './superbase';


const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!fullName || !email || !password) {
      alert('Please fill in all fields');
      return;
    }

    // 1️ Create user in Supabase Auth
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert('Signup failed: ' + error.message);
      return;
    }

    // 2️⃣ Insert user info into custom "profiles" table
    const user = data.user;
    if (user) {
      const { error: insertError } = await supabase.from('profiles').insert([
        { id: user.id, full_name: fullName, email: email },
      ]);

      if (insertError) {
        console.error('Insert error:', insertError);
        alert('Profile save failed: ' + insertError.message);
        return;
      }
    }

    alert('Signup successful!');
    navigate('/');
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>

      <div className="input-group">
        <label>Full Name</label>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>

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
        <button onClick={handleSignup}>Sign Up</button>
      </div>
    </div>
  );
};

export default SignUp;
