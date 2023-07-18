import styles from "./Cardapio.module.scss";
import Buscador from "./Buscador";
import { useState } from "react";
import Filtros from "./filtros";
import Ordenador from "./ordenador";
import Itens from "./itens";
import stylesTema from "styles/tema.module.scss";

export default function Cardapio() {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState("");
  return (
    <section className={styles.cardapio}>
      <h3 className={stylesTema.cardapio__titulo}>Cardápio</h3>
      <Buscador busca={busca} setBusca={setBusca} />
      <div className={styles.cardapio__filtros}>
        <Filtros filtro={filtro} setFiltro={setFiltro} />
        <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
      </div>
      <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
    </section>
  );
}
