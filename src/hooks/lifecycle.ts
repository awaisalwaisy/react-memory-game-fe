import { LifecycleParams } from "@/@types";
import { useEffect } from "react";

export const useLifecycle = ({
  data,
  setData,
  selected,
  setSelected,
  setPlayedSuccessfully,
}: LifecycleParams) => {
  useEffect(() => {
    if (selected.length === 2) {
      if (selected[0] === selected[1]) {
        const matchedTrue = data.map((d) => {
          if (d.name === selected[0]) {
            return {
              ...d,
              matched: true,
            };
          }
          return d;
        });

        setData(matchedTrue);

        setTimeout(() => {
          const newData = matchedTrue.filter((d) => {
            return !d.matched;
          });

          setData(newData);
        }, 2000);
        setSelected([]);
      } else {
        setSelected([]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  useEffect(() => {
    if (data.length === 0) {
      setPlayedSuccessfully(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
};
