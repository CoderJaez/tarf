import React from "react";
import Layout from "@/components/Layout";
import Ticket from "@/components/tickets/Ticket";
import RouteButton from "@/components/form_elements/RouteButton";
const page: React.FC = () => {
  return (
    <Layout>
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-semibold text-slate-800 my-2">Tickets</h1>
        <RouteButton Url="/" Text="Create Ticket" />
      </div>
      <Ticket />
    </Layout>
  );
};

export default page;
