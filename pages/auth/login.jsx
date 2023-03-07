import Link from "next/link";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { RiShieldUserLine, RiHome8Line } from "react-icons/ri";
import axios from "axios";
import { useRouter } from "next/router";
import { AuthContext } from "@/context/AuthProvider";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const { user, login, logout } = useContext(AuthContext);
  const router = useRouter();
  const defaultValues = {
    email: "",
    password: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm({ defaultValues });

  const onSubmit = async (data) => {
    // try {
    //   const result = await axios.post("/api/users/login", { ...data });
    //   console.log(result.response);

    //   if (!result.data.success) {
    //     setLoginError("Incorrect username or password");
    //     console.log(loginError);
    //   } else {
    //     const { firstName, email, token } = result.data.data;
    //     login(firstName, token);

    //     router.push("/user/");
    //   }
    //   clearErrors();
    //   reset();
    // } catch (error) {
    //   console.log(error);
    // }
    console.log(data);
  };
  return (
    <>
      <div className="flex flex-row justify-center overflow-hidden w-full h-[100vh] ">
        <img
          src="https://res.cloudinary.com/jhay/image/upload/v1678194677/docu-pharma/intervention-img_d8pphl.png"
          className="w-[65vw] object-cover h-full hidden lg:block opacity-80"
        />
        <div className="lg:w-[35vw]  h-full">
          <div className="flex flex-col items-center justify-center w-full h-full px-5 py-10 ">
            <img src="/image/logo-red-1.png" alt="" className="mb-5 w-36" />

            <form
              onSubmit={handleSubmit(async (data) => onSubmit(data))}
              className="flex flex-col items-center justify-center gap-5 p-2 "
            >
              <h1 className="text-xl font-semibold text-center text-gray-700">
                Login existing Account
              </h1>
              <input
                autoComplete="none"
                type="text"
                placeholder={`${
                  errors.email ? `${errors.email.message}` : `Email`
                }`}
                className={`p-2 bg-transparent border-b-2 outline-none w-60 placeholder:text-slate-600 ${
                  errors.email && `placeholder:text-red-500 border-red-500`
                }`}
                {...register("email", {
                  required: "enter email or phone number",
                })}
              />
              <input
                autoComplete="none"
                type="password"
                placeholder={`${
                  errors.password ? `${errors.password.message}` : `Password`
                }`}
                className={`p-2 bg-transparent border-b-2 outline-none w-60 placeholder:text-slate-600 ${
                  errors.password && `placeholder:text-red-500 border-red-500`
                }`}
                {...register("password", { required: "enter your password" })}
              />
              <button className="px-3 py-1 font-medium text-white bg-blue-700 rounded cursor-pointer w-60 hover:opacity-90">
                Login
              </button>
              <p className="text-red-500">{loginError}</p>
              <Link
                href="/auth/register"
                className="font-medium text-blue-700 cursor-pointer hover:underline hover:opacity-90"
              >
                Create account?
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
