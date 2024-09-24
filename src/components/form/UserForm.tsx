"use client";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "@/schemas/user.schema";
import { insertUser } from "@/services/user";
const UserForm = () => {
  type FormData = z.infer<typeof userSchema>;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(userSchema) });

  const submit = async (formData: FormData) => {
    const result = await insertUser(formData);
    alert(result);
  };

  return (
    <div className="bg-white p-4 rounded shadow-md w-full ">
      <form
        onSubmit={handleSubmit(submit)}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            {...register("name", {
              setValueAs: (value: string) => {
                if (value === "") return undefined;
                return value;
              },
            })}
            className="text-slate-800 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.name && (
            <span className="text-red-500 italic text-sm">
              {errors.name.message}
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            {...register("username", {
              setValueAs: (value: string) => {
                console.log(value);
                if (value === "") return undefined;
                return value;
              },
            })}
            className="text-slate-800 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.username && (
            <span className="text-red-500 italic text-sm">
              {errors.username.message}
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            {...register("email", {
              setValueAs: (value: string) => {
                if (value === "") return undefined;
                return value;
              },
            })}
            className="text-slate-800 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.email && (
            <span className="text-red-500 italic text-sm">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            {...register("password", {
              setValueAs: (value: string) => {
                if (value === "") return undefined;
                return value;
              },
            })}
            className="text-slate-800 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.password && (
            <span className="text-red-500 italic text-sm">
              {errors.password.message}
            </span>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <input
            type="password"
            {...register("confirmPassword", {
              setValueAs: (value: string) => {
                if (value === "") return undefined;
                return value;
              },
            })}
            className="text-slate-800 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.confirmPassword && (
            <span className="text-red-500 italic text-sm">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default UserForm;
