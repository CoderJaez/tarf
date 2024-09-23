import React from "react";
import Layout from "@/components/Layout";
import UserList from "@/components/users/UserList";
import RouteButton from "@/components/form_elements/RouteButton";
const page: React.FC = () => {
  return (
    <Layout>
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-semibold text-slate-800 my-2">Users</h1>
        <RouteButton Url="/users/new" Text="Create User" />
      </div>
      <UserList />
    </Layout>
  );
};

export default page;
