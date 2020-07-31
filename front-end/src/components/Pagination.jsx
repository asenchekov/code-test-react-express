import React from 'react';


export default function Pagination ({
  currentPage,
  prevPage,
  nextPage,
  selectPage,
}) {
  const pagesList = (() => {
    const list = [];

    let lastInList = 5;
    while (currentPage > lastInList) lastInList += 5;

    while (list.length < 5) list.unshift(lastInList--);

    return list;
  })();

  return (
    <div className="pagination-container">
      <div
        className="page-item"
        onClick={prevPage}
      >
        {'<'}
      </div>
        {
          pagesList.map((page) => (
            <div
              className={page === currentPage ? "current-page" : "page-item"}
              onClick={() => selectPage(page)}
            >
              {page}
            </div>
          ))
        }
      <div
        className="page-item"
        onClick={nextPage}
      >
        {'>'}
      </div>
    </div>
  );
}
