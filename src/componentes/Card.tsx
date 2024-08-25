// import { useEffect } from "react";
import Lista from "../datos/Funkos.tsx";
import "./Card.css";

const conter = (cant: number) => {
  let exis = "";
  if (cant === 0) {
    exis = "sin_piezas";
  } else exis = "con_piezas";
  return "gallery__item " + exis;
};

// useEffect(() => {
//   search();
// }, [history.location.pathname]);

// const search = () => {
//   let result = searchEmployees();
//   setClientes(result);
// };

function Card() {
  return (
    <div id="gallery" className="gallery">
      {Lista.map((funko) => (
        <div className={String(conter(funko.piezas))}>
          <div className="card__fondo">
            <div className="cantidad-funko">
              {funko.piezas >= 1 ? "x" + funko.piezas : ""}
            </div>
            <label className="gallery__title">{funko.nombre}</label>
            <img
              className="gallery__img"
              src={String(funko.ruta)}
              alt={String(funko.nombre)}
            />
            <h2 className="agotado">Agotado</h2>
            <label className="gallery__precio">{"$" + funko.precio}</label>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
