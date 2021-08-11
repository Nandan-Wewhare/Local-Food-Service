export class User {
    address: string;
    city: string;
    email: string;
    gender: string;
    mobile: string;
    password: string;
    pincode: number;
    userId: number;
    username: string;
    constructor(address: string,
        city: string,
        email: string,
        gender: string,
        mobile: string,
        password: string,
        pincode: number,
        userId: number,
        username: string) {
        this.address = address;
        this.city = city;
        this.email = email;
        this.gender = gender;
        this.mobile = mobile;
        this.password = password;
        this.pincode = pincode;
        this.userId = userId;
        this.username = username;
    }
}