import { useState } from "react";
import { PageMetaData } from "../types";

const usePagination = (page: number) => {
  const [currentPage, setCurrentPage] = useState(page);
  const [pageMetaData, setPageMetaData] = useState<PageMetaData | null>(null);

  const setPage = (page: number) => setCurrentPage(page);
  const setMetaData = (pageMetaData: PageMetaData) =>
    setPageMetaData(pageMetaData);
  return { currentPage, setPage, pageMetaData, setPageMetaData: setMetaData };
};

export default usePagination;
