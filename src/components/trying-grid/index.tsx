import { Product, productsList } from "../../constants/products-list";
import styles from "./styles.module.css";

const TryingGrid = () => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.gridWrapper}>
        {productsList.map((product: Product) => (
          <div className={styles.product} key={product.title + product.description}>
            <div className={styles.productTitle}>
                {product.title}
            </div>
            <div className={styles.productImageCotnainer}>
                <img src={product.image} className={styles.productImage} />
            </div>
            <div className={styles.productDescription}>
                {product.description}
            </div>
            <div className={styles.productButtonsContainer}>
                <button className={styles.productButton}>
                    Смотреть больше
                </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default TryingGrid;
