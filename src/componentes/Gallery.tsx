import { useEffect, useState } from "react";
import {
  searchFunkoEstado,
  searchFunkoName,
  searchFunkos,
} from "../datos/FunkosApi";
import Card from "./Card";
import "./Gallery.css";
// import Lista from "../datos/Funkos.tsx";

const Gallery: React.FC = () => {
  const [funkos, setFunkos] = useState<Funko[]>([]);
  useEffect(() => {
    search();
  }, []);

  const search = () => {
    const lista: Funko[] = searchFunkos();
    setFunkos(lista);
  };

  const buscar = (filtro: String) => {
    let lis;
    if (filtro === "preventa" || filtro === "venta" || filtro === "agotado") {
      lis = searchFunkoEstado(String(filtro));
      setFunkos(lis);
    } else {
      lis = searchFunkoName(String(filtro));
      setFunkos(lis);
    }
  };

  // function Gallery() {
  return (
    <div id="gallery" className="Page">
      <h1 className="title">EL FANTASMA DE LOS FUNKOS</h1>
      <div className="filtro">
        <form
          onSubmit={(ev) => {
            ev.preventDefault();
            // buscar(ev.target.search.value);
            buscar(ev.target[0].value);
            console.log(ev.target[0].value);
          }}
        >
          <input
            type="text"
            name="search"
            className="filtro-input"
            autoComplete="off"
          ></input>
          <button type="submit" className="filtro-button">
            BUSCAR
          </button>
        </form>
      </div>
      <div id="gallery" className="gallery">
        {funkos.map((funko) => (
          <Card
            nombre={funko.nombre}
            ruta={funko.ruta}
            precio={funko.precio}
            piezas={funko.piezas}
            estado={funko.estado}
          />
        ))}
      </div>
      {/* <Card /> */}
    </div>
  );
  // }
};

export default Gallery;
