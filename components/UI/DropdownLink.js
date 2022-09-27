import Link from 'next/link';
import styles from '../../styles/Dropdown.module.css';

const DropdownLink = (props) => {
  return (
    <li className={styles.item}>
      <Link href={props.link}>{props.name}</Link>
    </li>
  );
};

export default DropdownLink;
