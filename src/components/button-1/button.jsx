import styles from "./button.module.css";

const Button = (props) =>{
  return (
    <div className={styles.Button}>
      <a className={styles.btn} href="#" {...props}/>
    </div>
  );
}

export default Button;