import styles from '../../styles/Dropdown.module.css';
import DropdownCluster from './DropdownCluster';
import useTranslation from 'next-translate/useTranslation';

const DropdownMenu = ({ setOpen, setClicked }) => {
  const { t } = useTranslation('common');
  return (
    <div
      className={styles.dropdown}
      onClick={() => {
        setClicked(true);
        setOpen(false);
      }}
    >
      <DropdownCluster
        name={t('dentistry')}
        link='/services/dentistry'
        sublinks={[
          { linkName: 'Zirconium', url: '/services/dentistry/zirconium' },
          {
            linkName: 'Porcelain Laminant',
            url: '/services/dentistry/porcelain-laminant',
          },
          {
            linkName: 'Panoramic XRAY',
            url: '/services/dentistry/panoramic-xray',
          },
          { linkName: 'Orthodontics', url: '/services/dentistry/orthodontics' },
          {
            linkName: 'Laser Dentistry',
            url: '/services/dentistry/laser-dentistry',
          },
          { linkName: 'Fillings', url: '/services/dentistry/fillings' },
          { linkName: 'Implants', url: '/services/dentistry/implants' },
          {
            linkName: 'Root Canal Treatment',
            url: '/services/dentistry/root-canal-treatment',
          },
          {
            linkName: 'Smile Aesthetics',
            url: '/services/dentistry/smile-aesthetics',
          },
          {
            linkName: 'Empress (Full Porcelain)',
            url: '/services/dentistry/empress-full-porcelain',
          },
          { linkName: 'Whitening', url: '/services/dentistry/whitening' },
        ]}
      />
      <DropdownCluster
        name={t('hairTransplant')}
        link='/services/hair-transplant'
        sublinks={[
          {
            linkName: 'FUT Hair Transplant',
            url: '/services/hair-transplant/FUT-hair-transplant',
          },
          {
            linkName: 'DHI Hair Transplant',
            url: '/services/hair-transplant/DHI-hair-transplant',
          },
          {
            linkName: 'Sapphire Hair Transplant',
            url: '/services/hair-transplant/sapphire-hair-transplant',
          },
          {
            linkName: 'FUE Hair Transplant',
            url: '/services/hair-transplant/FUE-hair-transplant',
          },
        ]}
      />
      <DropdownCluster
        name={t('checkUp')}
        link='/services/check-up-packages'
        sublinks={[
          {
            linkName: 'Standard Check Up',
            url: '/services/check-up-packages/standard-check-up',
          },
          {
            linkName: 'Life Check Up 1',
            url: '/services/check-up-packages/life-check-up-1',
          },
          {
            linkName: 'Life Check Up 2',
            url: '/services/check-up-packages/life-check-up-2',
          },
        ]}
      />
    </div>
  );
};

export default DropdownMenu;
