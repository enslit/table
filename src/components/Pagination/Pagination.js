import React from 'react';
import './pagination.scss';

function Pagination(props) {
  const {total, perPage, current} = props;

  const startRange = (current * perPage - perPage) + 1;
  const endRange = total <= perPage ? total : (current * perPage) + 1;
  const first = current === 1;
  const last = endRange === total;

  return (
    <div className="pagination">
      <div className="pagination__per-page">
        <label htmlFor="perPage" className="pagination__label">Rows per page:</label>
        <select className="pagination__page-size" id="perPage" value={perPage}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
      <div className="pagination__count">
        <span className="pagination__count_type_from">{startRange}</span>-<span
        className="pagination__count_type_to">{endRange}</span> of <span
        className="pagination__count_type_total">{total}</span>
      </div>
      <ul className="pagination__arrows">
        <li className="pagination__arrow">
          <button
            type="button"
            className={`pagination__button pagination__button_type_first ${first && 'pagination__button_disabled'}`}
            disabled={first}
          >
            <span className="material-icons">first_page</span>
          </button>
        </li>
        <li className="pagination__arrow">
          <button
            type="button"
            className={`pagination__button pagination__button_type_previous ${first && 'pagination__button_disabled'}`}
            disabled={first}
          >
            <span className="material-icons">chevron_left</span>
          </button>
        </li>
        <li className="pagination__current">
          {current}
        </li>
        <li className="pagination__arrow">
          <button
            type="button"
            className={`pagination__button  pagination__button_type_next ${last && 'pagination__button_disabled'}`}
            disabled={last}
          >
            <span className="material-icons">chevron_right</span>
          </button>
        </li>
        <li className="pagination__arrow">
          <button
            type="button"
            className={`pagination__button  pagination__button_type_last ${last && 'pagination__button_disabled'}`}
            disabled={last}
          >
            <span className="material-icons">last_page</span>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;