import { PageMetaData } from "../lib/types";
import Icon from "./Icons/Icon";

const Pagination = ({
  currentPage,
  setPage,
  metaData,
  refreshLoading,
}: {
  currentPage: number;
  setPage: (page: number) => void;
  metaData: PageMetaData;
  refreshLoading: boolean;
}) => {
  const handleNext = () =>
    currentPage < metaData.last_page && setPage(currentPage + 1);
  const handlePrev = () => currentPage > 1 && setPage(currentPage - 1);
  return (
    <div className="bg-white rounded-[4px] px-3 py-2 flex justify-between mt-1 items-center">
      <div className="text-xs text-dxp-grey-7">
        {metaData.from}-{metaData.to} of {metaData.total} items
      </div>
      <div className="flex gap-6 items-center">
        <button className="" onClick={handlePrev}>
          <Icon name="chevron_left_in_square" />
        </button>
        <div className="flex gap-1">
          {Array(metaData.last_page)
            .fill(metaData.last_page)
            .map((_, index) => {
              const page = index + 1;
              return (
                <button
                  key={index}
                  onClick={() => setPage(page)}
                  className={`w-6 h-6 text-dxp-grey-7 flex items-center justify-center rounded-[4px] text-xs ${
                    page === currentPage && "bg-dxp-green-1 text-white"
                  } `}
                >
                  {refreshLoading && page === currentPage ? <Loader /> : page}
                </button>
              );
            })}
        </div>
        <button onClick={handleNext}>
          <Icon name="chevron_right_in_square" />
        </button>
      </div>
    </div>
  );
};

const Loader = () => (
  <svg
    width="38"
    height="38"
    viewBox="0 0 38 38"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#FFF"
    className="scale-50"
  >
    <g fill="none" fillRule="evenodd">
      <g transform="translate(1 1)" strokeWidth="2">
        <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
        <path d="M36 18c0-9.94-8.06-18-18-18">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 18 18"
            to="360 18 18"
            dur="1s"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </g>
  </svg>
);

export default Pagination;
