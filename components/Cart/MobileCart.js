import { useContext } from 'react';
import { Store } from '../../utils/Store';
import styles from '../../styles/Cart.module.css';
import Link from 'next/link';
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import ButtonLarge from '../UI/ButtonLarge';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const MobileCart = ({
  header,
  product,
  quantity,
  unitPrice,
  totalPrice,
  subtotal,
  checkout,
  empty,
  continueService,
}) => {
  return <div></div>;
};

export default MobileCart;
