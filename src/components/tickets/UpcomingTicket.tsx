import React from "react";
import TicketCard from "./TicketCard";
import { getPendingRequest } from "@/services/request";
const UpcomingTicket: React.FC = async () => {
  const request = await getPendingRequest();
  console.log("data: ", request);
  return (
    <div className="m-2 p-2 min-w-full border-2 min-h-60 rounded drop-shadow-sm">
      <TicketCard />
      <TicketCard />
    </div>
  );
};

export default UpcomingTicket;
