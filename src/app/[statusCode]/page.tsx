// pages/_error.js
import React from "react";
import RouteBack from "@/components/form_elements/RouteBack";
type Prop = {
  params: {
    statusCode: string;
  };
};
export const dynamic = "force-dynamic";
const ErrorPage: React.FC<Prop> = ({ params }) => {
  const errorMessages = {
    404: "Page Not Found",
    500: "Internal Server Error",
    401: "Unauthorized Access",
    403: "Forbidden",
    // Add more custom error messages if needed
  };
  function getErrorMessage(code: string) {
    const entry = Object.entries(errorMessages).find(
      ([key, value]) => key == code
    );
    return entry ? entry[1] : "Unknown Error Code";
  }
  const message = getErrorMessage(params.statusCode);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold text-red-600">{params.statusCode}</h1>
      <p className="mt-4 text-xl text-gray-800">{message}</p>
      <RouteBack />
    </div>
  );
};

export default ErrorPage;
