import styles from '../../styles/ButtonLarge.module.css';

const ButtonLarge = (props) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      {props.name}
    </button>
  );
};

export default ButtonLarge;
