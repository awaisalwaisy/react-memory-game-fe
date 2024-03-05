type Props = {
  name: string;
  turn: boolean;
  onClick?: () => void;
};

const ChessBox: React.FC<Props> = ({ name, turn, onClick }) => {
  const src = "/chess/" + name + ".png";

  return (
    <div onClick={onClick} className="cursor-pointer">
      {turn ? (
        <img src={src} alt={name} width={150} height={150} title={name} />
      ) : null}
      {!turn ? (
        <img src={"/cover.png"} alt={name} width={150} height={150} />
      ) : null}
    </div>
  );
};

export default ChessBox;
