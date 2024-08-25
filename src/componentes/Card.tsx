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
  if (pieza >= 1 && estado === "venta") {
    est = "x" + pieza;
    return est;
  }
  if (estado === "preventa") return "P";
};

function Card(props: Funko) {
  return (
    // <div id="gallery" className="gallery">
    //   {lista.map((funko) => (
    <div className={String(conter(props.piezas))}>
      <div className="card__fondo">
        <div className={String(preventa(props.estado))}>
          {String(estadoP(props.piezas, props.estado))}
        </div>
        <label className="gallery__title">{props.nombre}</label>
        <img
          className="gallery__img"
          src={String(props.ruta)}
          alt={String(props.nombre)}
        />
        <h2 className="agotado">Agotado</h2>
        <label className="gallery__precio">{"$" + props.precio}</label>
      </div>
    </div>
    //   ))}
    // </div>
  );
}

export default Card;
