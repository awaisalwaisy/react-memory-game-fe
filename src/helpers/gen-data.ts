import { Data } from "@/@types";

export const genData = (data: Array<Data>) => {
  return [...data, ...data]
    .sort(() => Math.random() - 0.5)
    .flatMap((d) => ({
      ...d,
      id: Math.random(),
    }));
};
