import { NavLink } from 'react-router-dom';
import styles from '../Dialogs.module.css';

type PropsType = {
  id: number;
  name: string;
};

const DialogItem = (props: PropsType) => {
  return (
    <div className={styles.dialog + '' + styles.active}>
      <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
