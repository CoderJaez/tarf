import React from "react";
import Layout from "@/components/Layout";
import PushNotification from "@/components/push_notifactions/PushNotification";

const page: React.FC = async () => {
  return (
    <Layout>
      <h1 className="text-2xl font-semibold text-slate-900">Dashboard</h1>
      <PushNotification />
    </Layout>
  );
};

export default page;
