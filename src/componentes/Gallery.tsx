import Card from "./Card";
import "./Gallery.css";

function Gallery() {
  return (
    <div id="gallery" className="Page">
      <h1 className="title">EL FANTASMA DE LOS FUNKOS</h1>
      <div className="filtro">
        <input className="filtro-input"></input>
        <button type="submit" className="filtro-button">
          FILTRAR
        </button>
      </div>
      <Card />
    </div>
  );
}

export default Gallery;
