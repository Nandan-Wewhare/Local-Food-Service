export class CartItem {
    id: number
    name: string;
    quantity: number;
    total: number;
    constructor(itemid: number, name: string, qty: number, total: number) {
        this.name = name;
        this.quantity = qty;
        this.total = total;
        this.id = itemid;
    }
}