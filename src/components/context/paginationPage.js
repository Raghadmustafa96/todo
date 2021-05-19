import React, { useState } from 'react';
export const PaginationContext = React.createContext();

function Pagination(props) {

  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(3); // default 3

  // last index
  const lastIndex = currentPage * itemPerPage;

  // first Index
  const firstIndex = lastIndex - itemPerPage;

  // sort difficulty
  const list = props.list.sort((a, b) => {
    if (a.difficulty > b.difficulty) {
      return 1;
    } else {
      return -1;
    }
  });

  let currentItem = list.slice(firstIndex, lastIndex);


  const paginate = pageNumber => setCurrentPage(pageNumber);
  const setItem = numberOfPages => setItemPerPage(numberOfPages);

  const state = {
    currentPage,
    itemPerPage,
    currentItem,
    paginate,
    setCurrentPage,
    setItemPerPage,
    setItem
  }

  return (
    <PaginationContext.Provider value={state}>
      {props.children}
    </PaginationContext.Provider>
  );
}

export default Pagination;
