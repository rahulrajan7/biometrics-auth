"use client";

import Link from "next/link";
import { useRef, useState } from "react";

export default function App() {
  const ref = useRef<HTMLInputElement>(null);
  const [userId, setUserId] = useState("");

  return (
    <div className='App grid_txt_1'>
      <Link className='btn br' href={"/signup"}>
        signup
      </Link>
      <Link className='btn br' href={"/login"}>
        login
      </Link>
    </div>
  );
}
