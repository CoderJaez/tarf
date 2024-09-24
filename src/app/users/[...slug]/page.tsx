import React from "react";
import Layout from "@/components/Layout";
import { redirect } from "next/navigation";
import { userSchema } from "@/schemas/user.schema";
import UserForm from "@/components/form/UserForm";
type Prop = {
  params: {
    slug: string;
  };
};
const page = ({ params }: Prop) => {
  const action =
    params.slug[0] === "new" || params.slug[0] === "update"
      ? params.slug[0] === "new"
        ? "Create"
        : "Update"
      : "404";
  if (action === "404") redirect("/404");

  return (
    <Layout>
      <h1 className="text-2xl text-slate-800 font-semibold">{action} User</h1>
      <UserForm />
    </Layout>
  );
};

export default page;
