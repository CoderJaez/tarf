import React from "react";
import Table from "../form_elements/Table";
import { getRequest } from "@/services/request";
import moment from "moment";
const Ticket: React.FC = async () => {
  const tickets = await getRequest();
  return (
    <Table>
      <thead>
        <tr>
          <th className="min-w-[50px] px-4 py-4 font-medium text-slate-700 text-left">
            Code #
          </th>
          <th className="min-w-[120px] px-4 py-4 font-medium text-slate-700 text-left">
            Division
          </th>
          <th className="min-w-[120px] px-4 py-4 font-medium text-slate-700 text-left">
            Name
          </th>
          <th className="min-w-[150px] px-4 py-4 font-medium text-slate-700 text-left">
            Remarks
          </th>
          <th className="min-w-[150px] px-4 py-4 font-medium text-slate-700 text-left">
            Datetime Requested
          </th>
          <th className="min-w-[150px] px-4 py-4 font-medium text-slate-700 text-left">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {tickets.length > 0
          ? tickets.map((ticket, index) => (
              <tr key={index}>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-slate-700">{ticket.code}</p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-slate-700 ">{ticket.Office.acronym}</p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-slate-700 ">{ticket.name}</p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-slate-700 ">{ticket.remarks}</p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-slate-700 ">
                    {moment(ticket.dateRequested.toString()).format(
                      "MM DD, YYYY HH:mm A"
                    )}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark"></td>
              </tr>
            ))
          : null}
      </tbody>
    </Table>
  );
};

export default Ticket;
