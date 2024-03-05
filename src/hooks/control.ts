import { ControlParams } from "@/@types";

export const useControl = ({
  setActiveBox,
  setMoves,
  selected,
  setSelected,
  setData,
  moves,
  setPlayedSuccessfully,
  gameData,
}: ControlParams) => {
  const handleBox = (name: string, id: number) => {
    // set active
    setActiveBox(id);

    // set moves
    setMoves(moves + 1);

    // validate
    if (selected.length === 2) return;

    setSelected([...selected, name]);
  };

  function handleReset() {
    setData(gameData);
    setSelected([]);
    setActiveBox(null);
    setMoves(0);
    setPlayedSuccessfully(false);
  }

  return { handleBox, handleReset };
};
