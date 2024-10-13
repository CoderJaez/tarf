import React from "react";
import Layout from "@/components/Layout";
import PushNotification from "@/components/push_notifactions/PushNotification";
import { auth } from "@/libs/auth";
import UpcomingTicket from "@/components/ticket/UpcomingTicket";
import { SessionProvider } from "next-auth/react";
const page: React.FC = async () => {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <Layout>
        <h1 className="text-2xl font-semibold text-slate-900">Dashboard</h1>
        <PushNotification />
        <UpcomingTicket />
      </Layout>
    </SessionProvider>
  );
};

export default page;
