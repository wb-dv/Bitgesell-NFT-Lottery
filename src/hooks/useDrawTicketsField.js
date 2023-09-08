import { useMemo } from 'react';

const gray = '#DBDED7';

const drawTicketsField = (fieldSize, canvas, tickets, ticketsAmount, addressMap, ticketsSuccess) => {
  if (canvas === undefined || !ticketsSuccess) return {};

  canvas.width = fieldSize.width;
  canvas.height = fieldSize.height;

  const ctx = canvas.getContext('2d');

  const firstRectSize = Math.sqrt(fieldSize.area / ticketsAmount);

  const colAmount = Math.round(fieldSize.width / firstRectSize);
  const rowAmount = Math.round(fieldSize.height / firstRectSize);

  const rectWidth = fieldSize.width / colAmount;
  const rectHeight = fieldSize.height / rowAmount;

  ctx.fillStyle = gray;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < ticketsAmount; i++) {
    const ticket = tickets[i];

    if (ticket === -1) continue;

    const color = '#' + addressMap[ticket].address.slice(-6);

    const currCol = i % colAmount;
    const currRow = Math.trunc(i / colAmount);

    ctx.fillStyle = color;
    ctx.fillRect(currCol * rectWidth, currRow * rectHeight, rectWidth, rectHeight);
  }

  return {
    ticketWidth: rectWidth,
    ticketHeight: rectHeight,
    colAmount,
    rowAmount,
  };
};

export const useDrawTicketsField = (fieldSize, canvas, tickets, ticketsAmount, addressMap, ticketsSuccess) => {
  return useMemo(() => {
    return drawTicketsField(fieldSize, canvas, tickets, ticketsAmount, addressMap, ticketsSuccess);
  }, [fieldSize, canvas, tickets, ticketsAmount, addressMap, ticketsSuccess]);
};
