import { useContext, useMemo, useState } from "react";
import Icon from "./Icons/Icon";
import { UsersContext } from "../lib/context/UsersContext";
import formatDate from "../lib/utils/formatDate";
import Pagination from "./Pagination";
import Loader from "./Loader";
import Dropdown, { DropdownValue } from "./Dropdown";

export default function Users() {
  const { users, loading, setPage, pageMetaData, currentPage } =
    useContext(UsersContext);

  const dropdownItems = useMemo(
    () => [
      {
        value: "all",
        label: "All Users",
      },
      {
        value: "incomplete registration",
        label: "Incomplete Registration",
      },
      {
        value: "complete registration",
        label: "Complete Registration",
      },
    ],
    []
  );

  const [selectedValue, setSelectedValue] = useState<DropdownValue>(
    dropdownItems[0]
  );

  const filteredUsers = useMemo(() => {
    if (selectedValue.value === "incomplete registration")
      return users.filter(
        (user) => user.shop === null && user.business === null
      );
    else if (selectedValue.value === "complete registration")
      return users.filter((user) => user.shop || user.business);
    else return users;
  }, [selectedValue, users]);

  return (
    <div className="py-12 px-6 overflow-auto max-h-screen flex flex-col gap-10">
      <div className="flex bg-white rounded-lg py-3 px-2 justify-between items-center">
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

      <Dropdown
        value={dropdownItems[0]}
        onChange={(value) => setSelectedValue(value)}
        items={dropdownItems}
      />
      {/* The dropdown above helps us filter for complete/incomplete registration of users */}

      <div className="bg-white rounded-lg pb-6 flex-1 transition-all duration-1000">
        {loading ? (
          <Loader />
        ) : (
          <table className="table-fixed min-w-full ">
            <thead className="text-dxp-grey-7 text-sm font-normal  border-dxp-green-1 border-b ">
              <tr className="[&>th]:text-start first:[&>th]:pl-2 [&>th]:py-4 [&>th]:!font-normal">
                <th>Name</th>
                <th>Location</th>
                <th>Date Joined</th>
                <th>Services Requested</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="relative top-6 text-dxp-grey-7 text-sm">
              {filteredUsers.map((user) => (
                <tr
                  className="first:[&>td]:pl-2 [&>td]:py-4 border-b border-dxp-green-4/50 last:border-none"
                  key={user.id}
                >
                  <td>
                    {user.first_name} {user.last_name}
                  </td>
                  <td>
                    {user.business?.contact_address.full_address ??
                      user.shop?.contact_address.full_address ??
                      "-"}
                  </td>
                  <td>{formatDate(user.created_at)}</td>
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
        )}
      </div>

      {pageMetaData && (
        <Pagination
          currentPage={currentPage}
          setPage={setPage!}
          metaData={pageMetaData}
          refreshLoading={loading}
        />
      )}
    </div>
  );
}
