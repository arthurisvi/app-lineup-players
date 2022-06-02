import React, { createContext, useState } from "react";

export const LineupContext = createContext({});

function LineupProvider({ children }) {
  const [lineup, setLineup] = useState([]);

  function addPlayerToLineup(footballer) {
    setLineup([...lineup, footballer]);
  }

  return (
    <LineupContext.Provider value={{ lineup, addPlayerToLineup }}>
      {children}
    </LineupContext.Provider>
  );
}

export default LineupProvider;
