import { RefObject, useEffect, useRef } from "react";

export const useDimensions = (ref: RefObject<HTMLDivElement>) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current?.offsetWidth as number;
    dimensions.current.height = ref.current?.offsetHeight as number;
  }, []);

  return dimensions.current;
};
