"use client";
import React from "react";

function RouteBack() {
  return (
    <button
      className="mt-8 text-blue-500 hover:underline"
      onClick={() => window.history.back()}
    >
      Go Back
    </button>
  );
}

export default RouteBack;
