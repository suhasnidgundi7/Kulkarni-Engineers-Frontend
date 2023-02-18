import styles from "./Homepage.module.css";

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.screens}>
        <div className={styles.screen}>
          <div className={styles.screenChild} />
          <b className={styles.rawMaterial}>Raw Material</b>
          <img
            className={styles.dropDownIcon}
            alt=""
            src="../drop-down6@2x.png"
          />
        </div>
        <div className={styles.screen1}>
          <div className={styles.screenItem} />
          <b className={styles.delivery}>Delivery</b>
          <img
            className={styles.dropDownIcon1}
            alt=""
            src="../drop-down6@2x.png"
          />
        </div>
        <div className={styles.screen2}>
          <div className={styles.screenItem} />
          <b className={styles.delivery}>Processing</b>
          <img
            className={styles.dropDownIcon2}
            alt=""
            src="../drop-down6@2x.png"
          />
        </div>
        <div className={styles.screen3}>
          <div className={styles.screenItem} />
          <b className={styles.delivery}>Production</b>
          <img
            className={styles.dropDownIcon3}
            alt=""
            src="../drop-down6@2x.png"
          />
        </div>
        <div className={styles.screen4}>
          <div className={styles.screenChild1} />
          <b className={styles.scrap}>Scrap</b>
          <img
            className={styles.dropDownIcon4}
            alt=""
            src="../drop-down6@2x.png"
          />
        </div>
      </div>
      <b className={styles.dashboard}>Dashboard</b>
      <div className={styles.products}>
        <div className={styles.container} />
        <div className={styles.product}>
          <div className={styles.button} />
          <b className={styles.addNew}>Add New +</b>
        </div>
        <div className={styles.product1}>
          <div className={styles.button} />
          <div className={styles.balata}>Balata</div>
        </div>
        <div className={styles.product2}>
          <div className={styles.button} />
          <div className={styles.balata}>Band Clip</div>
        </div>
        <div className={styles.product3}>
          <div className={styles.button} />
          <div className={styles.balata}>Washer</div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
