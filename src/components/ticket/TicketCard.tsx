"use client";
import React from "react";
import { PendingRequest } from "@/types";
import moment from "moment";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";
import usePendingRequestStore from "@/stores/pendingTicket.store";
type Props = {
  request: PendingRequest;
};

const TicketCard: React.FC<Props> = ({ request }) => {
  const session = useSession();
  const { deletePendingRequest } = usePendingRequestStore();
  const handleAssignTechClick = (requestId: number) => {
    try {
      Swal.fire({
        title: "Accepting ticket...",
        icon: "info",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
          fetch(`/api/tickets/${requestId}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ userId: session.data?.user?.id as string }),
          })
            .then((res) => res.json())
            .then((data) => {
              Swal.close();
              Swal.fire({
                title: "Success!",
                icon: "success",
                text: data.message,
              });

              deletePendingRequest(requestId);
            })
            .catch((err) => {
              Swal.fire({
                title: "Error",
                icon: "error",
                text: err.message,
              });
            });
        },
      });
    } catch (error) {
      Swal.fire({
        title: "Something went wrong. ",
        icon: "error",
        text: "Please contact rictu9 personnel.",
      });
    }
  };
  return (
    <div className="border-2 rounded p-4 w-auto mb-4">
      <h1 className="text-left text-lg text-teal-800 font-semibold">
        {request.office} - {request.name}
      </h1>
      <p className="text-sm italic text-gray-500 mb-2">
        {moment(request.dateRequested).format("MMMM DD, YYYY HH:mm A")}
      </p>
      <div>
        <h2 className="text-red-600 mb-2">{request.requestTypes.join(", ")}</h2>
        <p>{request.remarks}</p>
        <div className="flex mt-2 gap-4">
          <button
            type="button"
            className="px-4 py-1.5 text-sm rounded bg-cyan-800 text-slate-200"
          >
            View More
          </button>
          <button
            type="button"
            className="px-4 py-1 text-sm rounded bg-orange-800 text-slate-200"
            onClick={() => handleAssignTechClick(request.id)}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
