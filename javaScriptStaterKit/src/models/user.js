export default class User{
    constructor(id,firstname,lastName,city,age){  //müşteri ve çalışan için ortak alanlar burada parameter olarak alınır
        this.id = id
        this.firstname = firstname
        this.lastName = lastName
        this.city = city
        this.age = age
    }
}

let user = new User()
user.merve = "Merve"; //prototyping -- Bir nesneye sonradan özellik ekliyoruz --merve özelliği
user.name = "Merve"; //prototyping -- Bir nesneye sonradan özellik ekliyoruz name özelliği aslında name özelliği yok

console.log(user.merve)
console.log(user.name)
console.log(user.age) //undefined -user propertyleri tanımlanmamış

let user1 = new User(1,"Esra", "Özdoğan","İstanbul",23)
console.log(user1.age)

let user2 = new User()
console.log(user2.merve) //gelmez çünkü bellek te farklı yerdeler ve user2'ye merve özelliği eklenmedi bu nedenle

//İkisi de bellekte ayrı yerler
 
//constructor newlediğimiz zaman çalışır. her newlediğimizde o nesnenin prototypingini yapıyoruz

//2 tip kullanıcı var: customer, employee
