import React, { useEffect } from "react";
import { Pagination } from "react-bootstrap";

interface props {
  setCurrentPage: (i: any) => void;
  itemsCount: number;
  itemsPerPage: number;
  currentPage: number;
  alwaysShown: boolean;
}

const PaginationComponent: React.FC<props> = ({
  itemsCount,
  itemsPerPage,
  currentPage,
  setCurrentPage,
  alwaysShown = true,
}) => {
  const pagesCount = Math.ceil(itemsCount / itemsPerPage);
  const isPaginationShown = alwaysShown ? true : pagesCount > 1;
  const isCurrentPageFirst = currentPage === 1;
  const isCurrentPageLast = currentPage === pagesCount;

  const changePage = (number: any) => {
    if (currentPage === number) return;
    setCurrentPage(number);
    // scrollToTop();
  };

  const onPageNumberClick = (pageNumber: any) => {
    changePage(pageNumber);
  };

  const onPreviousPageClick = () => {
    changePage((currentPage: any) => currentPage - 1);
  };

  const onNextPageClick = () => {
    changePage((currentPage: any) => currentPage + 1);
  };

  const setLastPageAsCurrent = () => {
    if (currentPage > pagesCount) {
      setCurrentPage(pagesCount);
    }
  };

  let isPageNumberOutOfRange: any;

  const pageNumbers = [...new Array(pagesCount || 1)].map((_, index) => {
    const pageNumber = index + 1;
    const isPageNumberFirst = pageNumber === 1;
    const isPageNumberLast = pageNumber === pagesCount;
    const isCurrentPageWithinTwoPageNumbers =
      Math.abs(pageNumber - currentPage) <= 2;

    if (
      isPageNumberFirst ||
      isPageNumberLast ||
      isCurrentPageWithinTwoPageNumbers
    ) {
      isPageNumberOutOfRange = false;
      return (
        <Pagination.Item
          key={pageNumber}
          onClick={() => onPageNumberClick(pageNumber)}
          active={pageNumber === currentPage}
        >
          {pageNumber}
        </Pagination.Item>
      );
    }

    if (!isPageNumberOutOfRange) {
      isPageNumberOutOfRange = true;
      return <Pagination.Ellipsis key={pageNumber} className="muted" />;
    }

    return null;
  });

  useEffect(setLastPageAsCurrent, [pagesCount, currentPage, setCurrentPage]);

  return (
    <>
      {isPaginationShown && (
        <Pagination>
          <Pagination.Prev
            onClick={onPreviousPageClick}
            disabled={isCurrentPageFirst}
          />
          {pageNumbers}
          <Pagination.Next
            onClick={onNextPageClick}
            disabled={isCurrentPageLast}
          />
        </Pagination>
      )}
    </>
  );
};

export default PaginationComponent;
