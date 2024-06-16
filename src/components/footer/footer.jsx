import styles from "./footer.module.css";
import Logo from "../../assets/img/uno-logo.png";
import faceIcon from "../../assets/img/face-icon.svg";
import instaIcon from "../../assets/img/insta-icon.svg";
import twitterIcon from "../../assets/img/twitter-x.svg";


const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerContainer}>
          <div>
            <img className={styles.FooterLogo} src={Logo} alt="" />
            <span className={styles.FooterP}>
              Esta edição especial do UNO®, o jogo de cartas adorado por todos,
              tem um visual totalmente exclusivo. Concebida com uma estética
              minimalista, essa versão é um grande presente para colecionadores
              de UNO®.
            </span>
          </div>
          <div>
            <span className={styles.FooterSpan}>
              Inscreva-se para saber de novidades do mundo uno. Se inscreva-se
              abaixo agora!
            </span>
            <form action="#" method="POST">
              <div className={styles.footerFlex}>
                  <input
                    className={styles.inputFooter}
                    type="text"
                    placeholder="Digite o seu email aqui"
                  />
                <div className={styles.buttonWrapper}>
                  <button className={styles.buttonInput} type="submit">
                    Cadastre-se
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className={styles.copyWrapper}>
          <div>
            <ul className={styles.ulCopyRede}>
              <li><a href=""><img src={instaIcon} alt="" /></a></li>
              <li><a href=""><img src={faceIcon} alt="" /></a></li>
              <li><a href=""><img src={twitterIcon} alt="" /></a></li>
            </ul>
          </div>
          <div>
            <p>© 2024 MATEL. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
