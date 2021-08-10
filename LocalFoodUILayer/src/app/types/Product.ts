export class Product {
    id: number;
    name: string;
    image: string;
    desc: string;
    price: number;
    discount: number;
    category: string
    constructor(id: number, name: string, image: string, desc: string, price: number, discount: number, category: string) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.price = price;
        this.discount = discount;
        this.desc = desc;
        this.category = category;
    }
}