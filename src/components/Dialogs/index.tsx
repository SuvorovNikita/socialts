import styles from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

type dialogsPropsTypes = {
  name: string;
  id: string;
};

type messagePropsTypes = {
  text: string;
};

const DialogItem = ({ name, id }: dialogsPropsTypes) => {
  return (
    <div className={styles.dialog + '' + styles.active}>
      <NavLink to={'/dialogs/' + id}>{name}</NavLink>
    </div>
  );
};

const Message = ({ text }: messagePropsTypes) => {
  return <div className={styles.message}>{text}</div>;
};

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <DialogItem name="Nick" id="1" />
        <DialogItem name="Andrey" id="2" />
        <DialogItem name="Anya" id="3" />
      </div>
      <div className={styles.messages}>
        <Message text="1" />
        <Message text="2" />
        <Message text="3" />
      </div>
    </div>
  );
};

export default Dialogs;
