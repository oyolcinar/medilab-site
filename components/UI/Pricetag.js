import styles from '../../styles/Pricetag.module.css';

const Pricetag = ({ price, discount }) => {
  function afterSales(price, discount) {
    if (!discount) {
      return price;
    } else {
      let newPrice = price - (price / 100) * discount;
      return newPrice;
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.border}></div>
      <div className={styles.tag}>
        {discount && (
          <div className={styles.discount}>
            <div>%{discount} Off</div>
          </div>
        )}
        <div className={styles.prices}>
          {discount && <div className={styles.oldPrice}>{price} EUR + VAT</div>}
          <div className={styles.newPrice}>
            {afterSales(price, discount)} EUR + VAT
          </div>
        </div>
        <button className={styles.button}>Add To Cart</button>
      </div>
      <div className={styles.border}></div>
    </div>
  );
};

export default Pricetag;
