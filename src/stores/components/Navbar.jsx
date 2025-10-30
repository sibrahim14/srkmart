import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserCart } from '../context/cart';
import { LogIn, UserPlus, LogOut } from 'lucide-react'; // 🆕 Added LogOut icon
import { supabase } from './singIn/superbase';

const Navbar = () => {
  const { cartItems } = UserCart();

  // 🧠 User State
  const [user, setUser] = useState(null);

  // 🧩 Auth Form States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const navigate = useNavigate();
  const formRef = useRef(null);

  // 🧩 Toggle Functions
  const toggleSignIn = () => {
    setShowSignIn(true);
    setShowSignUp(false);
  };

  const toggleSignUp = () => {
    setShowSignUp(true);
    setShowSignIn(false);
  };

  // ❌ Hide popup on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setShowSignIn(false);
        setShowSignUp(false);
      }
    };

    if (showSignIn || showSignUp) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showSignIn, showSignUp]);

  // 🔑 Handle Sign In
  const handleSignIn = async () => {
    if (!email || !password) {
      alert('Please fill all fields!');
      return;
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;

      // ✅ Get profile data
      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('email', email)
        .single();

      setUser(profile);
      alert('Login Successful!');
      setShowSignIn(false);
      navigate('/');
    } catch (error) {
      alert('Login Failed: ' + error.message);
    }
  };

  // 🆕 Handle Sign Up
  const handleSignup = async () => {
    if (!fullName || !email || !password) {
      alert('Please fill in all fields');
      return;
    }

    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      alert('Signup failed: ' + error.message);
      return;
    }

    const user = data.user;
    if (user) {
      const { error: insertError } = await supabase.from('profiles').insert([
        { id: user.id, full_name: fullName, email },
      ]);

      if (insertError) {
        alert('Profile save failed: ' + insertError.message);
        return;
      }
    }

    setUser({ full_name: fullName, email });
    alert('Signup successful!');
    setShowSignUp(false);
    navigate('/');
  };

  // 🚪 Handle Logout
  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    alert('Logged out successfully!');
    navigate('/');
  };

  // 🧭 Check if user is already logged in (on refresh)
  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();
        setUser(profile);
      }
    };
    getUser();
  }, []);

  return (
    <>
      <div className='navSection'>
        <div className='title'>
          <Link to='/'><h2>SRK-mart</h2></Link>
        </div>

        <div className='search'>
          <input type='text' placeholder='search...' id='input-search' />
        </div>

        <div className='user'>
          <div className='user-detail'>
            {user ? (
              <div className='welcome'>
                 {user.full_name || user.email}
                <button className='logout-btn' onClick={handleLogout}>
                  <LogOut className='logout-logo' /> Logout
                </button>
              </div>
            ) : (
              <>
                <button className='signin-btn' onClick={toggleSignIn}>
                  <LogIn className='login-logo' /> SignIn
                </button>
                /
                <button className='signup-btn' onClick={toggleSignUp}>
                  <UserPlus className='signup-logo' /> SignUp
                </button>
              </>
            )}
          </div>

          <Link to='/cart'>
            <div className='cart'>🛒 cart ({cartItems.length})</div>
          </Link>
        </div>
      </div>

      <div className='submenu'>
        <ul>
          <Link to='/mobile'><li>Mobiles</li></Link>
          <Link to='/computer'><li>Computers</li></Link>
          <Link to='/ac'><li>AC</li></Link>
          <Link to='/fridge'><li>Fridge</li></Link>
          <Link to='/manware'><li>Mens Wear</li></Link>
          <Link to='/tv'><li>TV</li></Link>
          <Link to='/watch'><li>Watch</li></Link>
          <Link to='/woman'><li>Woman Wear</li></Link>
        </ul>
      </div>

      {/* 🔲 SignIn Modal */}
      {showSignIn && (
        <>
          <div className='overlay'></div>
          <div ref={formRef} className='popup-form1'>
            <h1>Sign In</h1>
            <div className='input-group'>
              <label>Email</label>
              <input
                type='email'
                placeholder='Enter your Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className='input-group'>
              <label>Password</label>
              <input
                type='password'
                placeholder='Enter your Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className='button-group'>
              <button onClick={handleSignIn}>Sign In</button>
            </div>
          </div>
        </>
      )}

      {/* 🆕 SignUp Modal */}
      {showSignUp && (
        <>
          <div className='overlay'></div>
          <div ref={formRef} className='popup-form2'>
            <h1>Sign Up</h1>

            <div className='input-group'>
              <label>Full Name</label>
              <input
                type='text'
                placeholder='Full Name'
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div className='input-group'>
              <label>Email</label>
              <input
                type='email'
                placeholder='Enter your Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className='input-group'>
              <label>Password</label>
              <input
                type='password'
                placeholder='Enter your Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className='button-group'>
              <button onClick={handleSignup}>Sign Up</button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
