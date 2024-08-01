import "./styles.css";
import { FormEvent, FormEventHandler, useRef } from "react";
import { useAuth } from "../AuthProvider";
import axios from "axios"; 
import { useRouter } from 'next/router';

export default function App() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { signup } = useAuth();
  const handleSignup: FormEventHandler<HTMLFormElement> = async (e: FormEvent) => {
    e.preventDefault();
    if (!emailRef.current?.value || !passwordRef.current?.value) {
      console.log('rrrrr');
      return;
    }

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    return await signup(email, password);
  };
  return (
    <form className='App grid_txt_1' onSubmit={handleSignup}>
      <h1 className='u-center'>&lt;Signup&gt;</h1>
      <div className='grid_txt'>
        <label>email</label>
        <input
          ref={emailRef}
          name='username'
          placeholder='enter your email'
          type={"email"}
          autoComplete=''
        />
      </div>
      <div className='grid_txt'>
        <label htmlFor='password'>password</label>
        <input
          ref={passwordRef}
          type='password'
          name='password'
          placeholder='enter your password'
          autoComplete='new-password'
        />
      </div>
      <button className='btn'>next</button>
    </form>
  );
}
