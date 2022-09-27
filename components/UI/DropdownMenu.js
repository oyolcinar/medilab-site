import styles from '../../styles/Dropdown.module.css';
import Link from 'next/link';
import DropdownCluster from './DropdownCluster';

const DropdownMenu = () => {
  return (
    <div className={styles.dropdown}>
      <DropdownCluster
        name='Hair Transplant'
        link='/'
        sublinks={[
          { linkName: 'FUT Hair Transplant', url: '/' },
          { linkName: 'DHI Hair Transplant', url: '/' },
          { linkName: 'Sapphire Hair Transplant', url: '/' },
          { linkName: 'FUE Hair Transplant', url: '/' },
        ]}
      />
      <DropdownCluster
        name='Dentistry'
        link='/'
        sublinks={[
          { linkName: 'Zirconium', url: '/' },
          { linkName: 'Porcelain Laminant', url: '/' },
          { linkName: 'Panoramic XRAY', url: '/' },
          { linkName: 'Orthodontics', url: '/' },
          { linkName: 'Laser Dentistry', url: '/' },
          { linkName: 'Fillings', url: '/' },
          { linkName: 'Implants', url: '/' },
          { linkName: 'Root Canal Treatment', url: '/' },
          { linkName: 'Smile Aesthetics', url: '/' },
          { linkName: 'Empress (Full Porcelain)', url: '/' },
          { linkName: 'Whitening', url: '/' },
        ]}
      />
      <DropdownCluster
        name='Check Up Packages'
        link='/'
        sublinks={[
          { linkName: 'Standard Check Up', url: '/' },
          { linkName: 'Life Check Up 1', url: '/' },
          { linkName: 'Life Check Up 2', url: '/' },
        ]}
      />
    </div>
  );
};

export default DropdownMenu;
