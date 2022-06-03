import styles from './model.module.scss';

/* eslint-disable-next-line */
export interface ModelProps {}

export function Model(props: ModelProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Model!</h1>
    </div>
  );
}

export default Model;
