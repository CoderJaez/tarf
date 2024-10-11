"use client";
import React from "react";
import TicketCard from "./TicketCard";
import PusherClient from "@/libs/pusher_channels/clientChannel";
const UpcomingTicket: React.FC = () => {
  const channel = PusherClient.subscribe("my-channel");
  channel.bind("my-event", function (data: any) {
    alert(JSON.stringify(data));
  });
  return (
    <div className="m-2 p-2 min-w-full border-2 min-h-60 rounded drop-shadow-sm">
      <TicketCard />
      <TicketCard />
    </div>
  );
};

export default UpcomingTicket;
