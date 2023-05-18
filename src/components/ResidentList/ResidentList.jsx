import { useState } from "react";
import PropTypes from "prop-types";
import ResidentCard from "../ResidentCard/ResidentCard";
import { usePagination } from "../../hooks/usePagination";
import "./ResidentList.css";

// Paginación
// Dividir en grupos mas pequeños una lista de elementos
// Por lo tanto minimamente se necesitan dos datos: la lista y la cantidad de de elementos que debe tener cada grupo.

//  0 1 2 3 4 5 6 7 8 9
// [1,2,3,4,5,6,7,8,9,10]

// Paginar en grupos de 3

// 0 = 3 x 0 = 3 x (1 - 1)
//     2 = 3 - 1 = (3 x 1) - 1
// [,1,2,3] -> Pagina 1

// 3 = 3 x 1 = 3 x (2 - 1)
//     5 = 6 - 1 = (3 x 2) - 1
// [4,5,6] -> Pagina 2

// 6 = 3 x 2 = 3 x (3 - 1)
//     8 = 9 - 1  = (3 x 3) - 1
// [7,8,9] -> Pagina 3

// 9 = 3 x 3 = 3 x (4 - 3)
//     11 = 12 - 1 = (3 x 4) - 1
// [10,?,?] -> Pagina 4

// limiteInferior = quantity * (numberPage - 1)
// limiteSuperior = quantity * numberPage - 1

// Logica + Estado === Hook

const ResidentList = ({ residents = [] }) => {
  const [quantityPagination, setQuantityPagination] = useState(6);
  // const {
  //   currentPage: numberPage,
  //   listSlice: residentsSlice,
  //   pages,
  //   changePageTo,
  // } = usePagination(residents, quantityPagination);
  const [numberPage, residentsSlice, pages, changePageTo] = usePagination(
    residents,
    quantityPagination
  );

  // const getPageButtons = () => {
  //   const buttons = [];

  //   for (let i= 1; i <= totalPages; i++) {
  //     const button = <button onClick={() => changePageTo(i)}>{i}</button>;

  //     buttons.push(button);
  //   }

  //   return buttons;
  // };

  return (
    <>
    <div className="quantity_per_page">
      <select
        name="quantity_per_page"
        value={quantityPagination}
        onChange={(e) => setQuantityPagination(Number(e.target.value))}
      >
        <option>1</option>
        <option>5</option>
        <option>10</option>
        <option>20</option>
      </select>
    </div>

      {!residentsSlice.length && <p>No hay residents en esta ubicación</p>}

      {Boolean(residentsSlice.length) && (
        <ul className="info">
          {residentsSlice.map((residentUrl) => (
            <li key={residentUrl}>
              <ResidentCard url={residentUrl} />
            </li>
          ))}
          ;
        </ul>
      )}
          <div className="change_page">
            <button onClick={() => changePageTo(numberPage - 1)}>‹</button>
            {/* {getPageButtons()} */}
            {pages.map((i) => (
              <button
                key={i}
                onClick={() => changePageTo(i)}
                style={{ color: numberPage === i ? "red" : undefined }}
              >
                {i}
              </button>
            ))}
            <button onClick={() => changePageTo(numberPage + 1)}>›</button>
          </div>
    </>
  );
};

ResidentList.propTypes = {
  residents: PropTypes.array,
};

export default ResidentList;
