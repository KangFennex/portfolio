import { createContext, useContext, useState } from "react";

const CurrentPageContext = createContext();

export function useCurrentPage() {
  return useContext(CurrentPageContext);
}

export function CurrentPageProvider({ children }) {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <CurrentPageContext.Provider value={{ currentPage }}>
      {children}
    </CurrentPageContext.Provider>
  );
}
