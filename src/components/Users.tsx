import { useContext } from "react";
import Icon from "./Icons/Icon";
import { UsersContext } from "../lib/context/UsersContext";

export default function Users() {
  const { users } = useContext(UsersContext);
  return (
    <div className="py-12 px-6 overflow-auto max-h-screen">
      <div className="flex bg-white rounded-lg py-3 px-2 justify-between items-center mb-8">
        <h1 className="font-semibold text-xl">Users</h1>
        <div className="flex gap-6 items-center">
          <div className="relative -top-[1px]">
            <Icon name="notification" />
          </div>
          <button className="flex items-center">
            <div className="w-8 h-8 rounded-full flex justify-center items-center bg-dxp-green-2 mr-1">
              <Icon name="user" />
            </div>
            <p className="text-sm font-normal mr-2">Admin</p>
            <Icon name="chevron_down" />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg pb-6">
        <table className="table-fixed min-w-full ">
          <thead className="text-dxp-grey-7 text-sm font-normal [&>th]:text-start border-b border-dxp-green-1 first:[&>th]:pl-2 [&>th]:py-4 [&>th]:!font-normal">
            <th>Name</th>
            <th>Location</th>
            <th>Date Joined</th>
            <th>Services Requested</th>
            <th>Action</th>
          </thead>
          <tbody className="relative top-6 text-dxp-grey-7 text-sm">
            {users.map((user) => (
              <tr className="first:[&>td]:pl-2 [&>td]:py-4" key={user.id}>
                <td>
                  {user.first_name} {user.last_name}
                </td>
                <td>
                  {user.business?.contact_address.full_address ??
                    user.shop?.contact_address.full_address ??
                    "-"}
                </td>
                <td>4td Mar 2023</td>
                <td>
                  <span className="block translate-x-1/4">1</span>
                </td>
                <td className="pl-5">
                  <Icon name="three_dots" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
