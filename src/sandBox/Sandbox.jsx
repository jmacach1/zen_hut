import styles from './sandbox.module.scss';
import Catalog from '../components/catalog/catalog';

export default function Sandbox() {
  return (
    <div className={styles.sandbox}>
      <div className={styles.worktable}>
        <div className={styles.element}>
          <Catalog/>
        </div>
      </div>
    </div>
  );
}

