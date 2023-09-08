import { BlockchainData } from '@UI/BlockchainData/BlockchainData';
import { Lucky } from '@UI/Lucky/Lucky';
import { Winners } from '@UI/Winners/Winners';
import { SocialLinks } from '@UI/SocialLinks/SocialLinks';

import styles from './MainFooter.module.scss';

export function MainFooter() {
  return (
    <footer className={styles.MainFooter}>
      <div className={styles.MainFooter__block}>
        <Winners
          customClasses={styles.MainFooter__winners}
          titleClass={styles.MainFooter__title}
        />
        <BlockchainData
          titleClass={styles.MainFooter__title}
          customClasses={styles.MainFooter__blockchainData}
        />
      </div>
      <SocialLinks customClasses={styles.MainFooter__socials} />
      <div className={styles.MainFooter__block}>
        <Lucky
          titleClass={styles.MainFooter__title}
          customClasses={styles.MainFooter__lucky}
        />
      </div>
    </footer>
  );
}
