export default class Coleccion {
  constructor() {
    this.coleccion = [];
  }

  agregar(nft) {
    const mismoTitulo = this.coleccion.some((m) => m.titulo == nft.titulo);
    if (!mismoTitulo) {
      this.coleccion.push(nft);
    } else {
      throw new Error(`No se pudo agregar. ${nft.titulo} ya se encuentra agregado por su dueño ${nft.propietario}`);
    }
  }

  getColeccion() {
    return this.coleccion;
  }
}