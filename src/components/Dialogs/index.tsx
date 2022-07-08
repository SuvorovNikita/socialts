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

  let dialogsElements = dialogsData.map((dialogs) => (
    <DialogItem name={dialogs.name} id={dialogs.id} />
  ));

  let messagesElements = messagesData.map((messages) => (
    <Message text={messages.messages} id={messages.id} />
  ));

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <div className={styles.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
