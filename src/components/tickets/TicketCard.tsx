import React from "react";
import { PendingRequest } from "@/types";
import moment from "moment";
type Props = {
  request: PendingRequest;
};
const TicketCard: React.FC<Props> = ({ request }) => {
  return (
    <div className="border-2 rounded p-4 w-auto mb-4">
      <h1 className="text-left text-lg text-teal-800 font-semibold">
        {request.name}
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
            className="px-4 py-1 text-sm rounded bg-cyan-800 text-slate-200"
          >
            View More
          </button>
          <button
            type="button"
            className="px-4 py-1 text-sm rounded bg-orange-800 text-slate-200"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
