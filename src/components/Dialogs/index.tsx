import styles from './Dialogs.module.css';

import DialogItem from './DialogItem';
import Message from './Messages';

const Dialogs = (props: any) => {
  let dialogsElements = props.dialogsData.map((dialogs: any) => (
    <DialogItem name={dialogs.name} id={dialogs.id} />
  ));

  let messagesElements = props.messagesData.map((messages: any) => (
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
