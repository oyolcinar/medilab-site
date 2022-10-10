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
    <div>
      <div>{props.discount}</div>
      <div>
        <div>{props.price}</div>
        <div>{afterSales(price, discount)}</div>
        <button></button>
      </div>
    </div>
  );
};

export default Pricetag;
