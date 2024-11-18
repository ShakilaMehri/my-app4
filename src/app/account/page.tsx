"use client"

import React, {useState} from 'react';
import { FaFacebookF, FaGoogle, FaLinkedin, } from 'react-icons/fa';
import { BiUser, } from 'react-icons/bi';
import { MdEmail, MdPassword  } from 'react-icons/md';
import styles from '../styles/account.module.css';

const Page = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };
  return (
    <div className={`${styles.container} ${isSignUp ? styles.signUpMode: ""}`}>
      <div className={styles.leftPanel}>
      <div className={styles.logo}>The Ordinary</div>
        <h1>Welcome back!</h1>
        <p>To keep connected with us please login with your personal info</p>
        <button className={styles.signInButton} onClick={handleToggle}>SIGN IN</button>
      </div>
      <div className={styles.rightPanel}>
        <h1>{isSignUp ? "Create Account" : "Sign In"}</h1>
        <div className={styles.socialIcons}>
          <div className={styles.socialButton}>
            <FaFacebookF/>
          </div>
          <div className={styles.socialButton}>
            <FaGoogle/>
          </div>
          <div className={styles.socialButton}>
            <FaLinkedin/>
          </div>
        </div>
        <p>{isSignUp ? "or use your email for registraction:" : "or use your email to log in:"}</p>
        <form className={styles.form}>
          {isSignUp && (
            <input type="text" placeholder='Name' className={styles.input}/>
          )}
          <input type="email" placeholder='Email' className={styles.input}/>
          <input type="password" placeholder='Password' className={styles.input}/>
          <button type='submit' className={styles.signUpButton}>
            {isSignUp ? "SIGN UP" : "SIGN IN"}
          </button>
        </form>
        <p>
          {isSignUp 
          ? "Already have an account?"
          : "Don't have an account yet?"}{""}
          <span className={styles.toggleLink} onClick={handleToggle}>
            {isSignUp ? "Sign In" : "Sign Up"}
          </span>
          
        </p>
      </div>
    </div>
  );
};

export default Page;