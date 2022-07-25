import {users} from "../data/users.js";


export default class EmployeeService{
    constructor(){
        this.employees = users.filter(user=>user.type == "employee")
    }

    getAll(){
        return this.employees;
    }

    add(employee){
        this.employees.push(employee)
    }

    update(employee){ 
        let employeeToUpdate = this.employees.find(e=>e.id === e.id)
        if(employeeToUpdate){
            employeeToUpdate.firstName = employee.firstName;
            employeeToUpdate.lastName = employee.lastName;
            employeeToUpdate.age = employee.age;
            employeeToUpdate.city = employee.city;
            employeeToUpdate.salary = employee.salary;
        }


    }

//1,2,3,4,5,6,7,8
    delete(employee){//3
        this.employees = this.employees.filter(e => e.id !== e.id) //gönderilen id dışındakileri buluyor 
    }

    findEmployee(id){
        return this.employees.find(e=>e.id ===id)
    }

}