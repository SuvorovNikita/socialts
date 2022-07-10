import styles from '../Dialogs.module.css';

type PropsType = {
  id: number;
  message: string;
};

const Message = (props: PropsType) => {
  return <div className={styles.message}>{props.message}</div>;
};

export default Message;
