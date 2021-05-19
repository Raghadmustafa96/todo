import React, { useContext } from 'react';
import { PaginationContext } from '../context/paginationPage'

const Pagination = ({ totalNum }) => {

  const pagination = useContext(PaginationContext);
  let pageNum = [];

  //.....................................

  let number = Math.ceil(totalNum / pagination.itemPerPage);

  for ( let i = 1 ; i <= number ; i++ ) {
    pageNum.push(i);
  }

  //.....................................

  return (
    <nav style={{ margin:'1rem'}}>
      <ul className='pagination'>
        {pageNum.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => pagination.paginate(number)} className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>

      <ul className='pagination'>
        <li>
          <a onClick={pageNum.length != pagination.currentPage ? () => pagination.paginate(pagination.currentPage++) : () => pagination.paginate(pagination.currentPage)} className='page-link'> Next </a>
        </li>

        <li>

          <a onClick={pagination.currentPage > 1 ? () => pagination.paginate(pagination.currentPage--) : () => pagination.paginate(pagination.currentPage)} className='page-link'>Previous </a>

        </li>
      </ul>
    </nav>
  );
};

export default Pagination;