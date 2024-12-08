import Lista from "./Funkos.tsx";

export function searchFunkos() {
  let funkos = Lista;
  return funkos;
}

export function searchFunkoName(nombre: string) {
  let funkos = searchFunkos();
  const listado = funkos.filter((funko: Funko) =>
    funko.nombre.toLowerCase().includes(nombre.toLowerCase())
  );
  return listado;
}

export function searchFunkoSerie(serie: string) {
  let funkos = searchFunkos();
  const listado = funkos.filter((funko: Funko) =>
    funko.serie.toLowerCase().includes(serie.toLowerCase())
  );
  return listado;
}

export function searchFunkoEstado(estado: string) {
  let funkos = searchFunkos();
  const listado = funkos.filter((funko: Funko) => funko.estado === estado);
  return listado;
}
