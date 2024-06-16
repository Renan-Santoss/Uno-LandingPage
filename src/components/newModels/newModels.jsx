import { useState, useEffect } from "react";
import styles from "./newModels.module.css";
import card1 from "../../assets/img/uno-minimalista.png";
import card2 from "../../assets/img/uno-flip.png";
import card3 from "../../assets/img/uno-original.png";
import card4 from "../../assets/img/uno-dos.png";
import ArrowIcon from "../../assets/img/arrow.svg";
import axios from "axios";

const NewModels = () => {
  const [remainingSeconds, setRemainingSeconds] = useState(1 * 3600); // Inicialmente, 1 hora em segundos

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingSeconds((prevSeconds) =>
        prevSeconds > 0 ? prevSeconds - 1 : 1 * 3600
      );
    }, 1000); // Atualiza a cada 1 segundo (1000 milissegundos)

    return () => clearInterval(interval);
  }, []);

  // Função para formatar o tempo restante em HH:mm:ss
  const formatTime = (seconds) => {
    const pad = (num) => num.toString().padStart(2, "0");
    const hh = pad(Math.floor(seconds / 3600));
    const mm = pad(Math.floor((seconds % 3600) / 60));
    const ss = pad(seconds % 60);
    return `${hh}:${mm}:${ss}`;
  };

  const [dados, setDados] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://uno-8zde.onrender.com/produtos"
        );
        console.log(response.data.produtos[0]);
        setDados(response.data.produtos[0]);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };

    fetchData();
  }, []);
  if (!dados) {
    return <div className={styles.loadText}><span className={styles.spanLoad}>Carregando dados...</span></div>;
  }

  return (
    <section id="new-produtos" className={styles.newModels}>
      <div className={styles.newModelsWrapper}>
        <h2>Nossos novos modelos</h2>
        <div className={styles.btnNewModels}>
          <a href="#">Ver todos</a>
          <img src={ArrowIcon} alt="Iconarrow" />
        </div>
      </div>
      <div className={styles.cardNewWrapper}>
        {/* ... map para adicionar dinamicamente*/}
        {[
          {
            img: card1,
            links: "/uno-minimalista",
            title: "UNO® minimalista",
            price: "R$ 80,00",
          },
          {
            img: card2,
            links: "/produtos",
            title: "UNO® Flip SIOC",
            price: "R$ 104,99",
          },
          {
            img: card3,
            links: "/produtos",
            title: "UNO® Original",
            price: "R$ 29,90",
          },
          {
            img: card4,
            links: "/produtos",
            title: "UNO® Dos",
            price: "R$ 50,00",
          },
        ].map((card, index) => (
          <div key={index}>
            <div className={styles.cardNewContainer}>
              <img className={styles.cardsNew1} src={card.img} alt="" />
              <div className={styles.cardBody}>
                <h3>{card.title}</h3>
                <span>{card.price}</span>
              </div>
              <div className={styles.cardFooter}>
                <h4>
                  Acaba em :{" "}
                  <span className={styles.cardBodySpan}>
                    {formatTime(remainingSeconds)}
                  </span>
                </h4>
                <div>
                  <a href={card.links} className={styles.cardBodyBtn}>
                    Comprar
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewModels;
