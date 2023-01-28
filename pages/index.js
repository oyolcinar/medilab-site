import styles from '../styles/Terms.module.css';
import { useTransitionCarousel } from 'react-spring-carousel';
import { useEffect } from 'react';

export default function Home() {
  const mockedItems = [{ id: '1' }, { id: '2' }, { id: '3' }];

  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useTransitionCarousel({
      items: mockedItems.map((i) => ({
        id: i.id,
        renderItem: <div>{i.id}</div>,
      })),
    });

  useEffect(() => {
    const timer = setInterval(() => {
      slideToNextItem();
    }, 2000);
    return () => {
      window.clearInterval(timer);
    };
  }, [slideToNextItem]);

  return (
    <div className={styles.terms}>
      <h2>Homepage</h2>
      <div></div>
      <div></div>
      <div>
        <button onClick={slideToPrevItem}>Prev item</button>
        {carouselFragment}
        <button onClick={slideToNextItem}>Next item</button>
      </div>
    </div>
  );
}
