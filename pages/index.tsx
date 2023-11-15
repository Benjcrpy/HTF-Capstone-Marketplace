import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Link from "next/link";
import { FormEvent } from "react";

export default function Home() {
  const router = useRouter();

  const logIn = (user: FormEvent<HTMLFormElement>) => {
    user.preventDefault();
    Cookies.set("loggedin", "true");
    router.push("/home");
  };
  
  return (
    <div>
      <Link href="/">
        <nav>
          <h1>Home</h1>
        </nav>
      </Link>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={(user) => logIn(user)}>
          <h1>Log In</h1>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button>Log In</button>
        </form>
      </div>
    </div>
  );
}