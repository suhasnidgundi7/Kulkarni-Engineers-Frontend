import styles from "./RawMaterialDisplay.module.css";

const RawMaterialDisplay = () => {
  return (
    <div className={styles.rawMaterialDisplay}>
      <div className={styles.table}>
        <img className={styles.structureIcon} alt="" src="../structure1.svg" />
        <div className={styles.content}>
          <b className={styles.quantity}>Quantity</b>
          <b className={styles.weight}>Weight</b>
          <b className={styles.form}>Form</b>
          <b className={styles.lotNo}>Lot no.</b>
          <b className={styles.thickness}>Thickness</b>
          <b className={styles.material}>Material</b>
          <b className={styles.date}>Date</b>
        </div>
      </div>
      <div className={styles.filterButton}>
        <div className={styles.filterButtonChild} />
        <b className={styles.filter}>Filter</b>
        <img className={styles.image2Icon} alt="" src="../image-2@2x.png" />
      </div>
      <div className={styles.searchBar}>
        <div className={styles.searchBarChild} />
        <img className={styles.image1Icon} alt="" src="../image-1@2x.png" />
      </div>
      <div className={styles.btdButton}>
        <div className={styles.btdButtonChild} />
        <div className={styles.backToDashboard}>Back to Dashboard</div>
      </div>
      <div className={styles.title}>
        <b className={styles.rawMaterialHistory}>Raw Material History</b>
        <div className={styles.titleChild} />
      </div>
      <div className={styles.div}>- - -</div>
      <div className={styles.div1}>- - -</div>
      <div className={styles.div2}>+ + +</div>
      <div className={styles.div3}>+ + +</div>
    </div>
  );
};

export default RawMaterialDisplay;
