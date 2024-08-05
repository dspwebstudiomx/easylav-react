import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const useMediaQueries = () => {
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  });
  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px) and (max-width: 1920px)",
  });

  useEffect(() => {
    if (isMobile) {
      setItemsPerPage(1);
    } else if (isTablet) {
      setItemsPerPage(2);
    } else if (isDesktop) {
      setItemsPerPage(3);
    } else {
      setItemsPerPage(3);
    }
  }, [isMobile, isTablet, isDesktop, itemsPerPage]);

  return {
    isMobile,
    isTablet,
    isDesktop,
    itemsPerPage,
  };
};

export default useMediaQueries;
