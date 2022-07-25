class Customer{   //BaseCustomer   //export--public
    constructor(id,customerNumber){
        this.id=id
        this.customerNumber=customerNumber
    }
}


let customer=new Customer(1,"12345")   //Nesne olusturma(instance) //Customer customer = new Custoemr() yok

console.log(customer.id) //constructor icinde this.id= id ile id propertysi olusturup paramtre id ile eslestirmezsen calismaz

//prototyping--Bir nesneye yeni özellik ekleme
customer.name="Esra Özdoğan";   //instance prototyping--Bir nesneye yeni özellik ekleme
console.log(customer.name)
console.log(customer.customerNumber)

Customer.bisey = "Bişey";        //class prototyping
console.log(Customer.bisey)



class IndividualCustomer extends Customer{
    constructor(firstName,id,customerNumber){
        super(id,customerNumber)  //base'e gönderdik yani Customer sinifina
        this.firstName = firstName
    }
}

class CorporateCustomer extends Customer{
    constructor(companyName,id,customerNumber){
        super(id,customerNumber)
        this.companyName = companyName
    }
}