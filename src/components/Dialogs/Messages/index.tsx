import styles from '../Dialogs.module.css';

type messagePropsTypes = {
  text: string;
  id: number;
};

const Message = ({ text }: messagePropsTypes) => {
  return <div className={styles.message}>{text}</div>;
};

export default Message;
