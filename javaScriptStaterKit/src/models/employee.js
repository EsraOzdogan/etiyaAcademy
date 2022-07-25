export default class Employee extends User{
    constructor(id,firstname,lastName,city,age,salary){
        super(id,firstname,lastName,city,age)
        this.salary= salary
    }
}