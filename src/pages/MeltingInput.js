import styles from "./MeltingInput.module.css";

const MeltingInput = () => {
  return (
    <div className={styles.meltingInput}>
      <b className={styles.processingEntry}>Processing Entry</b>
      <div className={styles.meltingInputChild} />
      <div className={styles.meltingInputItem} />
      <div className={styles.backToDashboard}>Back to Dashboard</div>
      <div className={styles.meltingInputInner} />
      <div className={styles.entries}>Entries</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.aluminium}>Aluminium</div>
      <div className={styles.div}>
        <span className={styles.span}>14</span>/
        <span className={styles.span}>08</span>/
        <span className={styles.span}>2022</span>
      </div>
      <img className={styles.lineIcon} alt="" src="../line-5.svg" />
      <b className={styles.material}>Material</b>
      <b className={styles.date}>Date</b>
      <div className={styles.meltingInputChild1} />
      <b className={styles.save}>Save</b>
      <div className={styles.product}>
        <div className={styles.productChild} />
        <div className={styles.delete}>Delete</div>
      </div>
      <div className={styles.product1}>
        <div className={styles.productChild} />
        <div className={styles.delete}>Edit</div>
      </div>
      <b className={styles.melting}>Melting</b>
      <div className={styles.meltingInputChild2} />
      <img className={styles.dropDownIcon} alt="" src="../drop-down@2x.png" />
      <img className={styles.dropDownIcon1} alt="" src="../drop-down@2x.png" />
      <div className={styles.meltingInputChild3} />
      <div className={styles.kg}>
        <span className={styles.span}>240.0</span> kg
      </div>
      <div className={styles.kg1}>
        <span className={styles.span}>70.0</span> kg
      </div>
      <div className={styles.inStock5270}>(In Stock) 527.0 kg</div>
      <div className={styles.inStock1668}>(In Stock) 166.8 kg</div>
      <div className={styles.inStock2502}>(In Stock) 250.2 kg</div>
      <div className={styles.kg2}>
        <span className={styles.span}>150.0</span> kg
      </div>
      <div className={styles.kg3}>460 kg</div>
      <img className={styles.meltingInputChild4} alt="" src="../line-39.svg" />
      <div className={styles.lineDiv} />
      <img className={styles.meltingInputChild5} alt="" src="../line-198.svg" />
      <img className={styles.meltingInputChild6} alt="" src="../line-7.svg" />
      <img className={styles.meltingInputChild7} alt="" src="../line-7.svg" />
      <img className={styles.meltingInputChild8} alt="" src="../line-5.svg" />
      <img className={styles.meltingInputChild9} alt="" src="../line-5.svg" />
      <b className={styles.tikliScrap}>Tikli Scrap</b>
      <b className={styles.cutWasher}>Cut Washer</b>
      <b className={styles.pattiScrap}>Patti Scrap</b>
      <b className={styles.totalScrap}>Total Scrap</b>
      <i className={styles.addNew}>Add New +</i>
      <div className={styles.meltingInputChild10} />
      <b className={styles.recipientName}>
        <p className={styles.recipient}>Recipient</p>
        <p className={styles.name}>Name</p>
      </b>
      <b className={styles.recipientAddress}>
        <p className={styles.recipient}>Recipient</p>
        <p className={styles.name}>Address</p>
      </b>
      <div className={styles.meltingInputChild11} />
      <img
        className={styles.meltingInputChild12}
        alt=""
        src="../line-362.svg"
      />
      <div className={styles.meltingInputChild13} />
      <div className={styles.meltingInputChild14} />
      <div className={styles.meltingInputChild15} />
      <div className={styles.rs100kg}>
        {`Rs. `}
        <span className={styles.span}>100</span>/kg
      </div>
      <img className={styles.meltingInputChild16} alt="" src="../line-5.svg" />
      <b className={styles.rate}>Rate</b>
      <div className={styles.rs46000}>Rs. 46,000</div>
      <img className={styles.meltingInputChild17} alt="" src="../line-5.svg" />
      <b className={styles.value}>Value</b>
      <div className={styles.div1}>
        <span className={styles.span}>18</span>%
      </div>
      <img className={styles.meltingInputChild18} alt="" src="../line-5.svg" />
      <b className={styles.taxRate}>Tax Rate</b>
      <div className={styles.rs8280}>Rs. 8,280</div>
      <img className={styles.meltingInputChild19} alt="" src="../line-5.svg" />
      <b className={styles.taxAmount}>Tax Amount</b>
      <b className={styles.rs52280}>Rs. 52,280</b>
      <img className={styles.meltingInputChild20} alt="" src="../line-5.svg" />
      <b className={styles.totalAmount}>Total Amount</b>
      <i className={styles.addNew1}>Add New +</i>
    </div>
  );
};

export default MeltingInput;
