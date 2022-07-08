import styles from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

type dialogsPropsTypes = {
  name: string;
  id: number;
};

type messagePropsTypes = {
  text: string;
  id: number;
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
  let dialogsData = [
    { id: 1, name: 'Nick' },
    { id: 2, name: 'Andrey' },
    { id: 3, name: 'Anya' },
  ];

  let messagesData = [
    { id: 1, messages: '1' },
    { id: 2, messages: '2' },
    { id: 3, messages: '3' },
  ];

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
      </div>
      <div className={styles.messages}>
        <Message text={messagesData[0].messages} id={dialogsData[0].id} />
        <Message text={messagesData[1].messages} id={dialogsData[1].id} />
        <Message text={messagesData[2].messages} id={dialogsData[2].id} />
      </div>
    </div>
  );
};

export default Dialogs;
