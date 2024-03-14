import { createContext, useEffect, useState } from "react";
import { User } from "../types";

type ContextType = {
  users: User[];
  loading: boolean;
};

export const UsersContext = createContext<ContextType>({
  users: [],
  loading: false,
});

export const UsersContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://beta.getdexterapp.com/api/test");
      const response = await res.json();
      console.log(response);
      setLoading(false);

      return response.data as User[];
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers().then((users) => users && setUsers(users));
  }, []);

  useEffect(() => console.log(users), [users]);

  return (
    <UsersContext.Provider
      value={{
        users,
        loading,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
