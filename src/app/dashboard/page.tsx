import React from "react";
import Layout from "@/components/Layout";
import { getRequestTypes } from "@/services/requestTypes";
import RequestType from "@/models/RequestType";
import PushNotification from "@/components/push_notifactions/PushNotification";
const page: React.FC = async () => {
  const results = await getRequestTypes();
  return (
    <Layout>
      <h1 className="text-2xl font-semibold text-slate-900">Dashboard</h1>
      <PushNotification />
      {results.map((requestType, index) => (
        <div key={index}>
          <h1 className="text-slate-900 font-semibold">{requestType.type}</h1>
          {requestType.SubType.map(
            (subType: RequestType, typeIndex: number) => (
              <div className="px-4" key={typeIndex}>
                <p className="text-stone-700">{subType.type}</p>
              </div>
            )
          )}
        </div>
      ))}
    </Layout>
  );
};

export default page;
