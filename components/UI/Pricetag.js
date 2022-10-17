import styles from '../../styles/Pricetag.module.css';

const Pricetag = ({ price, newPrice }) => {
  function discount(price, newPrice) {
    let discount = Math.trunc(((price - newPrice) / price) * 100);
    return discount;
  }
  return (
    <div className={styles.container}>
      <div className={styles.border}></div>
      <div className={styles.tag}>
        {price && (
          <div className={styles.discount}>
            <div>%{discount(price, newPrice)} Off</div>
          </div>
        )}
        <div className={styles.prices}>
          {price && <div className={styles.oldPrice}>{price} EUR + VAT</div>}
          <div className={styles.newPrice}>{newPrice} EUR + VAT</div>
        </div>
        <button className={styles.button}>Add To Cart</button>
      </div>
      <div className={styles.border}></div>
    </div>
  );
};

export default Pricetag;
