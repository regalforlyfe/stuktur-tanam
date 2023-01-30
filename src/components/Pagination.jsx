import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Pagination = ({
  totalPage,
  postsPerPage,
  totalPosts,
  onClick,
  currentPage,
}) => {
  const [pageNumbers, setpageNumbers] = useState([]);
  const [current, setCurrent] = useState(1);

  const changePage = (page) => {
    let total;
    let pg = [];
    if (page === totalPage) {
      total = totalPage;
    } else {
      if (page > 4) {
        total = totalPage > 6 ? page + 2 : totalPage;
      } else {
        total = 9;
      }
    }

    if (page > 4) {
      for (let i = page - 2; i <= total; i++) {
        pg.push(i);
      }
    } else {
      for (let i = 1; i <= total; i++) {
        pg.push(i);
      }
    }

    setpageNumbers(pg);
    setCurrent(page);
  };

  useEffect(() => {
    changePage(current);
  }, []);

  return (
    <div className="flex flex-row items-center">
      <div className="flex-1">
        <p className="text-green-secondary text-xs">
          <span className="font-medium">
            {1 + (currentPage - 1) * postsPerPage}{" "}
          </span>
          to
          <span className="font-medium">
            {" "}
            {postsPerPage + (currentPage - 1) * postsPerPage}{" "}
          </span>
          of
          <span className="font-medium"> {totalPosts} </span>
          items
        </p>
      </div>

      <nav>
        <ul className="inline-flex items-center -space-x-px">
          <li>
            <button
              onClick={() => {
                if (current > 1) {
                  onClick(currentPage - 1);
                }
              }}
              className="block cursor-pointer px-3 py-2 ml-0 leading-tight text-gray-500 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Previous</span>
              <svg
                aria-hidden="true"
                className="w-5 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
          <li>
            {current >= 5 && totalPage > 10 ? (
              <>
                <button
                  onClick={() => {
                    onClick(1);
                  }}
                  className="hover:bg-green-white hover:border-green-primary border-gray-primary cursor-pointer px-3 py-1 mx-0.5 leading-tight border-2 rounded-xl text-xs font-semibold"
                >
                  1
                </button>
                <button className="hover:bg-green-white hover:border-green-primary border-gray-primary cursor-pointer px-3 py-1 mx-0.5 leading-tight border-2 rounded-xl text-xs font-semibold">
                  ...
                </button>
              </>
            ) : (
              ""
            )}

            {pageNumbers.map((number, index) => (
              <button
                key={index}
                onClick={() => {
                  onClick(number);
                  changePage(number);
                }}
                className={`${
                  current === number
                    ? "z-10 bg-green-white border-green-primary"
                    : "hover:bg-green-white hover:border-green-primary border-gray-primary cursor-pointer"
                } px-3 py-1 mx-0.5 leading-tight border-2 rounded-xl text-xs font-semibold`}
              >
                {number}
              </button>
            ))}

            {current >= 5 && totalPage > 10 && current !== totalPage ? (
              <>
                <button className="hover:bg-green-white hover:border-green-primary border-gray-primary cursor-pointer px-3 py-1 mx-0.5 leading-tight border-2 rounded-xl text-xs font-semibold">
                  ...
                </button>
                <button
                  onClick={() => {
                    onClick(totalPage);
                  }}
                  className="hover:bg-green-white hover:border-green-primary border-gray-primary cursor-pointer px-3 py-1 mx-0.5 leading-tight border-2 rounded-xl text-xs font-semibold"
                >
                  {totalPage}
                </button>
              </>
            ) : (
              ""
            )}
          </li>
          <li>
            <button
              onClick={() => {
                if (current < totalPage) {
                  onClick(currentPage + 1);
                }
              }}
              className="block cursor-pointer px-3 py-2 leading-tight text-gray-500 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Next</span>
              <svg
                aria-hidden="true"
                className="w-5 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
