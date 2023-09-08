import { Title } from '@UI/Title/Title';
import { TokensPanel } from '../TokensPanel/TokensPanel';

import styles from './UserScore.module.scss';

export function UserScore() {
  return (
    <section className={styles.UserScore}>
      <Title>Your score</Title>
      <TokensPanel />
    </section>
  );
}
