import User from "./user.js"  //manuel olarak sonuna js ekledik

//default'ta süslü parantez içinde kullanılmaz import edilirken
export default class Customer extends User{
    constructor(id,firstname,lastName,city,age,creditCardNumber){ //zaten extend ettik tekrar this tapmıyoruz ortak olanları super içinde tanımlıyoruz
        // this.id = id
        // this.firstname = firstname
        // this.lastName = lastName
        // this.city = city
        // this.age = age
        super(id,firstname,lastName,city,age)
        this.creditCardNumber = creditCardNumber;
    }
}