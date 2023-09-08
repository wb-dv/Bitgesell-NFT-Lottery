import { useRef } from 'react';
import { Tooltip } from 'react-tooltip';

import { useTicketsFieldSize } from '@hooks/useTicketsFieldSize';
import { useGetTickets } from '@hooks/useGetTickets';
import { useDrawTicketsField } from '@hooks/useDrawTicketsField';
import { useChosenTicket } from '@hooks/useChosenTicket';

import { Title } from '@UI/Title/Title';
import { Spinner } from '@UI/Spinner/Spinner';

import styles from './Tickets.module.scss';

export function Tickets() {
  const canvasRef = useRef();

  const fieldSize = useTicketsFieldSize();

  const { tickets, addressMap, ticketsAmount, ticketsLoading, ticketsSuccess } = useGetTickets();

  const fieldInfo = useDrawTicketsField(fieldSize, canvasRef.current, tickets, ticketsAmount, addressMap, ticketsSuccess);

  const { chosenTicket, tooltipIsOpen } = useChosenTicket(canvasRef.current, tickets, ticketsAmount, addressMap, fieldInfo);

  return (
    <section className={styles.Tickets}>
      <Title>Tickets</Title>

      <div
        className={styles.Tickets__placeholder}
        style={{
          width: Math.floor(fieldSize.width),
          height: Math.floor(fieldSize.height) - 1,
        }}
      >
        <canvas
          className={styles.Tickets__field}
          ref={canvasRef}
          data-tooltip-id="ticketTooltip"
        ></canvas>

        {ticketsLoading && <Spinner />}
      </div>

      <Tooltip
        id="ticketTooltip"
        position={chosenTicket.position}
        isOpen={tooltipIsOpen}
        className={styles.Tickets__tooltip}
        classNameArrow={styles.Tickets__tooltip_arrow}
        openOnClick
      >
        <div>Ticket #{chosenTicket.number}</div>
        <div>Owner {chosenTicket.address}</div>
      </Tooltip>
    </section>
  );
}
