class Customer{
    constructor(id,customerNumber){
        this.id=id
        this.customerNumber=customerNumber
    }
}
//prototyping
let customer=new Customer(1,"1234")
customer.name="Esra Özdoğan";
console.log(customer.name)
console.log(customer.customerNumber)


class IndividualCustomer extends Customer{
    constructor(firstName,id,customerNumber){
        super(id,customerNumber)
        this.firstName = firstName
    }
}

class CorporateCustomer extends Customer{
    constructor(companyName,id,customerNumber){
        super(id,customerNumber)
        this.companyName = companyName
    }
}