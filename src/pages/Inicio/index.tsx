import cardapio from "data/cardapio.json";
import styles from "./inicio.module.scss";
import stylesTema from "styles/tema.module.scss";
import nossaCasa from "assets/nossa_casa.png";
import { useNavigate } from "react-router-dom";

export default function Inicio() {
  let pratosRecomendados = [...cardapio];
  pratosRecomendados = pratosRecomendados
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);

  const navigate = useNavigate();

  function redirecionarParaDetalhes(prato: (typeof cardapio)[0]) {
    navigate(`/prato/${prato.id}`, { state: { prato } });
  }
  return (
    <section>
      <h3 className={stylesTema.titulo}>Recomendações da cozinha</h3>
      <div className={styles.recomendados}>
        {pratosRecomendados.map((item) => (
          <div key={item.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button
              onClick={() => redirecionarParaDetalhes(item)}
              className={styles.recomendado__botao}
            >
              Ver mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={stylesTema.titulo}> Nossa Casa</h3>
      <div className={styles.nossaCasa}>
        <img src={nossaCasa} alt="casa do aluroni" />
        <div className={styles.nossaCasa__endereco}>
          Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
        </div>
      </div>
    </section>
  );
}
