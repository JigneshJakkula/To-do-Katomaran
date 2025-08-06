import { GoogleLogin } from '@react-oauth/google';
import React, { useState } from 'react';
// You can use any icon library, here's an example with inline SVGs
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="-10 -10 -10 -10" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.206" />
  </svg>
);

const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 -10 -10" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

// The component now accepts a prop `onLoginSuccess`
export default function AuthPage({ onLoginSuccess }) {
  // State to toggle between Login and Signup forms
  const [isLogin, setIsLogin] = useState(true);

  // State for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleToggle = () => {
    setIsLogin(!isLogin);
    // Reset fields when toggling
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!email || !password) {
        console.error("Please fill in all fields.");
        return;
    }
    if (!isLogin && password !== confirmPassword) {
        console.error("Passwords do not match.");
        return;
    }

    // --- Form Submission Logic ---
    if (isLogin) {
      console.log('Logging in with:', { email, password });
      // In a real app, you would verify credentials with a backend API.
      // If successful, you call the function passed in via props.
      onLoginSuccess();
    } else {
      console.log('Signing up with:', { email, password });
      // After successful signup and login, call the function.
      onLoginSuccess();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center font-sans">
      <div className="w-full max-w-md mx-auto">
        <div className="bg-white rounded-xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
            {isLogin ? 'Welcome Back!' : 'Create Account'}
          </h2>
          <p className="text-center text-gray-500 mb-8">
            {isLogin ? 'Sign in to continue' : 'Get started with a free account'}
          </p>

<form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><MailIcon /></div>
              <input
                id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><LockIcon /></div>
              <input
                id="password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" required
              />
            </div>
          </div>

          {!isLogin && (
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><LockIcon /></div>
                <input
                  id="confirm-password" type="password" placeholder="••••••••" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" required
                />
              </div>
            </div>
          )}

          <button type="submit" className="submit_button">
            {isLogin ? 'Log In' : 'Create Account'}
          </button>
        </form>
        
        <p className="text-center text-sm text-gray-600 mt-8">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <button onClick={handleToggle} className="font-semibold text-blue-600 hover:text-blue-800 ml-1 focus:outline-none">
            {isLogin ? 'Sign Up' : 'Log In'}
          </button>
        </p>
      </div>
    </div>
    </div>
  );
}

