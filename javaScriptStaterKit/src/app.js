
// // let firstName = 12

import EmployeeService from "./services/employeeService.js";

// // {
// //     let firstName = 13
// // }
// // console.log(firstName)


// // function doSomething() {
// //     number = 200
// // }

// // let number = 100
// // doSomething()
// // console.log(number)




// console.log("Hello world");

// function addToCart(quantity,productName){
//     console.log(quantity,productName)
// }
// addToCart() //undefined, tanimsiz ortada yok demek,  Java C#da hata verirdi direkt
// addToCart(10)

// // //default deger
// // function addToCart2(quantity,productName="Armut"){
// //     console.log(quantity,productName)
// // }
// // addToCart2(10)

// //arrow function
// let addToCart2 = (quantity) =>{
//     console.log(quantity)
// }
// addToCart2(10)

// let products = [
//     {productName:"Elma", unitPrice:10, quantity:5},
//     {productName:"Armut", unitPrice:10, quantity:5},
//     {productName:"Karpuz", unitPrice:10, quantity:5}
// ]

// //push-ekleme
// //jsde arraya obje olarak ekliyorsun push'da
// // products.push({productName:"Üzüm", unitPrice:100, quantity:5})
// // console.log(products)

// function addProduct(product) {
//     let productToFind = products.find(p=>p.productName === product.productName)  //p productstaki her nesne dönüyor productsdaki productName benim gönderdigim parametredeki productName esit ise yani
//     console.log(productToFind)
//     if(productToFind==undefined){
//         products.push(product)
//     }
//     else{
//         console.log("Ürün zaten mevcut")
//     }
//     // productToFind -- ya true ya da false dönecek

//     // for(let i=0;products.length;i++){
//     //     if(products[i].productName===product.productName){
//     //         checkExist=true
//     //     }
//     //     else{
//     //         checkExist=false
//     //     }
//     // }
// }
// addProduct({productName:"Üzüm", unitPrice:100, quantity:5}) //undefined
// //addProduct({productName:"Elma", unitPrice:100, quantity:5})

// //sartını sağlayanları filter yeni bir array döndürür
// let filteredProducts = products.filter(product=>product.unitPrice<100)
// console.log(filteredProducts) //3

// console.log(products)  //4

// //filter kullanarak icinde ar gecen ürünleri getir büyük küçük farketmez

// let searchKey = "ar" 
// // console.log(searchKey.toLowerCase())
// // let searchKey = inputKey.toLowerCase()
// let findAr = products.filter(product=>product.productName.toLowerCase().includes(searchKey))
// console.log(findAr)








// let array = ["Elma","Armut","Karpuz"]


// //forEach--tüm elemanları dolanır
// //herhangi deger dönmez sadece dizi icindeki elemanları döner
// // array.forEach(item => {
// //     //Arrow function
// //     console.log(item)
// // });

// //map
// //dizideki elemanları döner ama geriye bir deger döner
// array.map(meyve => {
//     console.log(meyve)
//     return meyve + "meyvesi"
// });
// //burdaki returnü okumuyor const değil cünkü

// //bize yeni bir dizi döner yani  let array2 = ["Elma","Armut","Karpuz"] 
// //bu şekilde bu nedenle retıurn dönmesi için const ekliyoruz başına


// const array2 = array.map(meyve => {
//     console.log(meyve)
//     return meyve + "meyvesi"
// });
// console.log(array2)


// //reduce-arrayi gezip araydeki önceki ve sonraki elemanlar arasında islem yapar
// const sayilar = [1,2,3,4,5,6,7,8,9,10]

// const toplam = sayilar.reduce((onceki,sonraki) =>{
//     return onceki + sonraki;
// })
// console.log(toplam)



// //*Classes

// let products2 = [
//     {productName:"Elma", unitPrice:10, quantity:5},
//     {productName:"Armut", unitPrice:10, quantity:5},
//     {productName:"Karpuz", unitPrice:10, quantity:5}
// ]

// //bir sınıfta ilk çalışan method constructor

// class Product{
    
// }



// find
const meyveler = ['🍇', '🍈', '🍉', '🍊', '🍋'];
const portakal = meyveler.find(meyve => meyve === '🍊');
console.log(portakal); // Output: 🍊

// Yorumlama Kısayolları: CTRL + Ö veya CTRL + K + C

// forEach
meyveler.forEach(item => {
  // Anonymous Arrow function
  console.log(item); // Output: 🍇 🍈 🍉 🍊 🍋
});

// map
const meyveler2 = meyveler.map(meyve => {
  // Yeni dizi örneği oluşturuyor
  return meyve + ' Meyvesi'; // Output: 🍇 Meyvesi 🍈 Meyvesi 🍉 Meyvesi 🍊 Meyvesi 🍋 Meyvesi
});

meyveler.forEach(item => console.log(item)); // Output: 🍇 🍈 🍉 🍊 🍋
meyveler2.forEach(item => console.log(item)); // Output: 🍇 Meyvesi 🍈 Meyvesi 🍉 Meyvesi 🍊 Meyvesi 🍋 Meyvesi

// reduce
const sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const toplam = sayilar.reduce((onceki, suanki) => {
  return onceki + suanki;
});
console.log(toplam); // Output: 55

// Classes
let products = [
  { productName: 'Elma', unitPrice: 10, quantity: 5 }, // Object
  { productName: 'Armut', unitPrice: 10, quantity: 5 },
  { productName: 'Karpuz', unitPrice: 10, quantity: 5 }
];

// Sınıf
class Product {
  // Properties - Özellikler

  constructor(productName, unitPrice, quantity) {
    // Constructor - Yapıcı metod
    this.productName = productName;
    this.unitPrice = unitPrice;
    this.quantity = quantity;

    console.log('Product sınıfının yapıcı metodu'); // Output: Product sınıfının yapıcı metodu
  }

  // Methods - Metodlar
  satinAl() {
    console.log(this.productName, 'Satın alındı'); // Output: <this.productName> Satın alındı
    console.log(this.productName + ' Satın alındı'); // Output: <this.productName> Satın alındı
  }
}

// Class'ları kullanarak nesneler/objeler üretiyoruz.
let product1 = new Product('Telefon', 5000, 1); // Nesne/Obje Örneği, Object Instance
let product2 = new Product('Tablet', 3000, 1);
let product3 = new Product('Laptop', 10000, 1);

const teknolojikUrunler = [product1, product2, product3];
// const teknolojikUrunler2 = [
//   { productName: 'Telefon', unitPrice: 5000, quantity: 1 },
//   product2,
//   product3
// ];

console.log(teknolojikUrunler); // Output: [Product { productName: 'Telefon', unitPrice: 5000, quantity: 1 }, Product { productName: 'Tablet', unitPrice: 3000, quantity: 1 }, Product { productName: 'Laptop', unitPrice: 10000, quantity: 1 }]
product1.satinAl(); // Output: Telefon Satın alındı






//--------------

let employeeService = new EmployeeService()
console.log(employeeService.getAll())