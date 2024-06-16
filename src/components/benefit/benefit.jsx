import styles from "./benefit.module.css";
import shildIcon from "../../assets/img/shild-icon.svg";
import boxIcon from "../../assets/img/box-icon.svg";
import mediaIcon from "../../assets/img/media-icon.svg";
import rocketIcon from "../../assets/img/rocket-icon.svg";

const Benefit = () => {
  return (
    <section className={styles.benefit}>
      <div className={styles.benefitWrapper}>
        <h2>Benefícios de joga uno</h2>
        <p>
          Saiba mais sobres os benefícios de joga uno com seus amigos e família
        </p>
        <div className={styles.benefitIconWrapper}>
          <div className={styles.boxIconWrapper}>
            <div className={styles.boxIcons}>
              <img src={shildIcon} alt="" />
            </div>
            <span>Divirta-se com segurança.</span>
          </div>
          <div className={styles.boxIconWrapper}>
            <div className={styles.boxIcons}>
              <img src={boxIcon} alt="" />
            </div>
            <span>Pensamentos fora da caixinha.</span>
          </div>
          <div className={styles.boxIconWrapper}>
            <div className={styles.boxIcons}>
              <img src={mediaIcon} alt="" />
            </div>
            <span>Ativa o seu lado criativo.</span>
          </div>
          <div className={styles.boxIconWrapper}>
            <div className={styles.boxIcons}>
              <img src={rocketIcon} alt="" />
            </div>
            <span>Estimula o raciocínio rápido.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefit;
