import { createContext, useContext, useState } from "react";
import { candidateDetails } from "../data";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [candidateData, setCandidateData] = useState(candidateDetails);
  return (
    <DataContext.Provider value={{ candidateData, setCandidateData }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };
