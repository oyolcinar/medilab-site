import styles from '../../styles/ButtonLarge.module.css';

const ButtonLarge = (props) => {
  return <button className={styles.button}>{props.name}</button>;
};

export default ButtonLarge;
