import Link from 'next/link';
import DropdownLink from './DropdownLink';
import { nanoid } from 'nanoid';
import styles from '../../styles/Dropdown.module.css';

const DropdownCluster = (props) => {
  const sublinks = props.sublinks.map((link) => {
    return <DropdownLink name={link.linkName} link={link.url} key={nanoid()} />;
  });

  return (
    <div>
      <Link href={props.link}>
        <a className={styles.header}>{props.name}</a>
      </Link>
      <ul className={styles.list}>{sublinks}</ul>
    </div>
  );
};

export default DropdownCluster;
