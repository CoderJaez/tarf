import React from "react";
import Table from "../form_elements/Table";
const UserList: React.FC = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th className="min-w-[50px] px-4 py-4 font-medium text-slate-700 text-left">
            Name
          </th>
          <th className="min-w-[50px] px-4 py-4 font-medium text-slate-700 text-left">
            Username
          </th>
          <th className="min-w-[50px] px-4 py-4 font-medium text-slate-700 text-left">
            Email
          </th>
          <th className="min-w-[50px] px-4 py-4 font-medium text-slate-700 text-left">
            Created At
          </th>
          <th className="min-w-[50px] px-4 py-4 font-medium text-slate-700 text-left">
            Updated At
          </th>
          <th className="min-w-[50px] px-4 py-4 font-medium text-slate-700 text-left">
            Action
          </th>
        </tr>
      </thead>
    </Table>
  );
};

export default UserList;
