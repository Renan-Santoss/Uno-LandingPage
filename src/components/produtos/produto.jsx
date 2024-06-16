import styles from "./produtos.module.css";
import CaixaMini from "../../assets/img/uno-minimalista.png";
import MasterCard from "../../assets/img/Mastercard.svg";
import Button from "../button-1/button";
import { useEffect, useState } from "react";
import axios from "axios";

const ProdutoCpn = () => {
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
    return (
      <div className={styles.loadText}>
        <span className={styles.spanLoad}>Carregando dados...</span>
      </div>
    );
  }

  return (
    <section className={styles.ProdutoCpn}>
      <div className={styles.produtoWrapper}>
        <div className={styles.containerWrapper}>
          <div>
            <img src={CaixaMini} alt="" />
          </div>
          <div>
            <h2>{dados.name}</h2>
            <div className={styles.wrapperVlTime}>
              <div className={styles.wrapperValor}>
                <h3>R$ 80,00</h3>
              </div>
              <div className={styles.timeVlcontainer}>
                <span>Acaba em {formatTime(remainingSeconds)}</span>
              </div>
            </div>
            <div className={styles.wrraperAbout}>
              <h3>Sobre este item:</h3>
              <ul>
                <li>Edição especial - visual completamente único</li>
                <li>Minimalista - projetado com uma estética minimalista.</li>
                <li>
                  Visual novo - visual totalmente novo, bonito e simplista
                  idealizado pelo designer warleson oliveira
                </li>
                <li>
                  Jogo - o jogo é como o uno clássico, de 2 a 10 jogadores com 7
                  anos ou mais.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.FinalWrapper}>
          <div className={styles.FinalContainerC}>
            <h2>{dados.preco}</h2>
            <h3>
              Entrega GRÁTIS:
              <span> Segunda-feira, 29 de Janeiro. </span>
              Se pedir dentro de
              <span className={styles.finalTime}> 2 hrs 2 mins</span>
            </h3>
            <span className={styles.StockProduct}>Em estoque</span>
            <div className={styles.wrapperCardsC}>
              <Button>Comprar</Button>
              <div className={styles.wrapperCaixaCard}>
                <div className={styles.caixaCard}>
                  <img src={MasterCard} alt="Icon mastercard" />
                </div>
                <div>
                  <h4>
                    Paga com: <span> CARTÃO</span>
                  </h4>
                  <span className={styles.cardNumber}>2567*</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </section>
  );
};

export default ProdutoCpn;
