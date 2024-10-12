"use client";
import React, { useEffect } from "react";
import TicketCard from "./TicketCard";
import PusherClient from "@/libs/pusher_channels/clientChannel";
import usePendingRequestStore from "@/stores/pendingTicket.store";
import { PendingRequest } from "@/types";
const UpcomingTicket: React.FC = () => {
  const { pendingRequest, addPendingRequest, setPendingRequest } =
    usePendingRequestStore();

  useEffect(() => {
    setPendingRequest();
  }, []);

  const channel = PusherClient.subscribe("request");
  channel.bind("request-event", function (data: any) {
    const newPending = data as PendingRequest;
    addPendingRequest(newPending);
  });
  return (
    <div className="m-2 p-2 min-w-full border-2 min-h-60 rounded drop-shadow-sm">
      {pendingRequest.length > 0
        ? pendingRequest.map((req: PendingRequest, index: number) => (
            <TicketCard request={req} key={index} />
          ))
        : null}
    </div>
  );
};

export default UpcomingTicket;
