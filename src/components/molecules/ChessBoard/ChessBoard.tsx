import { Data } from "@/@types";
import { github } from "@/data";
import { useControl, useLifecycle } from "@/hooks";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { ChessBox } from "../../atoms";

type Props = {
  gameData: Array<Data>;
};

const ChessBoard: React.FC<Props> = ({ gameData }) => {
  const [data, setData] = useState(gameData);
  const [selected, setSelected] = useState<string[]>([]);
  const [activeBox, setActiveBox] = useState<number | null>(null);
  const [moves, setMoves] = useState(0);
  const [isPlayedSuccessfully, setPlayedSuccessfully] = useState(false);

  const { handleBox, handleReset } = useControl({
    setActiveBox,
    setMoves,
    selected,
    setSelected,
    setData,
    moves,
    setPlayedSuccessfully,
    gameData,
  });

  useLifecycle({
    data,
    setData,
    selected,
    setSelected,
    setPlayedSuccessfully,
  });

  return (
    <section>
      {isPlayedSuccessfully ? (
        <>
          <h3 className="text-lg font-semibold mb-12 text-center text-green-600">
            Fantastic! You played well
          </h3>
          <Button color="success" onClick={handleReset}>
            Interesting! I'll play again
          </Button>
        </>
      ) : (
        <>
          <div className="flex justify-between">
            <span className="text-2xl">Moves: {moves}</span>
            <span className="text-2xl">
              Selected: {selected.join(", ") || "none"}
            </span>
          </div>
          <div className="grid grid-cols-4 mt-4">
            {data.map((box) => (
              <ChessBox
                key={box.id}
                name={box.name}
                turn={box.id === activeBox || box.matched}
                onClick={handleBox.bind(null, box.name, box.id!)}
              />
            ))}
          </div>
          <div className="flex justify-between mt-4">
            <Button>
              <a href={github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </Button>
            <Button color="danger" onClick={handleReset}>
              I Resign
            </Button>
          </div>
        </>
      )}
    </section>
  );
};

export default ChessBoard;
