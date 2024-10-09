import React from "react";
const TicketCard: React.FC = () => {
  return (
    <div className="border-2 rounded p-4 w-auto mb-4">
      <h1 className="text-left text-lg text-teal-800 font-semibold">
        Fullname
      </h1>
      <div>
        <h2 className="text-red-600 mb-2">Request Type</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos natus
          doloremque, accusamus nam officiis in, excepturi, sunt incidunt eos
          aspernatur iusto maiores cum porro consequatur sequi expedita ipsum
          quam? Illum.
        </p>
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
