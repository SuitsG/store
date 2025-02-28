

class Producto {
  #name;
  #price;
  #sizes;
  #colors;
  #imagen;

  constructor(name, price, sizes, colors, imagen) {
    this.#name = name;
    this.#price = price;
    this.#sizes = sizes;
    this.#colors = colors;
    this.#imagen = imagen;
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    this.#name = value;
  }

  get price() {
    return this.#price;
  }

  set price(value) {
    this.#price = value;
  }

  get sizes() {
    return this.#sizes;
  }

  set sizes(value) {
    this.#sizes = value;
  }

  get colors() {
    return this.#colors;
  }

  set colors(value) {
    this.#colors = value;
  }

  get imagen() {
    return this.#imagen;
  }

  set imagen(value) {
    this.#imagen = value;
  }

  mostrarInfo() {
    return `Nombre: ${this.#name}, Precio: ${this.#price}, Tallas: ${this.#sizes.join(', ')}, Colores: ${this.#colors.join(', ')}, Imagen: ${this.#imagen}`;
  }
}

const producto = new Producto('Camiseta', 19.99, ['S', 'M', 'L'], ['Rojo', 'Azul'], 'imagen.jpg');
console.log(producto.mostrarInfo());