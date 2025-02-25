import { useMemo } from "react";
import { useMediaQuery } from "react-responsive";

const useMediaQueries = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  });
  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px) and (max-width: 1920px)",
  });

  const itemsPerPage = useMemo(() => {
    if (isMobile) {
      return 1;
    } else if (isTablet) {
      return 2;
    } else {
      return 3;
    }
  }, [isMobile, isTablet]);

  return {
    isMobile,
    isTablet,
    isDesktop,
    itemsPerPage,
  };
};

export default useMediaQueries;
