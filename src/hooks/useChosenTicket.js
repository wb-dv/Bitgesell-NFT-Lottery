import { useCallback, useEffect, useState } from 'react';

const initialState = {
  address: '',
  number: 0,
  position: { x: 0, y: 0 },
};

const getCloseDiff = () => 10 * (window.innerWidth / 100);

export const useChosenTicket = (target, tickets, ticketsAmount, addressMap, fieldInfo) => {
  const [chosenTicket, setChosenTicket] = useState(initialState);
  const [closeDiff, setCloseDiff] = useState(getCloseDiff);
  const [tooltipIsOpen, setTooltipIsOpen] = useState(false);

  const { ticketWidth, ticketHeight, colAmount } = fieldInfo;

  const changeCloseDiff = useCallback(() => {
    setCloseDiff(getCloseDiff);
  }, []);

  const closeTooltip = useCallback(() => {
    if (tooltipIsOpen) setTooltipIsOpen(false);
  }, [tooltipIsOpen]);

  const closeTooltipOnDiffPos = useCallback(
    (e) => {
      if (!tooltipIsOpen) return;

      const xDiff = Math.abs(chosenTicket.position.x - e.clientX);
      const yDiff = Math.abs(chosenTicket.position.y - e.clientY);

      if (xDiff > closeDiff || yDiff > closeDiff) setTooltipIsOpen(false);
    },
    [chosenTicket.position.x, chosenTicket.position.y, tooltipIsOpen, closeDiff]
  );

  const choseTicket = useCallback(
    (e) => {
      if (!fieldInfo) return;

      const fieldRect = e.target.getBoundingClientRect();
      const x = Math.trunc((e.clientX - fieldRect.left) / ticketWidth);
      const y = Math.trunc((e.clientY - fieldRect.top) / ticketHeight);

      const number = y * colAmount + x;
      const address = addressMap[tickets[number]]?.address || '-';

      if (number + 1 > ticketsAmount) return;

      setChosenTicket({
        number,
        address,
        position: {
          x: fieldRect.left + x * ticketWidth + ticketWidth / 2,
          y: fieldRect.top + y * ticketHeight + (ticketHeight * 2) / 3,
        },
      });

      setTooltipIsOpen(true);
    },
    [ticketWidth, ticketHeight, colAmount, tickets, addressMap, fieldInfo, ticketsAmount]
  );

  useEffect(() => {
    target?.addEventListener('click', choseTicket);
    window.addEventListener('mousemove', closeTooltipOnDiffPos);
    window.addEventListener('resize', changeCloseDiff);
    window.addEventListener('resize', closeTooltip);
    window.addEventListener('scroll', closeTooltip);

    return () => {
      target?.removeEventListener('click', choseTicket);
      window.removeEventListener('mousemove', closeTooltipOnDiffPos);
      window.removeEventListener('resize', changeCloseDiff);
      window.removeEventListener('resize', closeTooltip);
      window.removeEventListener('scroll', closeTooltip);
    };
  }, [target, choseTicket, closeTooltipOnDiffPos, changeCloseDiff, closeTooltip]);

  return { chosenTicket, tooltipIsOpen };
};
