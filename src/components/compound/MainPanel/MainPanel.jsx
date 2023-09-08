import { InfoBlock } from '@compound/InfoBlock/InfoBlock';
import { Tickets } from '@compound/Tickets/Tickets';
import { LeaderBoard } from '../LeaderBoard/LeaderBoard';
import { UserScore } from '../UserScore/UserScore';

import styles from './MainPanel.module.scss';

export function MainPanel() {
  return (
    <section className={styles.MainPanel}>
      <div className={styles.MainPanel__row}>
        <Tickets />
        <InfoBlock />
      </div>
      <div className={styles.MainPanel__row}>
        <UserScore />
        <LeaderBoard />
      </div>
    </section>
  );
}
