import styles from "./buttonBorder.module.css";

const ButtonBorder = (props) =>{
  return (
    <div className={styles.buttonBorder}>
      <a className={styles.btnBorder} href="#" {...props}/>
    </div>
  );
}

export default ButtonBorder;