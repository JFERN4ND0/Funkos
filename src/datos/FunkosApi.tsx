import Lista from "./Funkos.tsx";

export function searchFunko() {
  let funkos = Lista;
  return funkos;
}

export function searchFunkoName(nombre: string) {
  let funkos = searchFunko();
  return funkos.find((funko: Funko) => funko.nombre === nombre);
}

export function searchFunkoEstado(estado: string) {
  let funkos = searchFunko();
  return funkos.find((funko: Funko) => funko.estado === estado);
}
