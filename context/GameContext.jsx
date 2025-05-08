// src/context/GameContext.jsx
import React, { createContext, useContext, useState, useMemo } from "react";
import compositions from "../data/comps";
import { useBoard } from "./BoardContext";
import units from "../data/units";
import { traits as traitData } from "../data/traits";

const GameContext = createContext();

export function GameProvider({ children }) {
  // Initialize with a random composition from the pool
  const [composition, setComposition] = useState(
    compositions[Math.floor(Math.random() * compositions.length)]
  );

  // Pick a new random composition
  const pickRandomComposition = () => {
    const comp = compositions[Math.floor(Math.random() * compositions.length)];
    setComposition(comp);
  };

  // Pick composition by its ID
  const pickCompositionById = (id) => {
    const comp = compositions.find((c) => c.id === id);
    if (comp) setComposition(comp);
  };

  // Pull in the current board & headliner from BoardContext
  const { team, headliner: boardHeadliner } = useBoard();

  // Compute cost distribution of the target composition
  const costDistribution = useMemo(() => {
    const dist = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    composition.units.forEach((unitId) => {
      const u = units.find((x) => x.id === unitId);
      if (u) dist[u.cost] += 1;
    });
    return dist;
  }, [composition]);

  // Determine if the player has solved the composition
  const isSolved = useMemo(() => {
    // 1. Same number of units
    if (team.length !== composition.units.length) return false;

    // 2. Same unit IDs (order-agnostic)
    const targetIds = [...composition.units].sort();
    const boardIds = [...team.map((u) => u.id)].sort();
    if (targetIds.some((id, i) => id !== boardIds[i])) return false;

    // 3. Headliner must match exactly (or both null)
    if (composition.headliner) {
      if (
        !boardHeadliner ||
        boardHeadliner.unitId !== composition.headliner.unitId ||
        boardHeadliner.traitId !== composition.headliner.traitId
      ) {
        return false;
      }
    } else if (boardHeadliner) {
      return false;
    }

    return true;
  }, [team, boardHeadliner, composition]);

  const compositionActiveTraits = useMemo(() => {
    const counts = {};
    // count each trait on the target comp
    composition.units.forEach((unitId) => {
      const u = units.find((x) => x.id === unitId);
      u.traits.forEach((t) => {
        counts[t] = (counts[t] || 0) + 1;
      });
    });
    // apply headliner bonus if set
    if (composition.headliner) {
      counts[composition.headliner.traitId] =
        (counts[composition.headliner.traitId] || 0) + 1;
    }
    // map into { id: { name, count } }
    return Object.entries(counts).reduce((acc, [id, count]) => {
      const def = traitData.find((t) => t.id === id);
      acc[id] = { name: def?.name || id, count };
      return acc;
    }, {});
  }, [composition]);

  return (
    <GameContext.Provider
      value={{
        composition,
        setComposition,
        pickRandomComposition,
        pickCompositionById,
        costDistribution,
        isSolved,
        compositions,
        compositionActiveTraits,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return ctx;
}
