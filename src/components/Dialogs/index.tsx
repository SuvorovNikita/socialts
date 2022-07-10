import styles from './Dialogs.module.css';

import DialogItem from './DialogItem';
import Message from './Messages';
import { DialogsType, MessagesType } from '../../redux/state';

type PropsType = {
  dialogs: Array<DialogsType>;
  messages: Array<MessagesType>;
};

const Dialogs = (props: PropsType) => {
  let dialogsElements = props.dialogs.map((dialogs) => (
    <DialogItem name={dialogs.name} id={dialogs.id} />
  ));

  let messagesElements = props.messages.map((messages) => (
    <Message message={messages.message} id={messages.id} />
  ));

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <div className={styles.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
