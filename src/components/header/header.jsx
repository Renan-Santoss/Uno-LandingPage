import { useState } from "react";
import styles from "./header.module.css";
import LogoMenu from "../../assets/img/uno-logo.png";
import IconBars from "../../assets/img/menu-togle.svg";
import IconClose from "../../assets/img/menu-closer.svg";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const links = [
    { name: "Inicio", link: "/" },
    { name: "Onde encontrar", link: "/" },
    { name: "Novos Produtos", link: "#new-produtos" },
    { name: "Creditos", link: "/" },
  ];

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header
      id={styles.Menu}
      className={`${styles.header} ${menuActive ? styles.active : ""}`}
    >
      <div className={styles.header_wrapper}>
        <div>
          <button className={styles.LogoButton}>
            <img src={LogoMenu} alt="Logo menu" />
          </button>
        </div>
        <button id={styles.buttonMobile} onClick={toggleMenu}>
          <img
            id={styles.MenuIcons}
            src={menuActive ? IconClose : IconBars}
            alt="icone menu"
          />
        </button>
        <nav className={menuActive ? styles.active : ""}>
          <ul id={styles.ulmenu} className={styles.ul_wrapper}>
            {links.map((link, index) => (
              <li className={styles.nav_li} key={link.name}>
                <a className={styles.linksMenuLi} href={link.link} key={index}>
                  {link.name}
                </a>
              </li>
            ))}
            <li className={styles.nav_li}>
              <a href="" className={styles.btn_login}>
                Entrar
              </a>
            </li>
            <li className={styles.nav_li}>
              <a href="" className={styles.btn_singIn}>
                Cadastre-se
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
