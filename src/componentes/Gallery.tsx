import { useEffect } from "react";
import { searchFunkos } from "../datos/FunkosApi";
import Card from "./Card";
import "./Gallery.css";

useEffect(() => {
  search();
}, []);

let lista: Funko[];

const search = () => {
  lista = searchFunkos();
};

function Gallery() {
  return (
    <div id="gallery" className="Page">
      <h1 className="title">EL FANTASMA DE LOS FUNKOS</h1>
      <div className="filtro">
        <input className="filtro-input"></input>
        <button type="submit" className="filtro-button">
          BUSCAR
        </button>
      </div>
      <div id="gallery" className="gallery">
        {lista.map((funko) => (
          <Card
            nombre={funko.nombre}
            ruta={funko.ruta}
            precio={funko.precio}
            piezas={funko.piezas}
            estado={funko.estado}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
