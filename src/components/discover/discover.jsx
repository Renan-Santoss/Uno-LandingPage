import styles from "./discover.module.css";
import card1 from "../../assets/img/uno-minimalista.png";
import Button from '../button-1/button';
import ButtonBorder from "../buttonBorder/buttonBorder";
import card2 from "../../assets/img/uno-flip.png";
import card3 from "../../assets/img/uno-original.png";
import card4 from "../../assets/img/uno-dos.png";
import card5 from "../../assets/img/uno-masters.png";
import card6 from "../../assets/img/uno-barbie.png";

const Discover = () => {
  return (
    <section className={styles.discover}>
      <div className={styles.discoverWrapper}>
        <h2>Nossos novos modelos</h2>
        <div className={styles.btnDiscover}>
          <Button>Filtrar</Button>
        </div>
      </div>
      <div className={styles.cardDiscoverWrapper}>
        <div>
          <div className={styles.discoverContainer}>
            <img className={styles.cardsDisc1} src={card2} alt="" />
            <div className={styles.cardDiscoverBody}>
              <h3>UNO® Flip SIOC</h3>
              <span>R$ 104,99</span>
            </div>
            <div className={styles.cardDiscoverFooter}>
              <h4>
                Acaba em <span className={styles.cardBodySpan}>01.34.45</span>
              </h4>
              <div>
                <a href="" className={styles.cardDiscBodyBtn}>
                  Comprar
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.discoverContainer}>
            <img className={styles.cardsDisc1} src={card4} alt="" />
            <div className={styles.cardDiscoverBody}>
              <h3>UNO® Dos</h3>
              <span>R$ 50,00</span>
            </div>
            <div className={styles.cardDiscoverFooter}>
              <h4>
                Acaba em <span className={styles.cardBodySpan}>01.34.45</span>
              </h4>
              <div>
                <a href="" className={styles.cardDiscBodyBtn}>
                  Comprar
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.discoverContainer}>
            <img className={styles.cardsDisc1} src={card3} alt="" />
            <div className={styles.cardDiscoverBody}>
              <h3>UNO® Original</h3>
              <span>R$ 29,90</span>
            </div>
            <div className={styles.cardDiscoverFooter}>
              <h4>
                Acaba em <span className={styles.cardBodySpan}>01.34.45</span>
              </h4>
              <div>
                <a href="" className={styles.cardDiscBodyBtn}>
                  Comprar
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.discoverContainer}>
            <img className={styles.cardsDisc1} src={card5} alt="" />
            <div className={styles.cardDiscoverBody}>
              <h3>UNO® Masters</h3>
              <span>R$ 34,99</span>
            </div>
            <div className={styles.cardDiscoverFooter}>
              <h4>
                Acaba em <span className={styles.cardBodySpan}>01.34.45</span>
              </h4>
              <div>
                <a href="" className={styles.cardDiscBodyBtn}>
                  Comprar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cardDiscoverWrapper2}>
        <div>
          <div className={styles.discoverContainer}>
            <img className={styles.cardsDisc1} src={card5} alt="" />
            <div className={styles.cardDiscoverBody}>
              <h3>UNO® Masters</h3>
              <span>R$ 34,99</span>
            </div>
            <div className={styles.cardDiscoverFooter}>
              <h4>
                Acaba em <span className={styles.cardBodySpan}>01.34.45</span>
              </h4>
              <div>
                <a href="" className={styles.cardDiscBodyBtn}>
                  Comprar
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.discoverContainer}>
            <img className={styles.cardsDisc1} src={card6} alt="" />
            <div className={styles.cardDiscoverBody}>
              <h3>UNO® Barbie</h3>
              <span>R$ 23,99</span>
            </div>
            <div className={styles.cardDiscoverFooter}>
              <h4>
                Acaba em <span className={styles.cardBodySpan}>01.34.45</span>
              </h4>
              <div>
                <a href="" className={styles.cardDiscBodyBtn}>
                  Comprar
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.discoverContainer}>
            <img className={styles.cardsDisc1} src={card1} alt="" />
            <div className={styles.cardDiscoverBody}>
              <h3>UNO® minimalista</h3>
              <span>R$ 80,00</span>
            </div>
            <div className={styles.cardDiscoverFooter}>
              <h4>
                Acaba em <span className={styles.cardBodySpan}>01.34.45</span>
              </h4>
              <div>
                <a href="" className={styles.cardDiscBodyBtn}>
                  Comprar
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.discoverContainer}>
            <img className={styles.cardsDisc1} src={card2} alt="" />
            <div className={styles.cardDiscoverBody}>
              <h3>UNO® Flip</h3>
              <span>R$ 104,99</span>
            </div>
            <div className={styles.cardDiscoverFooter}>
              <h4>
                Acaba em <span className={styles.cardBodySpan}>01.34.45</span>
              </h4>
              <div>
                <a href="" className={styles.cardDiscBodyBtn}>
                  Comprar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.discoverBtnShow}>
        <ButtonBorder>Ver mais</ButtonBorder>
      </div>
    </section>
  );
};

export default Discover;
