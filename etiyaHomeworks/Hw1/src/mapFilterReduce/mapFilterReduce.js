let products = [
    {id:1, name : "Monster Laptop", unitPrice:18000},
    {id:2, name : "Asus Laptop", unitPrice:11000},
    {id:3, name : "Casper Laptop", unitPrice:14000},
    {id:4, name : "Dell Laptop", unitPrice:12000},
    {id:5, name : "Acer Laptop", unitPrice:19000}
]

//map: For föngüsü gibi her bir elemani döner, 
console.log("<ul>")
products.map(product=>console.log(`<li>${product.name}</li>`))  //tek satır
console.log("</ul>")

products.map(product=>{       //birden fazla satır {}
    console.log(product)   //object
    console.log(`<li>${product.name}</li>`)
})

//filter: Filtreye uygun olan olusan degerleri array olarak döner
let filteredProducts = products.filter(product=>product.unitPrice>12000)
console.log(filteredProducts)


//reduce: Verilen bir koşula göre diziden tek bir eleman almak için kullanılır.
let cartTotal = products.reduce((acc,product)=>acc+product.unitPrice,0)  //her deferinde acc'ye unitPrice ekliycek, 0--baslangic  degeri
console.log(cartTotal)



let cartTotal2 = products
                .filter(p=>p.unitPrice>13000)  //array olusuyor
                .map(p=>{     //olusan arrayi dolusuyor
                    p.unitPrice = p.unitPrice*1.18
                    return p   //map'de return de edilir
                })         
                .reduce((acc,p)=>acc+p.unitPrice,0) //dönderilen p degerini hesapladi
console.log(cartTotal2)