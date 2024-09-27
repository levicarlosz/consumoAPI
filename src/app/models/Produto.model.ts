export class Produto {
  id: number = 0;
  name: string = '';
  description: string = '';
  foto: string = '';
  price: number = 0;

  constructor(
    id: number,
    name: string,
    description: string,
    foto: string,
    price: number
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.foto = foto;
    this.price = price;
  }
}
