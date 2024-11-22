import { useEffect, useState } from "react";

const usePagination = (data, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState([]);

  useEffect(() => {
    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Asegúrate de que currentPage no exceda el número total de páginas
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    } else if (currentPage < 1) {
      setCurrentPage(1);
    }

    // Calcula el índice de inicio y actualiza los datos paginados
    const startIndex = (currentPage - 1) * itemsPerPage;
    setPaginatedData(data.slice(startIndex, startIndex + itemsPerPage));
  }, [currentPage, data, itemsPerPage]); // Dependencias correctas

  const goToPage = (page) => {
    setCurrentPage(
      Math.max(1, Math.min(page, Math.ceil(data.length / itemsPerPage))),
    );
  };

  const handlePrevPage = () => goToPage(currentPage - 1);
  const handleNextPage = () => goToPage(currentPage + 1);

  return {
    paginatedData,
    goToPage,
    handlePrevPage,
    handleNextPage,
    currentPage,
  };
};

export default usePagination;
