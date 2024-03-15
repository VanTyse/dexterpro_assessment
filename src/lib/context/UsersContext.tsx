import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { PageMetaData, User } from "../types";
import usePagination from "../hooks/usePagination";

type ContextType = {
  users: User[];
  loading: boolean;
  pageMetaData: PageMetaData | null;
  currentPage: number;
  setPage?: (page: number) => void;
  setPageMetaData?: (meta: PageMetaData) => void;
};

export const UsersContext = createContext<ContextType>({
  users: [],
  loading: false,
  pageMetaData: null,
  currentPage: 1,
});

export const UsersContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { currentPage, setPage, setPageMetaData, pageMetaData } =
    usePagination(1);

  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  const abortController = useMemo(() => new AbortController(), [currentPage]);
  const signal = useMemo(() => abortController.signal, [abortController]);

  const fetchUsers = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://beta.getdexterapp.com/api/test?page=${currentPage}`,
        { signal }
      );
      const response = await res.json();
      setLoading(false);

      setPageMetaData(response.meta as PageMetaData);

      return response.data as User[];
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [currentPage]);

  useEffect(() => {
    fetchUsers().then((users) => users && setUsers(users));
  }, [currentPage]);

  return (
    <UsersContext.Provider
      value={{
        users,
        loading,
        currentPage,
        setPage,
        pageMetaData,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
