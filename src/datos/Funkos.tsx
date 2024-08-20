const raiz = "../assets/images/funkos/";

interface Funko {
  nombre: String;
  ruta: String;
  precio: number;
  piezas: number;
}

const Lista: Funko[] = [
  {
    nombre: "Dustin1247",
    ruta: raiz + "Dustin1247/Dustin.jpg",
    precio: 150,
    piezas: 3,
  },
  {
    nombre: "Eddie1462",
    ruta: raiz + "Eddie1462/Eddie.jpeg",
    precio: 150,
    piezas: 1,
  },
  {
    nombre: "Dustin1247",
    ruta: raiz + "Dustin1247/Dustin.jpg",
    precio: 150,
    piezas: 1,
  },
  {
    nombre: "Eddie1462",
    ruta: raiz + "Eddie1462/Eddie.jpeg",
    precio: 150,
    piezas: 0,
  },
  {
    nombre: "Dustin1247",
    ruta: raiz + "Dustin1247/Dustin.jpg",
    precio: 150,
    piezas: 3,
  },
  {
    nombre: "Eddie1462",
    ruta: raiz + "Eddie1462/Eddie.jpeg",
    precio: 150,
    piezas: 1,
  },
  {
    nombre: "Dustin1247",
    ruta: raiz + "Dustin1247/Dustin.jpg",
    precio: 150,
    piezas: 0,
  },
  {
    nombre: "Eddie1462",
    ruta: raiz + "Eddie1462/Eddie.jpeg",
    precio: 150,
    piezas: 1,
  },
  {
    nombre: "Dustin1247",
    ruta: raiz + "Dustin1247/Dustin.jpg",
    precio: 150,
    piezas: 0,
  },
];

export default Lista;
