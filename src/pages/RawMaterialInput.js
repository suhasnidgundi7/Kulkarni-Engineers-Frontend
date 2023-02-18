import styles from "./RawMaterialInput.module.css";

const RawMaterialInput = () => {
  return (
    <div className={styles.rawMaterialInput}>
      <div className={styles.btdButton}>
        <div className={styles.btdButtonChild} />
        <div className={styles.backToDashboard}>Back to Dashboard</div>
      </div>
      <div className={styles.historyButton}>
        <div className={styles.historyButtonChild} />
        <div className={styles.history}>History</div>
      </div>
      <div className={styles.table}>
        <img className={styles.structureIcon} alt="" src="../structure.svg" />
        <div className={styles.content}>
          <div className={styles.div}>
            <span className={styles.span}>14</span>/
            <span className={styles.span}>08</span>/
            <span className={styles.span}>2022</span>
          </div>
          <div className={styles.div1}>
            <span className={styles.span}>13</span>:
            <span className={styles.span}>50</span>
          </div>
          <div className={styles.l351345}>L351345</div>
          <div className={styles.sheet}>Sheet</div>
          <div className={styles.mm}>
            <span className={styles.span}>0.5</span> mm
          </div>
          <div className={styles.div2}>150</div>
          <div className={styles.inStock235}>(In Stock) 235</div>
          <div className={styles.inStock2750}>(In Stock) 275.0 kg</div>
          <div className={styles.kg}>
            <span className={styles.span}>175.0</span> kg
          </div>
          <b className={styles.time}>Time</b>
          <b className={styles.lotNo}>Lot no.</b>
          <b className={styles.date}>Date</b>
          <b className={styles.form}>Form</b>
          <b className={styles.thickness}>Thickness</b>
          <b className={styles.quantity}>Quantity</b>
          <b className={styles.weight}>Weight</b>
          <i className={styles.addNew}>Add New +</i>
        </div>
      </div>
      <div className={styles.saveButton}>
        <div className={styles.saveButtonChild} />
        <b className={styles.save}>Save</b>
      </div>
      <div className={styles.deleteButton}>
        <div className={styles.deleteButtonChild} />
        <div className={styles.delete}>Delete</div>
      </div>
      <div className={styles.editButton}>
        <div className={styles.deleteButtonChild} />
        <div className={styles.delete}>Edit</div>
      </div>
      <div className={styles.material}>
        <b className={styles.aluminium}>Aluminium</b>
        <div className={styles.materialChild} />
        <img className={styles.dropDownIcon} alt="" src="../drop-down@2x.png" />
      </div>
      <div className={styles.title}>
        <b className={styles.rawMaterialEntry}>Raw Material Entry</b>
        <div className={styles.titleChild} />
      </div>
    </div>
  );
};

export default RawMaterialInput;
