"use client";
import { useState } from "react";
import Button from "../../../components/Button";
import GoogleSignInButton from "../../../components/GoogleSignInButton";
import TextField from "../../../components/TextField";
import { toast } from "@/components/ui/use-toast";

const SignInPage = () => {
  const [form, setForm] = useState({});
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postAuth(form);
  };
  const postAuth = async (data) => {
    const response = await fetch(
      `https://api-social-psi.vercel.app/api/v1/auth/login}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    // const { data: user } = await response.json();
    console.log(data);
    console.log(response);
    if (response.ok) {
      toast({
        description: "Đăng nhập thành công",
      });
    } else {
      toast({
        description: `${response.statusText}`,
      });
    }
  };

  return (
    <section className="flex min-h-full overflow-hidden pt-10 sm:py-28">
      <div className="mx-auto flex w-full max-w-2xl flex-col px-4 sm:px-6">
        <div className="relative mt-8 sm:mt-16">
          <h1 className="text-center text-2xl font-medium tracking-tight text-gray-900 dark:text-white">
            Sign in to your account
          </h1>
        </div>
        <div className="sm:rounded-5xl -mx-4 mt-10 flex-auto bg-white px-4 py-10 shadow-2xl shadow-gray-900/10 sm:mx-0 sm:flex-none sm:p-24">
          <form onSubmit={handleSubmit}>
            <div className="space-y-2">
              <TextField
                id="email"
                name="email"
                type="email"
                label="Sign in with your email"
                placeholder="123@gmail.com"
                autoComplete="email"
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <TextField
                id="password"
                name="password"
                type="password"
                label="Password"
                onChange={handleChange}
                required
              />
            </div>
            <Button
              type="submit"
              variant="outline"
              color="gray"
              className="mt-3 w-full"
            >
              Continue with email
            </Button>
          </form>
          <div className="mx-auto my-10 dark:text-black flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
            or
          </div>
          <GoogleSignInButton />
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
