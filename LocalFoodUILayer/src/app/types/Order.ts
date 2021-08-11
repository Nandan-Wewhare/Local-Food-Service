export class Order {
    email: string;
    mobile: number;
    name: string;
    quantity: number;
    userId: number;
    productId: number;
    constructor(email: string, mobile: number, name: string, quantity: number, userId: number, productId: number) {
        this.email = email;
        this.mobile = mobile;
        this.name = name;
        this.quantity = quantity;
        this.userId = userId;
        this.productId = productId;
    }
}