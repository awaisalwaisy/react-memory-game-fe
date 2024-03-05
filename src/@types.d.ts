export type Data = {
  id?: number;
  name: string;
  matched: boolean;
};

export type ControlParams = {
  setActiveBox: React.Dispatch<React.SetStateAction<number | null>>;
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
  moves: number;
  setMoves: React.Dispatch<React.SetStateAction<number>>;
  setData: React.Dispatch<React.SetStateAction<Data[]>>;
  setPlayedSuccessfully: React.Dispatch<React.SetStateAction<boolean>>;
  gameData: Array<Data>;
};

export type LifecycleParams = {
  data: Array<Data>;
  setData: React.Dispatch<React.SetStateAction<Data[]>>;
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
  setPlayedSuccessfully: React.Dispatch<React.SetStateAction<boolean>>;
};
