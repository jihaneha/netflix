"use client";
import axios from "axios";
import Input from "@/components/Input";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Auth() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState("login");
  const [error, setError] = useState("");

  const toggleVariant = () => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  };

  const validateFields = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (variant === "register" && !name) {
      setError("Username is required");
      return false;
    }
    if (!email) {
      setError("Email is required");
      return false;
    }
    if (!emailRegex.test(email)) {
      setError("Invalid email address");
      return false;
    }
    if (!password) {
      setError("Password is required");
      return false;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return false;
    }
    return true;
  };

  const login = async () => {
    if (!validateFields()) return;

    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
        callBack: "/",
      });
      router.push("/");
    } catch (error) {
      console.log(error);
      setError("Invalid email or password");
    }
  };

  const register = async () => {
    if (!validateFields()) return;

    try {
      await axios.post("/api/register", {
        email,
        name,
        password,
      });
      login();
    } catch (error) {
      console.log(error);
      setError("Registration failed");
    }
  };

  return (
    <div className="h-screen w-full">
      <div className="relative bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-cover  w-full">
        <div className="bg-black w-full h-full lg:bg-opacity-50">
          <nav className="px-12 py-2">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={160}
              height={48}
              className="cursor-pointer"
              onClick={() => router.push("/home")}
            />
          </nav>
          <div className="flex justify-center">
            <div className="bg-black bg-opacity-70 px-16 py-10 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
              <h2 className="text-white text-4xl mb-8 font-semibold">
                {variant === "login" ? "Sign in" : "Register"}
              </h2>
              <div className="flex flex-col gap-4">
                {variant === "register" && (
                  <Input
                    label="Username"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setName(e.target.value)
                    }
                    id="name"
                    value={name}
                  />
                )}
                <Input
                  label="Email"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                  id="email"
                  type="email"
                  value={email}
                />
                <Input
                  label="Password"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                  id="password"
                  type="password"
                  value={password}
                />
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <button
                onClick={variant === "login" ? login : register}
                className="text-white bg-red-600 mt-10 w-full hover:bg-red-700 transition py-2"
              >
                {variant === "login" ? "Login" : "Sign up"}
              </button>
              <div className="flex flex-row items-center gap-4 mt-8 justify-center">
                <div
                  onClick={() => signIn("google", { callbackUrl: "/" })}
                  className="bg-white h-10 w-10 rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
                >
                  <FcGoogle size={30} />
                </div>
                <div
                  onClick={() => signIn("github", { callbackUrl: "/" })}
                  className="bg-white h-10 w-10 rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
                >
                  <FaGithub size={30} />
                </div>
              </div>
              <p className="text-neutral-500 mt-12 w-full">
                {variant === "login"
                  ? "First time using Netflix?"
                  : "Already have an account?"}
                <span
                  onClick={toggleVariant}
                  className="text-white ml-1 hover:underline  cursor-pointer"
                >
                  {variant === "login" ? "Create an account" : "Login"}
                </span>
              </p>
            </div>
          </div>
          <div className="bg-black bg-opacity-50 mt-20">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
