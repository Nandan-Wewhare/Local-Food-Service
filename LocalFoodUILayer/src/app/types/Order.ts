export class Order {
    orderId: number;
    userId: number;
    cartValue: number;
    address: string;
    mobile: string;
    pincode: number;
    constructor(orderid: number, userId: number, cartValue: number, address: string, mobile: string, pincode: number) {
        this.orderId = orderid;
        this.userId = userId;
        this.cartValue = cartValue;
        this.address = address;
        this.mobile = mobile;
        this.pincode = pincode;
    }
}