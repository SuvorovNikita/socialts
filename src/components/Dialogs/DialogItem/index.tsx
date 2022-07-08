import { NavLink } from 'react-router-dom';
import styles from '../Dialogs.module.css';

type dialogsPropsTypes = {
  name: string;
  id: number;
};

const DialogItem = ({ name, id }: dialogsPropsTypes) => {
  return (
    <div className={styles.dialog + '' + styles.active}>
      <NavLink to={'/dialogs/' + id}>{name}</NavLink>
    </div>
  );
};

export default DialogItem;
