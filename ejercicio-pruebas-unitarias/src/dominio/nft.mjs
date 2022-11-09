export default class Nft {

  constructor(titulo, descripcion, propietario, img, precio) {
    this.setTitulo(titulo);
    this.descripcion = descripcion;
    this.propietario = propietario;
    this.setImg(img);
    this.setPrecio(precio);
  }

  setTitulo(titulo) {
    if (titulo === "") {
        throw new Error(`Tu NFt tiene que tener un título`);
    } else {
        this.titulo = titulo;
    }
  }

  setImg(img) {
    if (img === "") {
        throw new Error(`Tienes que cargar una imagen`);
    } else {
        this.img = img;
    }
  }
  
  setPrecio(precio) {
    if (precio >= 0) {
      this.precio = precio;
    } else {
      throw new Error(`El precio debe ser mayor a 0`);
    }
  }
}