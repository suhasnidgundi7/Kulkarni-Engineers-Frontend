import styles from "./WasherInventory.module.css";

const WasherInventory = () => {
  return (
    <div className={styles.washerInventory}>
      <b className={styles.washerInventory1}>Washer Inventory</b>
      <div className={styles.washerInventoryChild} />
      <div className={styles.washerInventoryItem} />
      <div className={styles.backToDashboard}>Back to Dashboard</div>
      <div className={styles.washerInventoryInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.material}>Material</div>
      <b className={styles.partNo}>Part No.</b>
      <div className={styles.div}>31121006</div>
      <div className={styles.kg}>43.0 kg</div>
      <div className={styles.div1}>1020</div>
      <b className={styles.weight}>Weight</b>
      <b className={styles.quantity}>Quantity</b>
      <img className={styles.lineIcon} alt="" src="../line-4.svg" />
      <div className={styles.lineDiv} />
      <img
        className={styles.washerInventoryChild1}
        alt=""
        src="../line-121.svg"
      />
      <img
        className={styles.washerInventoryChild2}
        alt=""
        src="../line-51.svg"
      />
      <img
        className={styles.washerInventoryChild3}
        alt=""
        src="../line-61.svg"
      />
      <img
        className={styles.washerInventoryChild4}
        alt=""
        src="../line-71.svg"
      />
      <img
        className={styles.washerInventoryChild5}
        alt=""
        src="../line-8.svg"
      />
      <img
        className={styles.washerInventoryChild6}
        alt=""
        src="../line-9.svg"
      />
      <img
        className={styles.washerInventoryChild7}
        alt=""
        src="../line-10.svg"
      />
      <img
        className={styles.washerInventoryChild8}
        alt=""
        src="../line-131.svg"
      />
      <img
        className={styles.washerInventoryChild9}
        alt=""
        src="../line-141.svg"
      />
      <img
        className={styles.washerInventoryChild10}
        alt=""
        src="../line-151.svg"
      />
      <img
        className={styles.washerInventoryChild11}
        alt=""
        src="../line-161.svg"
      />
      <div className={styles.aluminium}>Aluminium</div>
      <img className={styles.dropDownIcon} alt="" src="../drop-down@2x.png" />
    </div>
  );
};

export default WasherInventory;
