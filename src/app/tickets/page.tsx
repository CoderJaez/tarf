import React from "react";
import Layout from "@/components/Layout";
import Ticket from "@/components/tickets/Ticket";
const page: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-2xl font-semibold text-slate-900">Tickets</h1>
      <Ticket />
    </Layout>
  );
};

export default page;
