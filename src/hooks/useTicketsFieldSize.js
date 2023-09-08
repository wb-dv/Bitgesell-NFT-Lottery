import { useCallback, useEffect, useState } from 'react';
import { useMatchMedia } from './useMatchMedia';

const getFieldSize = (isPortrait) => {
  const vw = window.innerWidth / 100;

  let width = 62.66,
    height = 7.6;

  if (isPortrait) (width = 90.187), (height = 41.82);

  width *= vw;
  height *= vw;

  return {
    width,
    height,
    area: width * height,
  };
};

export const useTicketsFieldSize = () => {
  const { isPortrait } = useMatchMedia();

  const [fieldSize, setFieldSize] = useState(getFieldSize(isPortrait));

  const resizeField = useCallback(() => {
    setFieldSize(getFieldSize(isPortrait));
  }, [isPortrait]);

  useEffect(() => {
    window.addEventListener('resize', resizeField);

    return () => {
      window.removeEventListener('resize', resizeField);
    };
  }, [resizeField]);

  return fieldSize;
};
