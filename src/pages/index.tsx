import { ChessBoard } from "@/components";
import { data } from "@/data";
import { genData } from "@/helpers/gen-data";

const gameData = genData(data);

const Home = () => {
  return (
    <main className="page">
      <h1 className="text-3xl font-bold mb-12 text-center">
        React Memory Game
      </h1>

      <ChessBoard gameData={gameData} />
    </main>
  );
};

export default Home;

/**
 *
 * https://github.com/BrandonDyer64/Memory-Game
 * https://github.com/emanuelecaurio/react-card-memory-game/blob/main/src/MemoryGame.tsx
 * watch net ninja playlist
 *
 *
 */
