
import {users} from "../data/users.js";

export default class CustomerService{
    constructor(){
        this.customers = users.filter(user=>user.type == "customer")
    }

    getall(){
        return this.customers;
    }

    add(customer){
        this.customers.push(customer)
    }

    update(customer){ 
        let customerToUpdate = this.customers.find(customer=>customer.id === customer.id)
        if(customerToUpdate){
            customerToUpdate.firstName = customer.firstName;
            customerToUpdate.lastName = customer.lastName;
            customerToUpdate.age = customer.age;
            customerToUpdate.creditCardNumber = customer.creditCardNumber;
            customerToUpdate.city = customer.city;
        }


        //iş modeline göre değişir riskli

    }

//1,2,3,4,5,6,7,8
    delete(customer){//3
        this.customers = this.customers.filter(customer => customer.id !== customer.id) //gönderilen id dışındakileri buluyor 
    }
    //idsinde 3 olmayanı getiriyor yani 3ü siliyor
}