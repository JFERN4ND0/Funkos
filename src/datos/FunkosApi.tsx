import Lista from "./Funkos.tsx";

export function searchFunkos() {
  let funkos = Lista;
  return funkos;
}

export function searchFunkoName(nombre: string) {
  let funkos = searchFunkos();
  return funkos.find((funko: Funko) => funko.nombre === nombre);
}

export function searchFunkoEstado(estado: string) {
  let funkos = searchFunkos();
  return funkos.find((funko: Funko) => funko.estado === estado);
}
