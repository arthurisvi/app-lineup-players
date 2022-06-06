import React, { createContext, useState } from "react";

export const LineupContext = createContext({});

function LineupProvider({ children }) {
  const [lineup, setLineup] = useState([]);

  function addPlayerToLineup(footballer) {
    setLineup([...lineup, footballer]);
  }

  function removePlayerToLineup(playerId) {
    setLineup(lineup.filter((player) => player.id != playerId));
  }

  function removeAllPlayers() {
    setLineup([]);
  }

  return (
    <LineupContext.Provider
      value={{
        lineup,
        addPlayerToLineup,
        removePlayerToLineup,
        removeAllPlayers,
      }}
    >
      {children}
    </LineupContext.Provider>
  );
}

export default LineupProvider;
