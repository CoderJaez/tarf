"use client";
import React from "react";
import { z } from "zod";
import userAuthSchema from "@/schemas/userAuth.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Swal from "sweetalert2";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const UserAuthForm: React.FC = () => {
  type FormData = z.infer<typeof userAuthSchema>;
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(userAuthSchema) });

  const submit = async (formData: FormData) => {
    Swal.fire({
      title: "Authenticating",
      text: "Please wait...",
      allowOutsideClick: false,
      didOpen: async () => {
        Swal.showLoading();
        const res = await signIn("credentials", {
          username: formData.username,
          password: formData.password,
          redirect: false,
        });
        if (res?.error) {
          Swal.fire({
            title: "Invalid",
            text: "Username/Password is incorrect.",
            icon: "error",
          });
        } else {
          Swal.close();
          router.push("/dashboard"); // Redirect to protected page
        }
      },
    });
  };
  return (
    <div>
      <h1 className="text-2xl text-slate-800 text-center">LOGIN</h1>
      <form onSubmit={handleSubmit(submit)}>
        <div className="p-4">
          <div>
            <label className="block font-semibold text-md text-gray-700">
              Username:
            </label>
            <input
              type="text"
              {...register("username", {
                setValueAs: (value: string) =>
                  value === "" ? undefined : value,
              })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-slate-800"
            />
            {errors.username && (
              <span className="text-red-500 italic text-sm">
                {errors.username.message}
              </span>
            )}
          </div>
          <div>
            <label className="block font-semibold text-md text-gray-700">
              Password:
            </label>
            <input
              type="password"
              {...register("password", {
                setValueAs: (value: string) =>
                  value === "" ? undefined : value,
              })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-slate-800"
            />
            {errors.password && (
              <span className="text-red-500 italic text-sm">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="mt-8">
            <button
              type="submit"
              className="bg-blue-800 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserAuthForm;
