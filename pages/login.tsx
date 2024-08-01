import "./styles.css";
import { FormEvent, FormEventHandler, useRef } from "react";
import { useAuth } from "../AuthProvider";
import { useRouter } from "next/router"; // Assuming you are using Next.js for navigation

export default function Login() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { login } = useAuth();
  const router = useRouter(); // Assuming you are using Next.js for navigation

  const handleLogin: FormEventHandler<HTMLFormElement> = async (e: FormEvent) => {
    e.preventDefault();
    if (!emailRef.current?.value || !passwordRef.current?.value) return;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      await login(email, password);
      router.push("/dashboard"); // Navigate to a dashboard or another authenticated route
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="App grid_txt_1" onSubmit={handleLogin}>
      <h1 className="u-center">&lt;Login&gt;</h1>
      <div className="grid_txt">
        <label>email</label>
        <input
          ref={emailRef}
          name="username"
          placeholder="enter your email"
          type="email"
          autoComplete=""
        />
      </div>
      <div className="grid_txt">
        <label htmlFor="password">password</label>
        <input
          ref={passwordRef}
          type="password"
          name="password"
          placeholder="enter your password"
          autoComplete="current-password"
        />
      </div>
      <button className="btn">login</button>
    </form>
  );
}
