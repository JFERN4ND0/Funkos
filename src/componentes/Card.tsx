// import Lista from "../datos/Funkos.tsx";
import "./Card.css";

const conter = (cant: number) => {
  let exis = "";
  if (cant === 0) {
    exis = "sin_piezas";
  } else exis = "con_piezas";
  return "gallery__item " + exis;
};

const preventa = (estado: String) => {
  let exis = "";
  if (estado === "preventa") {
    exis = "preventa";
  }
  return "cantidad-funko " + exis;
};

const estadoP = (pieza: number, estado: String) => {
  let est = "";
  if (pieza >= 1 && (estado === "disponible" || estado === "venta")) {
    est = "x" + pieza;
    return est;
  } else if (estado === "preventa") return "P";
  else return "0";
};

function Card(props: Funko) {
  return (
    <div className={String(conter(props.piezas))}>
      <div className="card__fondo">
        <div className={String(preventa(props.estado))}>
          {String(estadoP(props.piezas, props.estado))}
        </div>
        <div className="title__fondo">
          <label className="gallery__title">{props.nombre}</label>
        </div>
        <div className="img__fondo">
          <img
            className="gallery__img"
            src={String(props.ruta)}
            alt={String(props.nombre)}
          />
        </div>
        <h2 className="agotado">Agotado</h2>
        <div className="precio__fondo">
          <label className="gallery__precio">{"$" + props.precio}</label>
        </div>
      </div>
    </div>
  );
}

export default Card;
