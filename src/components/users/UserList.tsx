"use client";
import React from "react";
import Table from "../form_elements/Table";
import { Edit, Delete } from "lucide-react";
import User from "@/models/User";
import { useRouter } from "next/navigation";
import moment from "moment";
type Props = {
  users: User[];
};
const UserList: React.FC<Props> = ({ users }) => {
  const router = useRouter();

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
      <tbody>
        {users.length > 0
          ? users.map((user, index) => (
              <tr key={index}>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-slate-700">{user.name}</p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-slate-700">{user.username}</p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-slate-700">{user.email}</p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-slate-700">
                    {moment(user.createdAt.toString()).format(
                      "MM DD, YYYY hh:mm:ss A"
                    )}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-slate-700">
                    {moment(user.updatedAt.toString()).format(
                      "MM DD, YYYY hh:mm:ss A"
                    )}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <div className="flex justify-between">
                    <button
                      className="inline-block rounded text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-200 focus:bg-primary-accent-200 focus:outline-none focus:ring-0 active:bg-primary-accent-200 dark:bg-primary-300 dark:hover:bg-primary-400 dark:focus:bg-primary-400 dark:active:bg-primary-400"
                      data-twe-toggle="tooltip"
                      data-twe-placement="bottom"
                      data-twe-ripple-init
                      data-twe-ripple-color="light"
                      title="Edit"
                      onClick={() => router.push(`/users/update/${user.id}`)}
                    >
                      <Edit color="yellow" />
                    </button>
                    <button
                      className="inline-block rounded text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-200 focus:bg-primary-accent-200 focus:outline-none focus:ring-0 active:bg-primary-accent-200 dark:bg-primary-300 dark:hover:bg-primary-400 dark:focus:bg-primary-400 dark:active:bg-primary-400"
                      data-twe-toggle="tooltip"
                      data-twe-placement="bottom"
                      data-twe-ripple-init
                      data-twe-ripple-color="light"
                      title="Delete"
                    >
                      <Delete color="orange" />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          : null}
      </tbody>
    </Table>
  );
};

export default UserList;
